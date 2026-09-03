"use client";

import { useRef, useCallback } from "react";
import Text from "../../atoms/Text/Text";
import Heading from "../../atoms/Heading/Heading";
import Image from "../../atoms/Image/Image";
import styles from "./Card.module.css";
import type { CardProps } from "./Card.types";

// ─── CSS vars iniciales para el efecto glare ───────────────────────────────
const GLARE_CONTAINER_VARS = {
  "--m-x": "50%",
  "--m-y": "50%",
  "--r-x": "0deg",
  "--r-y": "0deg",
  "--bg-x": "50%",
  "--bg-y": "50%",
  "--duration": "300ms",
  "--foil-size": "100%",
  "--opacity": "0",
  "--easing": "ease",
} as React.CSSProperties;

// ─── CSS vars para la capa foil rainbow ───────────────────────────────────
const FOIL_VARS = {
  "--step": "5%",
  "--foil-svg": `url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.99994 3.419C2.99994 3.419 21.6142 7.43646 22.7921 12.153C23.97 16.8695 3.41838 23.0306 3.41838 23.0306' stroke='white' stroke-width='5' stroke-miterlimit='3.86874' stroke-linecap='round' style='mix-blend-mode:darken'/%3E%3C/svg%3E")`,
  "--pattern": "var(--foil-svg) center/100% no-repeat",
  "--rainbow":
    "repeating-linear-gradient(0deg,rgb(255,119,115) calc(var(--step)*1),rgba(255,237,95,1) calc(var(--step)*2),rgba(168,255,95,1) calc(var(--step)*3),rgba(131,255,247,1) calc(var(--step)*4),rgba(120,148,255,1) calc(var(--step)*5),rgb(216,117,255) calc(var(--step)*6),rgb(255,119,115) calc(var(--step)*7)) 0% var(--bg-y)/200% 700% no-repeat",
  "--diagonal":
    "repeating-linear-gradient(128deg,#0e152e 0%,hsl(180,10%,60%) 3.8%,hsl(180,10%,60%) 4.5%,hsl(180,10%,60%) 5.2%,#0e152e 10%,#0e152e 12%) var(--bg-x) var(--bg-y)/300% no-repeat",
  "--shade":
    "radial-gradient(farthest-corner circle at var(--m-x) var(--m-y),rgba(255,255,255,0.1) 12%,rgba(255,255,255,0.15) 20%,rgba(255,255,255,0.25) 120%) var(--bg-x) var(--bg-y)/300% no-repeat",
} as React.CSSProperties;

// ─── Componente ────────────────────────────────────────────────────────────
const Card = ({
  title,
  description,
  img,
  className = "",
  glare = false,
}: CardProps) => {
  const isPointerInside = useRef(false);
  const refElement = useRef<HTMLDivElement>(null);

  // Refs en lugar de estado para evitar re-renders en cada movimiento del mouse
  const mouseState = useRef({
    glare: { x: 50, y: 50 },
    background: { x: 50, y: 50 },
    rotate: { x: 0, y: 0 },
  });

  const updateStyles = useCallback(() => {
    const el = refElement.current;
    if (!el) return;
    const { background, rotate, glare: g } = mouseState.current;
    el.style.setProperty("--m-x", `${g.x}%`);
    el.style.setProperty("--m-y", `${g.y}%`);
    el.style.setProperty("--r-x", `${rotate.x}deg`);
    el.style.setProperty("--r-y", `${rotate.y}deg`);
    el.style.setProperty("--bg-x", `${background.x}%`);
    el.style.setProperty("--bg-y", `${background.y}%`);
  }, []);

  const handlePointerMove = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      const rect = event.currentTarget.getBoundingClientRect();
      const percentage = {
        x: (100 / rect.width) * (event.clientX - rect.left),
        y: (100 / rect.height) * (event.clientY - rect.top),
      };
      const delta = { x: percentage.x - 50, y: percentage.y - 50 };
      const { background, rotate, glare: g } = mouseState.current;

      background.x = 50 + percentage.x / 4 - 12.5;
      background.y = 50 + percentage.y / 3 - 16.67;
      // 0.4 = rotateFactor: reduce intensidad de la rotación
      rotate.x = -(delta.x / 3.5) * 0.4;
      rotate.y = (delta.y / 2) * 0.4;
      g.x = percentage.x;
      g.y = percentage.y;

      updateStyles();
    },
    [updateStyles]
  );

  const handlePointerEnter = useCallback(() => {
    isPointerInside.current = true;
    // Espera 300ms antes de desactivar la transición para una entrada suave
    setTimeout(() => {
      if (isPointerInside.current) {
        refElement.current?.style.setProperty("--duration", "0s");
      }
    }, 300);
  }, []);

  const handlePointerLeave = useCallback(() => {
    isPointerInside.current = false;
    const el = refElement.current;
    if (!el) return;
    el.style.removeProperty("--duration");
    el.style.setProperty("--r-x", "0deg");
    el.style.setProperty("--r-y", "0deg");
  }, []);

  return (
    /*
     * Capa 1 — Perspectiva + tracking del mouse
     * [perspective:600px] aquí no afecta nada sin un transform 3D en un hijo,
     * así que es seguro dejarlo siempre activo.
     */
    <div
      ref={refElement}
      style={glare ? GLARE_CONTAINER_VARS : undefined}
      className={`relative text-white cursor-pointer shadow-xl group h-96 [perspective:600px] ${className}`}
      onPointerMove={glare ? handlePointerMove : undefined}
      onPointerEnter={glare ? handlePointerEnter : undefined}
      onPointerLeave={glare ? handlePointerLeave : undefined}
    >
      {/*
       * Capa 2 — Transform 3D + clip de esquinas
       * overflow-hidden + rounded aquí para que el clip funcione
       * durante la rotación 3D. Si overflow-hidden estuviera en el padre,
       * las esquinas se verían mal al rotar.
       */}
      <div
        className={[
          "relative w-full h-full overflow-hidden rounded-xl will-change-transform",
          "transition-transform duration-[var(--duration,300ms)] ease-[var(--easing,ease)]",
          glare
            ? "[transform:rotateY(var(--r-x,0deg))_rotateX(var(--r-y,0deg))]"
            + " hover:[--opacity:.6] hover:[--duration:200ms] hover:[--easing:linear]"
            : "",
        ].join(" ")}
      >
        {/* Imagen de fondo con zoom en hover */}
        <div className="absolute inset-0 transition-transform duration-500 ease-in-out group-hover:scale-110">
          <Image {...img} className="w-full h-full object-cover" />
        </div>

        {/* Gradiente que oscurece la mitad inferior para que el texto se lea sobre cualquier imagen (definido en Card.module.css) */}
        <div className={styles.gradient} />

        {/* Contenido de texto */}
        <div className="relative z-10 p-5 flex flex-col justify-end h-full">
          <Heading {...title} as="h3" />
          <Text {...description} as="p" />
        </div>

        {/* ── Capas de glare (solo cuando glare=true) ── */}
        {glare && (
          <>
            {/*
             * Capa de brillo: radial blanco que sigue al cursor.
             * mix-blend-soft-light para que se vea natural sobre la imagen.
             */}
            <div className="absolute inset-0 z-20 pointer-events-none opacity-[var(--opacity,0)] mix-blend-soft-light transition-opacity duration-[var(--duration,300ms)] [background:radial-gradient(farthest-corner_circle_at_var(--m-x,50%)_var(--m-y,50%),rgba(255,255,255,0.8)_10%,rgba(255,255,255,0.65)_20%,rgba(255,255,255,0)_90%)]" />

            {/*
             * Capa foil: efecto holográfico arcoíris.
             * mix-blend-color-dodge para que solo afecte las zonas claras.
             * Las CSS vars --rainbow, --diagonal, --shade se definen en FOIL_VARS
             * y son accesibles en el mismo elemento donde se declaran.
             */}
            <div
              className="absolute inset-0 z-20 pointer-events-none opacity-[var(--opacity,0)] mix-blend-color-dodge transition-opacity duration-[var(--duration,300ms)]"
              style={{
                background: "var(--pattern), var(--rainbow), var(--diagonal), var(--shade)",
                backgroundBlendMode: "hue, hue, hue, overlay",
                ...FOIL_VARS,
              }}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Card;