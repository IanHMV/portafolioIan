import styles from "./Footer.module.css";
import type { FooterProps } from "./Footer.types";

import Heading from "../../atoms/Heading/Heading";
import Text from "../../atoms/Text/Text";
import Image from "../../atoms/Image/Image";
import LinkComponent from "../../atoms/Link/LinkComponent";
import { SocialOrbs } from "../../molecules/SocialOrbs/SocialOrbs";

const Footer = ({
  id,
  logo,
  heading,
  description,
  action,
  links = [],
  resume,
  social,
  orbs,
  copyright,
  className = "",
}: FooterProps) => {
  return (
    <footer id={id} className={`${styles.footer} ${className}`}>
      <div className={styles.inner}>
        <div className={styles.intro}>
          {logo && (
            <Image src={logo.src} alt={logo.alt} className={styles.logo} />
          )}

          {/* El tamaño y el color los pone el CSS del footer, no utilidades
              sueltas desde los datos: así el cierre de la página comparte
              tinta y tipografía con el hero. */}
          <Heading
            as={heading.as ?? "h2"}
            className={`${styles.heading} ${heading.className ?? ""}`}
          >
            {heading.children}
          </Heading>

          <Text
            as="p"
            className={`${styles.description} ${description.className ?? ""}`}
          >
            {description.children}
          </Text>

          {action && (
            <LinkComponent
              href={action.href}
              className={styles.cta}
              size="text-sm"
            >
              {action.label}
              {/* La flecha va como SVG suelto y no por el átomo Icon: ese
                  solo conoce tres iconos (git, home, settings) y tira de
                  Font Awesome, que es una petición de red para dibujar una
                  línea y dos trazos. */}
              <svg
                aria-hidden
                className={styles.ctaArrow}
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h13M13 6l6 6-6 6" />
              </svg>
            </LinkComponent>
          )}
        </div>

        {/* La columna de contacto: las esferas y, debajo, la descarga del
            CV. Comparten columna para que en escritorio el CV quede con los
            enlaces de contacto y no colgando del titular. */}
        <div className={styles.contact}>
          {/* `orbs` va primero: lo de abajo no se puede sobreescribir desde data */}
          <SocialOrbs
            {...orbs}
            items={social}
            ariaLabel="Social links"
            className={styles.orbs}
          />

          {resume && (
            <LinkComponent
              href={resume.href}
              download={resume.download}
              size="text-sm"
              className={styles.resume}
            >
              {/* Bandeja con flecha hacia abajo: el gesto de "esto baja a tu
                  disco", que es lo que lo separa del CTA de contacto. */}
              <svg
                aria-hidden
                className={styles.resumeIcon}
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 3v12m0 0l-4-4m4 4l4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
              </svg>
              {resume.label}
            </LinkComponent>
          )}
        </div>
      </div>

      <div className={styles.bottom}>
        {links.length > 0 && (
          <nav aria-label="Secciones" className={styles.nav}>
            {links.map((link) => (
              <LinkComponent
                key={link.href}
                href={link.href}
                size="text-sm"
                className={styles.navLink}
              >
                {link.label}
              </LinkComponent>
            ))}
          </nav>
        )}

        <Text as="span" size="text-xs" className={styles.copy}>
          {copyright}
        </Text>
      </div>
    </footer>
  );
};

export default Footer;
