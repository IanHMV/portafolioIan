import type { HeadingProps } from "../../atoms/Heading/Heading.types";
import type { ImageProps } from "../../atoms/Image/Image.types";

export interface AboutMeProps {
  id?: string
  /**
   * El rótulo con el que se presenta la tarjeta antes de fundirse hacia la
   * presentación. Solo el texto: los tamaños los calcula el CSS con `clamp`
   * contra el ancho de la tarjeta, igual que hace el título del hero.
   */
  cover: {
    /** Monograma grande, la línea de arriba. */
    initials: string
    /** Segunda línea, bajo el monograma. */
    role: string
  }
  heading: Pick<HeadingProps, "children">
  paragraphs: string[]
  contentImage: Pick<ImageProps, "src" | "alt">
  className?: string
}
