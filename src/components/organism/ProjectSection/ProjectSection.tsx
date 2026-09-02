import { useEffect, useRef, useState } from "react";
import styles from "./ProjectSection.module.css";
import type { ProjectSectionProps } from "./ProjectSection.types";

import Text from "../../atoms/Text/Text";
import Heading from "../../atoms/Heading/Heading";
import CardProject from "../../molecules/CardProject/CardProject";

/* Ancho real de la tarjeta (`.card` en CardProject.module.css). Todo el arco
   se dimensiona a partir de él: si allí cambia, aquí también. */
const CARD_WIDTH = 300;

/* Aire entre la tarjeta central y sus vecinas. */
const CARD_GAP = 24;

/* Margen reservado a cada lado del escenario para que la máscara del borde
   (`.stage` en el CSS) se coma aire y no la esquina de una tarjeta. */
const STAGE_EDGE = 28;

/* Una tarjeta lateral no es simétrica en pantalla: gira 18° sobre su eje Y y
   se acerca 34px al espectador, así que la perspectiva ensancha su borde
   exterior y encoge el interior. Medido sobre la tarjeta de 300px: sobresale
   1.145 × su media anchura hacia fuera y 0.96 hacia dentro. El lado interior
   manda para el hueco entre tarjetas; el exterior, para saber si el arco
   cabe en el escenario. */
const SIDE_INNER = 0.96;
const SIDE_OUTER = 1.145;

/* Cuánto crece la tarjeta central (ver `arcStyle`). */
const CENTER_GROW = 1.06;

/* Separación entre centros: media central + media lateral + aire. El valor
   anterior (230px) era MENOR que el ancho de la tarjeta, así que las
   tarjetas se solapaban ~70px: de ahí que se vieran amontonadas. */
const ARC_SPACING =
  (CARD_WIDTH / 2) * CENTER_GROW + (CARD_WIDTH / 2) * SIDE_INNER + CARD_GAP;

/* Segundos de reposo entre paso y paso del autoplay. */
const STEP_INTERVAL = 4;

/* Pasos encolados como máximo: pulsar la flecha diez veces seguidas no debe
   lanzar el carrusel a dar vueltas. */
const MAX_PENDING = 2;

const MOBILE_QUERY = "(max-width: 767px)";

/* En móvil el carrusel no se mueve solo y solo se ve UNA tarjeta: no hay
   sitio para el arco de tres y una tarjeta que se desplaza sola es imposible
   de tocar. En escritorio se ven siempre tres. */
const LAYOUT = {
  desktop: { spacing: ARC_SPACING, visible: 3, autoplay: true },
  mobile: { spacing: CARD_WIDTH + CARD_GAP, visible: 1, autoplay: false },
} as const;

type Layout = (typeof LAYOUT)[keyof typeof LAYOUT];

/* Dónde descansa el arco al entrar en la página.
 *
 * En escritorio se ven TRES tarjetas: una centrada y una a cada lado. Si el
 * carrusel arrancara centrado en la primera, el hueco de la izquierda se
 * quedaría vacío y solo se verían DOS proyectos hasta que el autoplay diera
 * el primer paso — que es exactamente lo que se veía al refrescar.
 *
 * Centrando la SEGUNDA, los tres primeros proyectos están en pantalla desde
 * el primer fotograma (y desde el HTML prerenderizado, que se pinta antes de
 * que corra nada de JS). La flecha de atrás pasa a servir para algo: centrar
 * el primero.
 *
 * En móvil solo cabe una tarjeta, así que ahí manda la primera. El `min` es
 * para las listas de un solo proyecto: no hay segunda que centrar. */
const startIndex = (layout: Layout, count: number) =>
  layout.visible === 1 ? 0 : Math.min(1, Math.max(0, count - 1));

/* Ancho que necesita el arco completo a escala 1:1. Con tres visibles mandan
   las laterales (`spacing` + su media anchura proyectada); con una sola
   tarjeta manda la tarjeta misma. */
const requiredWidth = (layout: Layout) =>
  layout.visible === 1
    ? CARD_WIDTH + STAGE_EDGE * 2
    : (layout.spacing + (CARD_WIDTH / 2) * SIDE_OUTER + STAGE_EDGE) * 2;

/* Cuando el arco no cabe no se recorta: se encoge entero. Así las tres
   tarjetas siguen viéndose completas y con el mismo aire entre ellas en
   cualquier ancho, en vez de desbordar el escenario y salir cortadas. */
const fitFactor = (stageWidth: number, layout: Layout) =>
  stageWidth > 0 ? Math.min(1, stageWidth / requiredWidth(layout)) : 1;

/* Distancia (con signo) entre una tarjeta y la posición del carrusel.

   El arco ya NO es circular: tiene principio y final. Antes se buscaba la
   distancia MÁS CORTA dando la vuelta, así que desde el primer proyecto —el
   más reciente y el más relevante— el vecino de la izquierda era el último
   de la lista, el más antiguo, y una sola flecha atrás se saltaba todo lo
   de en medio. Con la resta directa hay que recorrer los proyectos en el
   orden en que están escritos en `data.ts`. */
const slotOffset = (index: number, position: number) => index - position;

const clamp = (value: number, min: number, max: number) =>
  Math.min(max, Math.max(min, value));

/* La posición descansa en enteros, pero durante el easing arrastra colas de
   milésimas. Este margen es lo que separa «ya he llegado al extremo» de
   «me falta un pelo» al decidir si una flecha se apaga. */
const EDGE_EPSILON = 0.002;

/* Apariencia de un slot según su distancia (continua) al centro del arco:
   se separa, rota hacia el espectador, crece al centro y se desvanece al
   salir de la ventana visible.

   La ventana mide media tarjeta más que el número de visibles,
   `(visible + 1) / 2`: a distancia 1 la lateral está entera y a distancia 2
   ya ha desaparecido. Antes se usaba `visible` a secas, que dejaba opacas
   las tarjetas hasta la distancia 2 — cinco a la vez, unas sobre otras. */
const arcStyle = (d: number, layout: Layout, fit: number) => {
  const abs = Math.abs(d);
  const fade = (layout.visible + 1) / 2;
  const scale = (1 + 0.06 * Math.max(0, 1 - abs)) * fit;
  return {
    opacity: Math.max(0, Math.min(1, fade - abs)),
    transform: `translate(-50%, -50%) translateX(${d * layout.spacing * fit}px) translateZ(${abs * 34 * fit}px) rotateY(${-d * 18}deg) scale(${scale})`,
  };
};

/* matchMedia en vez de un breakpoint de CSS porque aquí el tamaño no cambia
   estilos, cambia el COMPORTAMIENTO (autoplay sí/no) y eso vive en JS. */
const useMatchMedia = (query: string) => {
  const [matches, setMatches] = useState(
    () => typeof window !== "undefined" && window.matchMedia(query).matches
  );

  useEffect(() => {
    const mql = window.matchMedia(query);
    const sync = () => setMatches(mql.matches);
    sync();
    mql.addEventListener("change", sync);
    return () => mql.removeEventListener("change", sync);
  }, [query]);

  return matches;
};

const ProjectSection = ({ id,
  eyebrow,
  heading,
  description,
  projects,
  className = "",
}: ProjectSectionProps) => {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const slotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const prevArrow = useRef<HTMLButtonElement | null>(null);
  const nextArrow = useRef<HTMLButtonElement | null>(null);
  const count = projects.length;
  /* Último índice al que puede llegar el arco. El `Math.max` es para la
     lista vacía: sin él el tope quedaría en -1 y `clamp` devolvería una
     posición negativa. */
  const lastIndex = Math.max(0, count - 1);

  const isMobile = useMatchMedia(MOBILE_QUERY);
  const layout = isMobile ? LAYOUT.mobile : LAYOUT.desktop;
  /* El arco descansa aquí al entrar; ver `startIndex`. */
  const start = startIndex(layout, count);

  const position = useRef(start);
  const pending = useRef(0);
  /* Hacia dónde tira el autoplay. Al no haber vuelta circular, en el último
     proyecto se da la vuelta en lugar de saltar al primero. */
  const autoDirection = useRef<1 | -1>(1);
  const idle = useRef(0);
  const pausedRef = useRef(false);

  /* El ancho del escenario lo decide la rejilla (las flechas tienen carril
     propio), así que hay que medirlo: de ahí sale la escala del arco. */
  const [stageWidth, setStageWidth] = useState(0);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const observer = new ResizeObserver(([entry]) => {
      setStageWidth(entry.contentRect.width);
    });
    observer.observe(stage);
    return () => observer.disconnect();
  }, []);

  const fit = fitFactor(stageWidth, layout);

  /* La flecha mueve el DESTINO (posición + cola), no la posición a secas, y
     ese destino se recorta a [0, count - 1]: en el primer proyecto la flecha
     atrás no hace nada y en el último tampoco la de avanzar. */
  const step = (direction: 1 | -1) => {
    const target = clamp(
      position.current + pending.current + direction,
      0,
      lastIndex
    );
    pending.current = clamp(
      target - position.current,
      -MAX_PENDING,
      MAX_PENDING
    );
    autoDirection.current = direction;
    idle.current = 0;
  };

  /* Avance por pasos: el carrusel descansa en posiciones ENTERAS, que es
     donde se ven exactamente tres tarjetas completas, y solo desde ahí encola
     el siguiente paso. La deriva continua anterior no se detenía nunca en una
     posición limpia, así que siempre había tarjetas a medio entrar.
     Los transforms se pintan directamente en el DOM (sin re-renders). */
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let raf = 0;
    /* El primer fotograma no tiene con qué comparar, así que su `dt` es 0 y
       a partir de ahí manda el reloj que trae el propio rAF. Sembrarlo con
       `performance.now()` era pedir la hora dos veces al mismo reloj. */
    let last = 0;

    const frame = (now: number) => {
      const dt = last === 0 ? 0 : Math.min((now - last) / 1000, 0.1);
      last = now;

      /* El hover no corta un paso a medias — dejaría el arco torcido —, solo
         impide que se encole el siguiente. */
      if (layout.autoplay && !reduceMotion && !pausedRef.current && pending.current === 0) {
        idle.current += dt;
        if (idle.current >= STEP_INTERVAL) {
          idle.current = 0;
          /* Al tocar un extremo el autoplay se da la vuelta y recorre el
             arco en sentido contrario. Antes enlazaba el último con el
             primero y el visitante podía caer en los proyectos viejos sin
             haber pasado por los recientes. */
          if (position.current >= lastIndex) autoDirection.current = -1;
          else if (position.current <= 0) autoDirection.current = 1;
          const target = clamp(
            position.current + autoDirection.current,
            0,
            lastIndex
          );
          pending.current = target - position.current;
        }
      }

      /* Los pasos (autoplay y flechas) se consumen con easing exponencial */
      if (pending.current !== 0) {
        const chunk = reduceMotion
          ? pending.current
          : pending.current * Math.min(1, dt * 5);
        position.current += chunk;
        pending.current -= chunk;
        /* La cola se salda de golpe para aterrizar EXACTAMENTE en el entero:
           un residuo de 0.001 basta para dejar el arco descuadrado. */
        if (Math.abs(pending.current) < 0.002) {
          position.current += pending.current;
          pending.current = 0;
        }
      }

      position.current = clamp(position.current, 0, lastIndex);

      /* Las flechas viven fuera del ciclo de render (la posición es un ref
         para no repintar 60 veces por segundo), así que su estado se escribe
         aquí mismo, igual que el de los slots: se apaga la que ya no lleva a
         ningún sitio. */
      const target = position.current + pending.current;
      if (prevArrow.current) prevArrow.current.disabled = target <= EDGE_EPSILON;
      if (nextArrow.current)
        nextArrow.current.disabled = target >= lastIndex - EDGE_EPSILON;

      slotRefs.current.forEach((slot, index) => {
        if (!slot) return;
        const d = slotOffset(index, position.current);
        const { opacity, transform } = arcStyle(d, layout, fit);
        slot.style.opacity = String(opacity);
        slot.style.transform = transform;
        slot.inert = opacity < 0.05;
      });

      raf = requestAnimationFrame(frame);
    };

    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, [lastIndex, layout, fit]);

  return (
    <section id={id} className={`${styles.section} ${className}`}>
      {/* Misma cabecera que Experience y Skills: rótulo, titular y bajada.
          Las clases salen del CSS Module — el titular ya NO recibe su color
          ni su cuerpo desde los datos, que era lo que dejaba a esta sección
          con una tipografía y una paleta propias. */}
      <div className={styles.header}>
        {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}

        <Heading
          as={heading.as ?? "h2"}
          className={`${styles.title} ${heading.className ?? ""}`}
        >
          {heading.children}
        </Heading>

        <Text
          as="p"
          className={`${styles.lead} ${description.className ?? ""}`}
        >
          {description.children}
        </Text>
      </div>

      {/* Rejilla de 3 columnas: flecha | escenario | flecha. Antes las flechas
          iban en `position: absolute` sobre el escenario y en móvil caían
          encima de la tarjeta; así ocupan su propio carril. */}
      <div className={styles.content}>
        <div className={styles.carousel}>
          <button
            ref={prevArrow}
            type="button"
            aria-label="Previous project"
            onClick={() => step(-1)}
            /* Apagada solo si el arco descansa ya en el primer proyecto (en
               móvil). En escritorio arranca centrado en el segundo, así que
               atrás sí lleva a algún sitio. A partir del primer fotograma
               este estado lo escribe el bucle. */
            disabled={start <= 0}
            className={styles.arrow}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div
            ref={stageRef}
            className={styles.stage}
            /* El alto acompaña a la escala del arco: si las tarjetas se
               encogen, el escenario no debe dejar un hueco vacío debajo. */
            style={{ ["--fit" as string]: fit }}
            onPointerEnter={() => { pausedRef.current = true; }}
            onPointerLeave={() => { pausedRef.current = false; }}
          >
            {projects.map((project, index) => {
              const initial = arcStyle(slotOffset(index, start), layout, fit);
              return (
                <div
                  key={`${project.title}-${index}`}
                  ref={(el) => { slotRefs.current[index] = el; }}
                  className={styles.slot}
                  inert={initial.opacity < 0.05}
                  style={initial}
                >
                  <CardProject {...project} />
                </div>
              );
            })}
          </div>

          <button
            ref={nextArrow}
            type="button"
            aria-label="Next project"
            onClick={() => step(1)}
            disabled={count <= 1}
            className={styles.arrow}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
