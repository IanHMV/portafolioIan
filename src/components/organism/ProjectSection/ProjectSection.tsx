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

/* Distancia circular más corta entre una tarjeta y la posición del carrusel */
const circularOffset = (index: number, position: number, count: number) => {
  let d = (index - position) % count;
  if (d > count / 2) d -= count;
  if (d < -count / 2) d += count;
  return d;
};

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
  const position = useRef(0);
  const pending = useRef(0);
  const idle = useRef(0);
  const pausedRef = useRef(false);
  const count = projects.length;

  const isMobile = useMatchMedia(MOBILE_QUERY);
  const layout = isMobile ? LAYOUT.mobile : LAYOUT.desktop;

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

  const step = (direction: 1 | -1) => {
    pending.current = Math.max(
      -MAX_PENDING,
      Math.min(MAX_PENDING, pending.current + direction)
    );
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
    let last = performance.now();

    const frame = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.1);
      last = now;

      /* El hover no corta un paso a medias — dejaría el arco torcido —, solo
         impide que se encole el siguiente. */
      if (layout.autoplay && !reduceMotion && !pausedRef.current && pending.current === 0) {
        idle.current += dt;
        if (idle.current >= STEP_INTERVAL) {
          idle.current = 0;
          pending.current = 1;
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

      position.current = ((position.current % count) + count) % count;

      slotRefs.current.forEach((slot, index) => {
        if (!slot) return;
        const d = circularOffset(index, position.current, count);
        const { opacity, transform } = arcStyle(d, layout, fit);
        slot.style.opacity = String(opacity);
        slot.style.transform = transform;
        slot.inert = opacity < 0.05;
      });

      raf = requestAnimationFrame(frame);
    };

    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, [count, layout, fit]);

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
            type="button"
            aria-label="Previous project"
            onClick={() => step(-1)}
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
              const initial = arcStyle(circularOffset(index, 0, count), layout, fit);
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
            type="button"
            aria-label="Next project"
            onClick={() => step(1)}
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
