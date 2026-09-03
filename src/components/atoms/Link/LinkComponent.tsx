import type { LinkProps } from "./LinkComponent.types";
import Link from "next/link";

/*
 * Dos caminos, como antes: `href` pinta un <a> tal cual —anclas (#projects),
 * enlaces externos, mailto y descargas— y `to` navega dentro del sitio.
 *
 * Lo que cambió en la migración es solo el segundo: donde había `Link` de
 * react-router ahora está el de Next. La API que ve el resto del proyecto es
 * idéntica, así que ningún componente que use este átomo tuvo que tocarse.
 */
const LinkComponent = ({
  to,
  href,
  size = "text-base",
  className = "",
  download,
  children
}: LinkProps) => {

  if (href) {
    return (
      <a href={href} download={download} className={`${size} ${className}`}>{children}</a>
    )
  }

  return (
    <Link href={to ?? "/"} className={`${size} ${className}`}>{children}</Link>
  );
}

export default LinkComponent;
