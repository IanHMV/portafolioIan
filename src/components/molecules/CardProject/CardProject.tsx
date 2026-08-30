import styles from "./CardProject.module.css";
import type { CardProjectProps } from "./CardProject.types.ts";

// ─── Átomos ───────────────────────────────────────────────────────────────
import Image from "../../atoms/Image/Image.tsx";
import Text from "../../atoms/Text/Text.tsx";
import Heading from "../../atoms/Heading/Heading.tsx";
import Icon from "../../atoms/Icon/Icon.tsx";
import LinkComponent from "../../atoms/Link/LinkComponent.tsx";

/*
 * ¿Por qué NO se usa Icon para GitHub?
 * Icon.types.ts solo acepta "git" | "home" | "settings" y el logo de GitHub
 * no está en ese mapa. Se pasa como children de LinkComponent, que acepta
 * ReactNode — que es exactamente para lo que sirve ese átomo.
 */
const GitHubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

/* Para los proyectos cuyo enlace no es un repositorio (los que están
   publicados y no tienen código abierto). */
const ExternalIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M7 17 17 7M9 7h8v8" />
  </svg>
);

const isRepo = (url: string) => /(^|\/\/|\.)github\.com\//i.test(url);

// ─── Componente ───────────────────────────────────────────────────────────
const CardProject = ({
  className = "",
  img,
  title,
  description,
  footer,
  githubUrl,
  liveUrl,
  backColor = "#151515",
}: CardProjectProps) => {
  /* El botón principal lleva al sitio publicado si lo hay; si no, al único
     enlace que tenga el proyecto. */
  const primaryUrl = liveUrl ?? githubUrl;
  const primaryIsRepo = isRepo(primaryUrl);

  return (
    <article
      className={`${styles.card} ${className}`}
      /* backColor viaja como custom property para que el CSS Module pueda
         usarlo sin que el componente sepa dónde se pinta. */
      style={{ ["--accent" as string]: backColor }}
    >
      <div className={styles.media}>
        {/*
         * rounded="rounded-sm" para que el radio del átomo no compita con el
         * de .media, que es quien recorta la imagen.
         */}
        <Image
          src={img.src}
          alt={img.alt}
          rounded="rounded-sm"
          className={styles.image}
        />
      </div>

      <div className={styles.body}>
        {/* Heading as="h3": el nombre del proyecto cuelga del h2 de la sección */}
        <Heading as="h3" size="text-2xl" className={styles.title}>
          {title}
        </Heading>

        <Text as="p" size="text-sm" weight="font-normal" className={styles.description}>
          {description}
        </Text>

        {/* ── Metadatos: stack y tipo de enlace ── */}
        <div className={styles.meta}>
          {footer && (
            <span className={styles.metaItem}>
              <Icon icon="git" size="text-sm" className={styles.metaIcon} />
              <Text as="span" size="text-xs" weight="font-medium" className={styles.metaText}>
                {footer}
              </Text>
            </span>
          )}

          <span className={styles.metaItem}>
            <Icon icon="home" size="text-sm" className={styles.metaIcon} />
            <Text as="span" size="text-xs" weight="font-medium" className={styles.metaText}>
              {primaryIsRepo ? "Repository" : "Live site"}
            </Text>
          </span>
        </div>

        {/* ── Acciones ── */}
        <div className={styles.actions}>
          <LinkComponent href={primaryUrl} size="text-sm" className={styles.cta}>
            {primaryIsRepo ? "View code" : "Visit site"}
          </LinkComponent>

          {/*
           * El botón circular solo aparece cuando hay un segundo destino
           * distinto. Con un único enlace serían dos botones al mismo sitio,
           * que además duplica el destino para quien navega con lector de
           * pantalla; en ese caso el principal ocupa todo el ancho.
           */}
          {liveUrl && githubUrl && (
            <LinkComponent
              href={githubUrl}
              className={styles.iconLink}
            >
              {isRepo(githubUrl) ? <GitHubIcon /> : <ExternalIcon />}
            </LinkComponent>
          )}
        </div>
      </div>
    </article>
  );
};

export default CardProject;
