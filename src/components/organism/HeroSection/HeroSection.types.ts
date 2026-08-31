import type { HeadingProps } from "../../atoms/Heading/Heading.types";
import type { TextProps } from "../../atoms/Text/Text.types";
import type { ImageProps } from "../../atoms/Image/Image.types";

export interface HeroAction {
  label: string
  href: string
}

export interface HeroSectionProps {
  /**
   * Ancla de la sección. El hero era el único bloque de la página sin `id`
   * y por tanto el único al que el dock no podía volver: sin esto, "Home"
   * no tendría destino ni el observador nada que vigilar arriba del todo.
   */
  id?: string
  /**
   * SIN USO ahora mismo: el hero dejó de pintar la marca de la esquina.
   * Se mantiene (opcional) porque el CSS y las instrucciones para volver a
   * montarla siguen en HeroSection.tsx, y así data.ts no tiene que cambiar.
   */
  logo?: Pick<ImageProps, "src" | "alt">
  heading: Pick<HeadingProps, "children" | "className" | "size">
  description: Pick<TextProps, "children" | "className">
  primaryAction: HeroAction
  secondaryAction?: HeroAction
  className?: string
}
