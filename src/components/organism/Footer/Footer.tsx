import styles from "./Footer.module.css";
import type { FooterProps } from "./Footer.types";

import Heading from "../../atoms/Heading/Heading";
import Text from "../../atoms/Text/Text";
import Image from "../../atoms/Image/Image";
import LinkComponent from "../../atoms/Link/LinkComponent";
import { SocialDial } from "../../molecules/SocialDial/SocialDial";

const Footer = ({ id,
  logo,
  heading,
  description,
  links = [],
  social,
  dial,
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
        </div>

        {/* `dial` va primero: lo de abajo no se puede sobreescribir desde data */}
        <SocialDial
          size={210}
          {...dial}
          items={social}
          ariaLabel="Redes sociales"
          className={styles.dial}
        />
      </div>

      <div className={styles.bottom}>
        <Text as="span" size="text-xs" className={styles.copy}>
          {copyright}
        </Text>
      </div>
    </footer>
  );
};

export default Footer;
