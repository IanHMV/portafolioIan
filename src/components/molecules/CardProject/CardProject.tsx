import styles from "./CardProject.module.css";
import type { CardProjectProps } from "./CardProject.types.ts";

// ─── Átomos ───────────────────────────────────────────────────────────────
import Image from "../../atoms/Image/Image.tsx";
import Text from "../../atoms/Text/Text.tsx";
import Heading from "../../atoms/Heading/Heading.tsx";
import LinkComponent from "../../atoms/Link/LinkComponent.tsx";

/*
 * ¿Por qué NO se usa Icon para GitHub?
 * Icon.types.ts solo acepta "git" | "home" | "settings".
 * El ícono de GitHub no está en ese mapa.   
 * Se pasa como children de LinkComponent (que acepta ReactNode),
 * que es exactamente para lo que sirve ese átomo.
 */
const GitHubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

// ─── Componente ───────────────────────────────────────────────────────────
const CardProject = ({
  className = "",
  img,
  description,
  title,
  footer,
  githubUrl,
  backColor = "#151515",
}: CardProjectProps) => {
  return (
    <div className={`${styles.card} ${className}`}>
      <div className={styles.content}>

        {/* ── Cara trasera (visible al hacer hover) ── */}
        <div
          className={styles.back}
          style={{ backgroundColor: backColor }}
        >
          {/* Icono de GitHub arriba a la derecha */}
          <div className={styles.backTop}>
            {/*
             * LinkComponent atom: href abre en pestaña nueva.
             * className={styles.githubLink} aplica el color white
             * y la transición de opacidad definidos en el CSS Module.
             * El SVG como children es válido porque LinkComponent
             * acepta React.ReactNode.
             */}
            <LinkComponent
              href={githubUrl}
              className={styles.githubLink}
            >
              <GitHubIcon />
            </LinkComponent>
          </div>

          {/* Título del proyecto centrado */}
          <div className={styles.backCenter}>
            {/*
             * Heading atom: as="h3" semánticamente correcto para
             * el nombre de un proyecto dentro de una card.
             */}
            <Heading as="h3" size="text-base" className="text-center">
              {title}
            </Heading>
          </div>

          {/* Footer en la parte inferior */}
          {footer && (
            <div className={styles.backFooter}>
              {/*
               * Text atom: as="span" porque está dentro de un div
               * que ya actúa como contenedor semántico.
               */}
              <Text as="span" size="text-xs" weight="font-normal">
                {footer}
              </Text>
            </div>
          )}
        </div>

        {/* ── Cara frontal (visible por defecto) ── */}
        <div className={styles.front}>

          {/*
           * Image atom: rounded="rounded-sm" para que no interfiera
           * con el border-radius del .front definido en CSS Module.
           * className sobreescribe dimensiones para cubrir toda la card.
           */}
          <Image
            src={img.src}
            alt={img.alt}
            rounded="rounded-sm"
            className={styles.frontImage}
          />

          {/* Degradado sobre la imagen para legibilidad del texto */}
          <div className={styles.frontOverlay} />

          {/* Descripción anclada en la parte inferior */}
          <div className={styles.frontContent}>
            <Text as="p" size="text-xs" weight="font-normal">
              {description}
            </Text>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CardProject;