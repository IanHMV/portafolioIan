import { useEffect, useRef, useState } from "react";
import styles from "./ProjectSection.module.css";
import type { ProjectSectionProps } from "./ProjectSection.types";

import Text from "../../atoms/Text/Text";
import Heading from "../../atoms/Heading/Heading";
import CardProject from "../../molecules/CardProject/CardProject";

/* Velocidad crucero: posiciones de tarjeta por segundo (1 tarjeta ≈ 4.5s) */
const CRUISE_SPEED = 0.22;

const MOBILE_QUERY = "(max-width: 767px)";

/* En móvil el carrusel no se mueve solo y solo se ve UNA tarjeta: no hay
   sitio para el arco de tres y una tarjeta que se desplaza sola es imposible
   de tocar. En escritorio se mantiene el arco de siempre. */
const LAYOUT = {
  desktop: { spacing: 230, maxVisible: 3, autoplay: true },
  mobile: { spacing: 170, maxVisible: 1, autoplay: false },
} as const;

type Layout = (typeof LAYOUT)[keyof typeof LAYOUT];

/* Distancia circular más corta entre una tarjeta y la posición del carrusel */
const circularOffset = (index: number, position: number, count: number) => {
  let d = (index - position) % count;
  if (d > count / 2) d -= count;
  if (d < -count / 2) d += count;
  return d;
};

/* Apariencia de un slot según su distancia (continua) al centro del arco:
   se separa, rota hacia el espectador, crece al centro y se desvanece al
   acercarse a los bordes ocultos. */
const arcStyle = (d: number, layout: Layout) => {
  const abs = Math.abs(d);
  const scale = 1 + 0.06 * Math.max(0, 1 - abs);
  return {
    opacity: Math.max(0, Math.min(1, layout.maxVisible - abs)),
    transform: `translate(-50%, -50%) translateX(${d * layout.spacing}px) translateZ(${abs * 34}px) rotateY(${-d * 18}deg) scale(${scale})`,
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
  heading,
  description,
  projects,
  className = "",
}: ProjectSectionProps) => {
  const slotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const position = useRef(0);
  const pending = useRef(0);
  const speedFactor = useRef(1);
  const pausedRef = useRef(false);
  const count = projects.length;

  const isMobile = useMatchMedia(MOBILE_QUERY);
  const layout = isMobile ? LAYOUT.mobile : LAYOUT.desktop;

  /* Cinta continua: cada frame avanza la posición fraccional y pinta los
     transforms directamente en el DOM (sin re-renders de React). El hover
     no congela en seco: la velocidad desacelera y re-acelera suavemente. */
  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let raf = 0;
    let last = performance.now();

    const frame = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.1);
      last = now;

      const target = pausedRef.current ? 0 : 1;
      speedFactor.current += (target - speedFactor.current) * Math.min(1, dt * 6);

      if (!reduceMotion && layout.autoplay) {
        position.current += CRUISE_SPEED * speedFactor.current * dt;
      }

      /* Las flechas encolan ±1 y se consume con easing exponencial */
      if (pending.current !== 0) {
        const chunk = reduceMotion
          ? pending.current
          : pending.current * Math.min(1, dt * 8);
        position.current += chunk;
        pending.current -= chunk;
        if (Math.abs(pending.current) < 0.001) pending.current = 0;
      }

      position.current = ((position.current % count) + count) % count;

      slotRefs.current.forEach((slot, index) => {
        if (!slot) return;
        const d = circularOffset(index, position.current, count);
        const { opacity, transform } = arcStyle(d, layout);
        slot.style.opacity = String(opacity);
        slot.style.transform = transform;
        slot.inert = opacity === 0;
      });

      raf = requestAnimationFrame(frame);
    };

    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, [count, layout]);

  return (
    <section id={id} className={`${styles.section} ${className}`}>
      <div className={styles.header}>
        <Heading {...heading} />
        <Text {...description} />
      </div>

      {/* Rejilla de 3 columnas: flecha | escenario | flecha. Antes las flechas
          iban en `position: absolute` sobre el escenario y en móvil caían
          encima de la tarjeta; así ocupan su propio carril. */}
      <div className={`${styles.content} mx-auto max-w-6xl`}>
        <div className={styles.carousel}>
          <button
            type="button"
            aria-label="Previous project"
            onClick={() => { pending.current -= 1; }}
            className={styles.arrow}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div
            className={styles.stage}
            onPointerEnter={() => { pausedRef.current = true; }}
            onPointerLeave={() => { pausedRef.current = false; }}
          >
            {projects.map((project, index) => {
              const initial = arcStyle(circularOffset(index, 0, count), layout);
              return (
                <div
                  key={`${project.title}-${index}`}
                  ref={(el) => { slotRefs.current[index] = el; }}
                  className={styles.slot}
                  inert={initial.opacity === 0}
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
            onClick={() => { pending.current += 1; }}
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
