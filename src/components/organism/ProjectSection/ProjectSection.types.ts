import type { HeadingProps } from "../../atoms/Heading/Heading.types"
import type { TextProps } from "../../atoms/Text/Text.types"
import type { CardProjectProps } from "../../molecules/CardProject/CardProject.types"

export interface ProjectSectionProps {
  id?: string
  className?: string
  /** Rótulo pequeño en versalitas sobre el título — ej. "WHAT I'VE BUILT".
   *  Mismo papel que el `eyebrow` de Experience y Skills. */
  eyebrow?: string
  /** Título de la sección. El cuerpo y la tinta los pone el CSS, así que no
   *  hace falta pasar `size` ni clases de color desde los datos. */
  heading: Pick<HeadingProps, "as" | "children" | "className" | "size">
  /** Bajada bajo el título */
  description: Pick<TextProps, "as" | "children" | "className" | "size" | "weight">
  projects: CardProjectProps[]
}
