import type { HeadingProps } from "../../atoms/Heading/Heading.types"
import type { TextProps } from "../../atoms/Text/Text.types"
import type { ImageProps } from "../../atoms/Image/Image.types"
import type { SocialDialItems } from "../../molecules/SocialDial/SocialDial"

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
   * Redes del SocialDial. El tipo obliga a exactamente 4 porque el disco
   * tiene 4 porciones — si pasas 3 o 5, TypeScript lo marca en compilación.
   */
  social: SocialDialItems
  /** Diámetro del disco en px (default 210) */
  dialSize?: number
  /** Línea inferior — ej. "© 2026 Ian Martinez" */
  copyright: string
}
