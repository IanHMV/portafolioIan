import styles from "./HeroSection.module.css";
import type { HeroSectionProps } from "./HeroSection.types";
import Heading from "../../atoms/Heading/Heading";
import Text from "../../atoms/Text/Text";
import LinkComponent from "../../atoms/Link/LinkComponent";
import WireGlobe from "./WireGlobe";

const HeroSection = ({
  heading,
  description,
  primaryAction,
  secondaryAction,
  className = "",
}: HeroSectionProps) => {
  return (
    <section
      className={`relative flex min-h-svh items-center overflow-x-clip bg-surface px-4 py-12 sm:px-6 lg:px-16 lg:py-16 ${className}`}
    >
      {/*
        Contenedor del hero, sin fondo propio: todo se apoya sobre el mismo
        plano de la página.

        El fondo animado (la malla de olas) se retiró de aquí, pero NO se
        borró: sigue en ./WireTerrain.tsx junto con su clase `.backdrop` en
        el CSS. Para recuperarlo basta con importarlo y volver a poner:

            <div className={styles.backdrop} aria-hidden="true">
              <WireTerrain className="h-full w-full" />
            </div>
      */}
      <div className={styles.panel}>
        {/* El mundo: globo de alambre girando sobre su eje horizontal, detrás
            del contenido. Va antes que la composición en el DOM y con
            z-index 0, así el texto siempre queda por encima.
            La versión plana anterior sigue guardada en ./PolarGrid.tsx. */}
        <div className={styles.world} aria-hidden="true">
          <WireGlobe />
        </div>

        {/*
          LOGO GUARDADO — la marca de la esquina superior izquierda se retiró.

          Su CSS sigue entero (.mark, .tilt, .layer, .glow y el @keyframes
          float en HeroSection.module.css). Para devolverla, vuelve a
          importar CSSProperties, recupera la constante DEPTH_LAYERS y monta:

              <div className={styles.mark} role="img" aria-label={logo.alt}>
                <div className={styles.glow} />
                <div
                  className={styles.tilt}
                  style={{ "--logo-url": `url(${logo.src})` } as CSSProperties}
                >
                  {Array.from({ length: DEPTH_LAYERS }, (_, i) => (
                    <span key={i} className={styles.layer} style={{ "--i": i } as CSSProperties} />
                  ))}
                </div>
              </div>
        */}

        <div className={styles.composition}>
          {/* `.stack` mantiene el nombre en una rejilla a ancho completo: sin
              ella, `align-items: center` del flex lo dimensionaría por su
              contenido y el texto con `nowrap` desbordaría el panel. */}
          {/* Saludo y presentación van juntos y pegados; el aire grande se
              reserva para separarlos del bloque de abajo. */}
          <div className={styles.intro}>
            <div className={styles.stack}>
              <Heading as="h1" className={styles.displayName}>
                {heading.children}
              </Heading>
            </div>

            <Heading as="h2" className={styles.subtitle}>
              I&apos;m Ian
            </Heading>
          </div>

          {/* Capa 3: descripción y acciones, abajo y centradas */}
          <div className={styles.bottom}>
            <Text
              as="p"
              className={`${styles.tagline} ${description.className ?? ""}`}
            >
              {description.children}
            </Text>

            {/* Los dos botones comparten `.action` (mismo ancho) y se
                diferencian solo por el relleno: sólido para la acción
                principal, contorno para la secundaria. Ambos en la misma
                tinta que el título. */}
            <div className={styles.actions}>
              <LinkComponent
                href={primaryAction.href}
                className={`${styles.action} ${styles.actionPrimary}`}
              >
                {primaryAction.label}
              </LinkComponent>

              {secondaryAction && (
                <LinkComponent
                  href={secondaryAction.href}
                  className={`${styles.action} ${styles.actionGhost}`}
                >
                  {secondaryAction.label}
                </LinkComponent>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
