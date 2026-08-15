import type { HeadingProps } from "../../atoms/Heading/Heading.types"
import type { TextProps } from "../../atoms/Text/Text.types"
import type { ImageProps } from "../../atoms/Image/Image.types"
import type { SocialDialItems, SocialDialProps } from "../../molecules/SocialDial/SocialDial"

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
  /** Enlaces rápidos a las secciones de la página */
  links?: FooterLink[]
  /**
   * Redes del SocialDial. El disco se parte en tantas porciones como redes
   * pases (mínimo 1): 3 redes = 3 porciones de 120°.
   */
  social: SocialDialItems
  /**
   * Ajustes visuales del disco: todo lo de `SocialDial` menos los datos
   * (`items`) y lo que decide el propio Footer (`ariaLabel`, `className`).
   * Lo que no pases se queda en el default del componente, salvo `size`,
   * que el Footer baja a 210px para que quepa junto al texto.
   */
  dial?: Omit<SocialDialProps, "items" | "ariaLabel" | "className">
  /** Línea inferior — ej. "© 2026 Ian Martinez" */
  copyright: string
}
