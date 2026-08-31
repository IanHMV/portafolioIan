import type { TextProps } from "../../atoms/Text/Text.types"
import type { HeadingProps } from "../../atoms/Heading/Heading.types"
import type { ImageProps } from "../../atoms/Image/Image.types"

export interface Skill {
  name: string
  icon: Pick<ImageProps, "src" | "alt">
  /** Descripción corta que aparece en el centro al hacer hover */
  description: string
  /** Color de marca para el glow del centro — ej. "#f7df1e" */
  color: string
}

export interface SkillsSectionProps {
  id?: string
  className?: string
  /** Rótulo pequeño en versalitas sobre el título — ej. "MY TOOLBOX" */
  eyebrow?: string
  title: Pick<HeadingProps, "as" | "children" | "className" | "size">
  description: Pick<TextProps, "as" | "children" | "className" | "size" | "weight">
  skills: Skill[]
  /** Skill mostrada en el centro al cargar (default: 0, la primera) */
  defaultSkillIndex?: number
}
