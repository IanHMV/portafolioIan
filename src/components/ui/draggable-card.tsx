import { useEffect, useRef, useState } from "react";
import type { ReactNode, RefObject, MouseEvent } from "react";
import { cn } from "@/lib/utils";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useAnimationControls,
} from "motion/react";

/*
 * Adaptado del draggable-card de Aceternity UI para este proyecto (Vite,
 * sin Next, por eso no lleva "use client"):
 * - `containerRef`: limita el arrastre a un contenedor y hace que las
 *   tarjetas REBOTEN contra sus bordes (dragElastic + dragTransition),
 *   en vez de usar la ventana completa.
 * - `onTap`: click "seguro" de motion — solo dispara si no hubo arrastre.
 * - `glare`: el brillo blanco es opcional (estorba en tarjetas con fondo
 *   transparente, como nuestros fólders).
 * - Se eliminó el bloque de `animate(info.point.x, ...)` del original:
 *   animaba números sueltos sin conectarlos a ningún elemento (código
 *   muerto); el rebote real lo hace dragTransition.
 */

interface DraggableCardBodyProps {
  className?: string;
  children?: ReactNode;
  /** Contenedor que limita el arrastre; las tarjetas rebotan en sus bordes */
  containerRef?: RefObject<HTMLDivElement | null>;
  /** Se dispara al hacer click/tap, pero no después de arrastrar */
  onTap?: () => void;
  /** Reflejo blanco sobre la tarjeta al inclinarla (default: true) */
  glare?: boolean;
}

export const DraggableCardBody = ({
  className,
  children,
  containerRef,
  onTap,
  glare = true,
}: DraggableCardBodyProps) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  const [windowConstraints, setWindowConstraints] = useState({
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  });

  const springConfig = {
    stiffness: 100,
    damping: 20,
    mass: 0.5,
  };

  const rotateX = useSpring(
    useTransform(mouseY, [-300, 300], [25, -25]),
    springConfig,
  );
  const rotateY = useSpring(
    useTransform(mouseX, [-300, 300], [-25, 25]),
    springConfig,
  );

  const opacity = useSpring(
    useTransform(mouseX, [-300, 0, 300], [0.8, 1, 0.8]),
    springConfig,
  );

  const glareOpacity = useSpring(
    useTransform(mouseX, [-300, 0, 300], [0.2, 0, 0.2]),
    springConfig,
  );

  /* Fallback cuando no hay containerRef: límites basados en la ventana */
  useEffect(() => {
    const updateConstraints = () => {
      setWindowConstraints({
        top: -window.innerHeight / 2,
        left: -window.innerWidth / 2,
        right: window.innerWidth / 2,
        bottom: window.innerHeight / 2,
      });
    };

    updateConstraints();
    window.addEventListener("resize", updateConstraints);
    return () => window.removeEventListener("resize", updateConstraints);
  }, []);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } =
      cardRef.current?.getBoundingClientRect() ?? {
        width: 0,
        height: 0,
        left: 0,
        top: 0,
      };
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    mouseX.set(clientX - centerX);
    mouseY.set(clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      drag
      dragConstraints={containerRef ?? windowConstraints}
      dragElastic={0.18}
      dragMomentum
      dragTransition={{ bounceStiffness: 260, bounceDamping: 18 }}
      onTap={onTap}
      onDragStart={() => {
        document.body.style.cursor = "grabbing";
      }}
      onDragEnd={() => {
        document.body.style.cursor = "default";
        controls.start({
          rotateX: 0,
          rotateY: 0,
          transition: {
            type: "spring",
            ...springConfig,
          },
        });
      }}
      style={{
        rotateX,
        rotateY,
        opacity,
        willChange: "transform",
      }}
      animate={controls}
      whileHover={{ scale: 1.02 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative min-h-96 w-80 overflow-hidden rounded-md bg-neutral-100 p-6 shadow-2xl transform-3d dark:bg-neutral-900",
        className,
      )}
    >
      {children}
      {glare && (
        <motion.div
          style={{
            opacity: glareOpacity,
          }}
          className="pointer-events-none absolute inset-0 bg-white select-none"
        />
      )}
    </motion.div>
  );
};

export const DraggableCardContainer = ({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  return (
    <div className={cn("[perspective:3000px]", className)}>{children}</div>
  );
};
