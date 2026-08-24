import { useEffect, useRef } from "react";
import styles from "./ProjectSection.module.css";
import type { ProjectSectionProps } from "./ProjectSection.types";

import Text from "../../atoms/Text/Text";
import Heading from "../../atoms/Heading/Heading";
import CardProject from "../../molecules/CardProject/CardProject";

/* Velocidad crucero: posiciones de tarjeta por segundo (1 tarjeta ≈ 4.5s) */
const CRUISE_SPEED = 0.22;
const CARD_SPACING = 340;
const MAX_VISIBLE_OFFSET = 3;

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
const arcStyle = (d: number) => {
  const abs = Math.abs(d);
  const scale = 1 + 0.06 * Math.max(0, 1 - abs);
  return {
    opacity: Math.max(0, Math.min(1, MAX_VISIBLE_OFFSET - abs)),
    transform: `translate(-50%, -50%) translateX(${d * CARD_SPACING}px) translateZ(${abs * 34}px) rotateY(${-d * 18}deg) scale(${scale})`,
  };
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

      if (!reduceMotion) {
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
        const { opacity, transform } = arcStyle(d);
        slot.style.opacity = String(opacity);
        slot.style.transform = transform;
        slot.inert = opacity === 0;
      });

      raf = requestAnimationFrame(frame);
    };

    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, [count]);

  return (
    <section id={id} className={`${styles.section} ${className}`}>
      <div className={styles.header}>
        <Heading {...heading} />
        <Text {...description} />
      </div>

      <div className={`${styles.content} relative mx-auto max-w-6xl`}>
        <div
          className={styles.stage}
          onPointerEnter={() => { pausedRef.current = true; }}
          onPointerLeave={() => { pausedRef.current = false; }}
        >
          {projects.map((project, index) => {
            const initial = arcStyle(circularOffset(index, 0, count));
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
          aria-label="Previous project"
          onClick={() => { pending.current -= 1; }}
          className={`${styles.arrow} left-2 sm:left-4`}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <button
          type="button"
          aria-label="Next project"
          onClick={() => { pending.current += 1; }}
          className={`${styles.arrow} right-2 sm:right-4`}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default ProjectSection;
