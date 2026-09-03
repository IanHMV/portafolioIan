"use client";

import { useCallback, useLayoutEffect, useRef } from "react";
import type {
  CSSProperties,
  MouseEvent as ReactMouseEvent,
  PointerEvent as ReactPointerEvent,
} from "react";

import { SOCIAL_ORB_BRANDS, brandFaceImage } from "./socialOrbs.config";
import type { SocialOrbsProps } from "./SocialOrbs.types";
import styles from "./SocialOrbs.module.css";

/** Permite pasar custom properties dentro de `style` sin castear a `any`. */
type CSSVars = CSSProperties & Record<`--${string}`, string | number>;

/** Enlaces que no deben abrirse en pestaña nueva (mailto:, tel:, anclas). */
const SAME_TAB_PROTOCOL = /^(mailto:|tel:|#)/;

/** Hueco mínimo entre esferas y contra las paredes al repartirlas. */
const GAP = 12;
/** Por debajo de este diámetro el icono de marca ya no se distingue. */
const MIN_ORB = 34;
/** Píxeles arrastrados a partir de los cuales soltar ya NO abre el enlace. */
const DRAG_SLOP = 6;
/** Velocidad (px/fotograma) por debajo de la cual el bucle se apaga. */
const SLEEP = 0.08;
/** Tope de velocidad: un lanzamiento muy rápido atravesaría a las demás. */
const MAX_SPEED = 26;

/** Una esfera: centro y velocidad, en px dentro del área. */
interface Orb {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

interface Drag {
  index: number;
  pointerId: number;
  /** Distancia entre el centro de la esfera y el dedo al agarrarla. */
  offX: number;
  offY: number;
  /** Recorrido acumulado; separa un toque de un arrastre. */
  moved: number;
}

const cx = (...values: Array<string | false | undefined>) =>
  values.filter(Boolean).join(" ");

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

/**
 * Tamaño de esfera y reparto ORDENADO de salida.
 *
 * El diámetro que se pide es un tope, no una promesa: en un móvil de 320px
 * cinco esferas de 64 no caben, así que se encogen hasta que quepan y, si
 * aun así no entran de ancho, se reparten en varias filas. Es lo que hace
 * que el área funcione igual con tres redes que con cinco sin tocar nada
 * desde React.
 */
const solveLayout = (count: number, w: number, h: number, maxOrb: number) => {
  /* Punto de partida: todas en una fila repartiéndose el ancho. */
  let d = Math.min(maxOrb, (w - GAP) / count - GAP, h - GAP * 2);
  let cols = count;
  let rows = 1;

  /* Termina siempre: `d` solo baja y tiene suelo en MIN_ORB. */
  for (;;) {
    d = Math.max(MIN_ORB, d);
    cols = Math.max(1, Math.min(count, Math.floor((w - GAP) / (d + GAP))));
    rows = Math.ceil(count / cols);
    if (rows * (d + GAP) + GAP <= h || d <= MIN_ORB) break;
    d -= 2;
  }

  /* Cada fila parte el ancho en huecos iguales y las filas hacen lo mismo
     con el alto: la retícula limpia que ve quien llega a la página. */
  const homes = Array.from({ length: count }, (_, index) => {
    const row = Math.floor(index / cols);
    const col = index - row * cols;
    const inRow = Math.min(cols, count - row * cols);

    return {
      x: (w * (col + 1)) / (inRow + 1),
      y: (h * (row + 1)) / (rows + 1),
    };
  });

  return { d, homes };
};

/**
 * Paredes del área. La esfera que lleva el dedo se recorta igual —no puede
 * salirse del cuadro— pero no rebota: rebotar contra el propio dedo se
 * siente como si el agarre se hubiera soltado.
 */
const walls = (
  orb: Orb,
  w: number,
  h: number,
  r: number,
  bounce: number,
  held: boolean,
) => {
  if (orb.x < r) {
    orb.x = r;
    if (!held && orb.vx < 0) orb.vx = -orb.vx * bounce;
  } else if (orb.x > w - r) {
    orb.x = w - r;
    if (!held && orb.vx > 0) orb.vx = -orb.vx * bounce;
  }

  if (orb.y < r) {
    orb.y = r;
    if (!held && orb.vy < 0) orb.vy = -orb.vy * bounce;
  } else if (orb.y > h - r) {
    orb.y = h - r;
    if (!held && orb.vy > 0) orb.vy = -orb.vy * bounce;
  }
};

/**
 * Choque entre dos esferas: primero se separan lo que se solapan y luego se
 * reparten el impulso a lo largo de la línea que une sus centros (las dos
 * pesan igual).
 *
 * La que lleva el dedo cuenta como masa infinita: no se aparta ni cambia de
 * velocidad, EMPUJA. Es lo que hace que arrastrar una esfera contra el
 * montón se sienta como mover algo con peso.
 */
const collide = (
  a: Orb,
  b: Orb,
  r: number,
  bounce: number,
  heldA: boolean,
  heldB: boolean,
) => {
  const min = r * 2;
  let dx = b.x - a.x;
  let dy = b.y - a.y;
  let dist = Math.hypot(dx, dy);

  /* Dos centros exactamente encima (el primer fotograma, antes de medir la
     caja) no tienen normal: se inventa una para desempatar. */
  if (dist === 0) {
    dx = 0.7071;
    dy = 0.7071;
    dist = 1;
  }

  if (dist >= min || (heldA && heldB)) return;

  const nx = dx / dist;
  const ny = dy / dist;
  const overlap = min - dist;
  /* Reparto del desplazamiento: la retenida no cede su mitad. */
  const shareA = heldA ? 0 : heldB ? 1 : 0.5;
  const shareB = 1 - shareA;

  a.x -= nx * overlap * shareA;
  a.y -= ny * overlap * shareA;
  b.x += nx * overlap * shareB;
  b.y += ny * overlap * shareB;

  const approach = (b.vx - a.vx) * nx + (b.vy - a.vy) * ny;
  if (approach > 0) return; // ya se están separando

  /* Con una retenida, la libre se lleva TODO el impulso; entre dos libres
     se reparte a medias. */
  const impulse = -(1 + bounce) * approach * (heldA || heldB ? 1 : 0.5);

  if (!heldA) {
    a.vx -= impulse * nx;
    a.vy -= impulse * ny;
  }

  if (!heldB) {
    b.vx += impulse * nx;
    b.vy += impulse * ny;
  }
};

export const SocialOrbs = ({
  items,
  orbSize = 64,
  width = 380,
  height = 190,
  friction = 0.92,
  bounce = 0.62,
  hint = "Drag them around",
  newTab = true,
  ariaLabel = "Social links",
  className,
}: SocialOrbsProps) => {
  const pitRef = useRef<HTMLElement | null>(null);
  const elsRef = useRef<Array<HTMLAnchorElement | null>>([]);
  const orbsRef = useRef<Orb[]>([]);
  /** Medidas del área y diámetro vigente; las escribe `measure`. */
  const boxRef = useRef({ w: 0, h: 0, d: orbSize });
  const dragRef = useRef<Drag | null>(null);
  const movedRef = useRef(0);
  const rafRef = useRef(0);
  const calmRef = useRef(false);

  /* Los ajustes que consulta el bucle viajan por ref: así ni los
     manejadores ni el rAF se recrean en cada render, y aun así ninguno se
     queda con un valor viejo. */
  const tuneRef = useRef({ friction, bounce, orbSize });
  tuneRef.current = { friction, bounce, orbSize };

  const count = items.length;

  /* Los transforms se escriben directamente en el DOM: 60 renders por
     segundo de React para mover tres círculos no compensan. */
  const paint = useCallback(() => {
    const r = boxRef.current.d / 2;

    orbsRef.current.forEach((orb, index) => {
      const el = elsRef.current[index];
      if (el) {
        el.style.transform = `translate3d(${orb.x - r}px, ${orb.y - r}px, 0)`;
      }
    });
  }, []);

  /* Función con nombre para poder encolarse a sí misma: `step` todavía no
     existe cuando se construye el cuerpo del bucle. */
  const step = useCallback(function frame() {
    const { w, h, d } = boxRef.current;
    const { friction: keep, bounce: bounciness } = tuneRef.current;
    const orbs = orbsRef.current;
    const drag = dragRef.current;
    const held = drag ? drag.index : -1;
    /* Sin movimiento decorativo: al soltar, la esfera se queda donde está. */
    const rebound = calmRef.current ? 0 : bounciness;
    const r = d / 2;

    for (let i = 0; i < orbs.length; i++) {
      if (i === held) continue; // esa la coloca el dedo, no la inercia
      const orb = orbs[i];
      orb.x += orb.vx;
      orb.y += orb.vy;
      orb.vx *= keep;
      orb.vy *= keep;
    }

    /* Dos pasadas: con una sola, tres esferas apretadas en una esquina se
       quedan solapadas — resolver el primer par vuelve a meter a la tercera
       dentro del segundo. */
    for (let pass = 0; pass < 2; pass++) {
      for (let i = 0; i < orbs.length; i++) {
        for (let j = i + 1; j < orbs.length; j++) {
          collide(orbs[i], orbs[j], r, rebound, i === held, j === held);
        }
      }

      for (let i = 0; i < orbs.length; i++) {
        walls(orbs[i], w, h, r, rebound, i === held);
      }
    }

    paint();

    const busy =
      drag !== null ||
      orbs.some((orb) => Math.abs(orb.vx) > SLEEP || Math.abs(orb.vy) > SLEEP);

    if (busy) {
      rafRef.current = requestAnimationFrame(frame);
      return;
    }

    /* Todo quieto: se apaga el bucle. Un rAF eterno repintando lo mismo
       fotograma tras fotograma es batería tirada, y este componente vive al
       final de la página. */
    orbs.forEach((orb) => {
      orb.vx = 0;
      orb.vy = 0;
    });
    rafRef.current = 0;
  }, [paint]);

  const wake = useCallback(() => {
    if (!rafRef.current) rafRef.current = requestAnimationFrame(step);
  }, [step]);

  /** Mide el área, calcula el diámetro y coloca las esferas. */
  const measure = useCallback(
    (reset: boolean) => {
      const pit = pitRef.current;
      if (!pit) return;

      const { width: w, height: h } = pit.getBoundingClientRect();
      const prev = boxRef.current;
      const { d, homes } = solveLayout(count, w, h, tuneRef.current.orbSize);
      const orbs = orbsRef.current;

      orbs.length = count;
      elsRef.current.length = count;

      for (let i = 0; i < count; i++) {
        if (reset || !orbs[i] || prev.w === 0 || prev.h === 0) {
          orbs[i] = { ...homes[i], vx: 0, vy: 0 };
          continue;
        }

        /* Al cambiar el tamaño del área (girar el móvil, abrir el panel de
           Storybook) la esfera conserva su posición RELATIVA: quien la dejó
           en una esquina se la encuentra en esa esquina. */
        orbs[i].x *= w / prev.w;
        orbs[i].y *= h / prev.h;
      }

      boxRef.current = { w, h, d };
      pit.style.setProperty("--orb", `${d}px`);

      for (let i = 0; i < count; i++) walls(orbs[i], w, h, d / 2, 0, true);
      paint();
    },
    [count, paint],
  );

  useLayoutEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncMotion = () => {
      calmRef.current = motion.matches;
    };

    syncMotion();
    motion.addEventListener("change", syncMotion);
    measure(true);

    /* El área es fluida (`min(--w, 100%)`), así que su ancho cambia sin que
       cambie el de la ventana: hay que observar la caja, no el resize. */
    const observer =
      typeof ResizeObserver === "undefined"
        ? null
        : new ResizeObserver(() => measure(false));
    const pit = pitRef.current;
    const onResize = () => measure(false);

    if (observer && pit) observer.observe(pit);
    else window.addEventListener("resize", onResize);

    return () => {
      motion.removeEventListener("change", syncMotion);
      observer?.disconnect();
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(rafRef.current);
      rafRef.current = 0;
      dragRef.current = null;
    };
  }, [measure]);

  /*
   * Pointer Events y no touch/mouse por separado: el dedo, el ratón y el
   * lápiz llegan por el mismo sitio. `setPointerCapture` es lo que hace que
   * la esfera siga al dedo aunque este se salga de ella —o del área— sin
   * tener que escuchar en `window`.
   */
  const handlePointerDown = (
    event: ReactPointerEvent<HTMLAnchorElement>,
    index: number,
  ) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    /* Un dedo cada vez: con dos, el segundo se quedaba con el arrastre y la
       esfera del primero se congelaba a medio camino. */
    if (dragRef.current) return;

    const pit = pitRef.current;
    const orb = orbsRef.current[index];
    if (!pit || !orb) return;

    const rect = pit.getBoundingClientRect();

    event.currentTarget.setPointerCapture(event.pointerId);
    dragRef.current = {
      index,
      pointerId: event.pointerId,
      /* Se agarra por donde se toca y no por el centro: si no, la esfera da
         un salto bajo el dedo en cuanto arranca el arrastre. */
      offX: orb.x - (event.clientX - rect.left),
      offY: orb.y - (event.clientY - rect.top),
      moved: 0,
    };
    movedRef.current = 0;
    orb.vx = 0;
    orb.vy = 0;
    wake();
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLAnchorElement>) => {
    const drag = dragRef.current;
    const pit = pitRef.current;
    if (!drag || !pit || drag.pointerId !== event.pointerId) return;

    const orb = orbsRef.current[drag.index];
    if (!orb) return;

    const rect = pit.getBoundingClientRect();
    const x = event.clientX - rect.left + drag.offX;
    const y = event.clientY - rect.top + drag.offY;

    drag.moved += Math.abs(x - orb.x) + Math.abs(y - orb.y);
    movedRef.current = drag.moved;

    /* La velocidad del lanzamiento es lo que se movió el dedo en este
       fotograma. Con tope: un manotazo la colaría a través de otra esfera
       antes de que el choque llegue a mirarlas. */
    orb.vx = clamp(x - orb.x, -MAX_SPEED, MAX_SPEED);
    orb.vy = clamp(y - orb.y, -MAX_SPEED, MAX_SPEED);
    orb.x = x;
    orb.y = y;
    wake();
  };

  const handlePointerUp = (event: ReactPointerEvent<HTMLAnchorElement>) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;

    const orb = orbsRef.current[drag.index];
    if (orb && calmRef.current) {
      orb.vx = 0;
      orb.vy = 0;
    }

    dragRef.current = null;
    wake();
  };

  /*
   * Soltar después de arrastrar NO abre la red: el navegador manda su click
   * justo detrás del pointerup, así que hay que cancelarlo a mano. Por
   * debajo del umbral fue un toque y el enlace hace su trabajo de siempre
   * —incluido el Enter del teclado, que llega aquí sin haber arrastrado.
   */
  const handleClick = (event: ReactMouseEvent<HTMLAnchorElement>) => {
    const moved = movedRef.current;
    movedRef.current = 0;
    if (moved > DRAG_SLOP) event.preventDefault();
  };

  /* Las medidas van en la caja de fuera: el área se mide contra ella (ver
     `.wrap` en el CSS). `--orb` lo escribe `measure` en el propio área. */
  const wrapStyle: CSSVars = {
    "--w": `${width}px`,
    "--h": `${height}px`,
  };

  return (
    <div className={cx(styles.wrap, className)} style={wrapStyle}>
      <nav
        aria-label={ariaLabel}
        className={styles.pit}
        ref={pitRef}
        style={{ "--orb": `${orbSize}px` } as CSSVars}
      >
        {items.map((item, index) => {
          const brand = SOCIAL_ORB_BRANDS[item.id];
          const external = newTab && !SAME_TAB_PROTOCOL.test(item.href);
          const orbStyle: CSSVars = {
            "--face": brandFaceImage(item.id),
            /* escalona la entrada: las esferas no aterrizan todas a la vez */
            "--i": index,
          };

          return (
            <a
              aria-label={item.label}
              className={styles.orb}
              /* el arrastre nativo de enlaces se queda el puntero y pinta su
                 propio fantasma encima de la esfera */
              draggable={false}
              href={item.href}
              key={item.id}
              onClick={handleClick}
              onPointerCancel={handlePointerUp}
              onPointerDown={(event) => handlePointerDown(event, index)}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              ref={(el) => {
                elsRef.current[index] = el;
              }}
              rel={external ? "noopener noreferrer" : undefined}
              style={orbStyle}
              target={external ? "_blank" : undefined}
            >
              <svg aria-hidden className={styles.icon} viewBox="0 0 24 24">
                <path d={brand.path} />
              </svg>

              <span aria-hidden className={styles.tag}>
                {item.label}
              </span>
            </a>
          );
        })}
      </nav>

      {hint && (
        <p aria-hidden className={styles.hint}>
          {hint}
        </p>
      )}
    </div>
  );
};

export type {
  SocialOrbItem,
  SocialOrbItems,
  SocialOrbsProps,
} from "./SocialOrbs.types";
