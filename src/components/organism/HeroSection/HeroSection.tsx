import type { CSSProperties } from "react";
import styles from "./HeroSection.module.css";
import type { HeroSectionProps } from "./HeroSection.types";
import Heading from "../../atoms/Heading/Heading";
import Text from "../../atoms/Text/Text";
import LinkComponent from "../../atoms/Link/LinkComponent";
import WireTerrain from "./WireTerrain";

const DEPTH_LAYERS = 10;

const HeroSection = ({ logo,
  heading,
  description,
  primaryAction,
  secondaryAction,
  className = "",
}: HeroSectionProps) => {
  return (
    <section
      className={`relative flex min-h-svh items-center bg-zinc-950 px-4 py-16 sm:px-6 lg:px-16 ${className}`}
    >
      {/* Panel: la malla de olas es SU fondo, no el de la sección. Todo el
          contenido del hero (logo, texto y botones) vive dentro de él. */}
      <div className={styles.panel}>
        <div className={styles.backdrop} aria-hidden="true">
          <WireTerrain className="h-full w-full" />
        </div>

        <div className="relative grid w-full items-center gap-10 md:grid-cols-2 md:gap-14">
          <div
            className={`${styles.stage} relative grid place-items-center`}
            role="img"
            aria-label={logo.alt}
          >
            <div className={styles.glow} />
            <div
              className={styles.tilt}
              style={{ "--logo-url": `url(${logo.src})` } as CSSProperties}
            >
              {Array.from({ length: DEPTH_LAYERS }, (_, i) => (
                <span
                  key={i}
                  className={styles.layer}
                  style={{ "--i": i } as CSSProperties}
                />
              ))}
            </div>
          </div>

          <div className={`${styles.content} flex flex-col items-center gap-6 text-center md:items-start md:text-left rounded-2xl bg-black/45 p-6 backdrop-blur-sm md:p-8`}>
            <Heading
              as="h1"
              size={heading.size}
              className={`font-bold text-white leading-tight tracking-tight ${heading.className ?? ""}`}
            >
              {heading.children}
            </Heading>

            <Text
              as="p"
              className={`text-gray-400 text-lg max-w-xl ${description.className ?? ""}`}
            >
              {description.children}
            </Text>

            {/* `${styles.action}` iguala el ancho de los dos botones: sin él
                cada uno mide lo que mida su texto */}
            <div className="flex flex-wrap justify-center gap-4 md:justify-start">
              <LinkComponent
                href={primaryAction.href}
                className={`${styles.action} rounded-lg bg-green-400 font-semibold text-zinc-950 transition-colors hover:bg-green-300`}
              >
                {primaryAction.label}
              </LinkComponent>

              {secondaryAction && (
                <LinkComponent
                  href={secondaryAction.href}
                  className={`${styles.action} rounded-lg border border-zinc-800 bg-zinc-900 font-semibold text-white transition-colors hover:bg-zinc-800`}
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
