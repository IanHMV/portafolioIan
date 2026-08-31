import type { HeadingProps } from "../../atoms/Heading/Heading.types"
import type { TextProps } from "../../atoms/Text/Text.types"
import type { ImageProps } from "../../atoms/Image/Image.types"
import type {
  SocialRingItems,
  SocialRingProps,
} from "../../molecules/SocialRing/SocialRing.types"

export interface FooterLink {
  label: string
  /** Ancla interna (#projects) o URL externa */
  href: string
}

export interface FooterProps {
  id: string
  className?: string
  logo?: Pick<ImageProps, "src" | "alt">
  heading: Pick<HeadingProps, "as" | "children" | "className" | "size">
  description: Pick<TextProps, "as" | "children" | "className" | "size" | "weight">
  /**
   * La llamada a la acción: el botón grande junto al titular. Si no se pasa,
   * el footer no lo pinta — el anillo sigue siendo la vía de contacto.
   */
  action?: FooterLink
  /** Enlaces rápidos a las secciones de la página */
  links?: FooterLink[]
  /**
   * Redes del anillo. Se reparten en ángulos iguales y la lista se repite
   * hasta llenarlo (ver `minBadges` en SocialRing).
   */
  social: SocialRingItems
  /**
   * Ajustes visuales del anillo: todo lo de `SocialRing` menos los datos
   * (`items`) y lo que decide el propio Footer (`ariaLabel`, `className`).
   * Lo que no pases se queda en el default del componente.
   */
  ring?: Omit<SocialRingProps, "items" | "ariaLabel" | "className">
  /** Línea inferior — ej. "© 2026 Ian Martinez" */
  copyright: string
}
