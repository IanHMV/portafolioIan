import type { HeadingProps } from "../../atoms/Heading/Heading.types"
import type { TextProps } from "../../atoms/Text/Text.types"
import type { CardProjectProps } from "../../molecules/CardProject/CardProject.types"

export interface ProjectSectionProps {
  id?: string
  className?: string
  heading: Pick<HeadingProps, "as" | "children" | "className" | "size">
  description: Pick<TextProps, "children" | "className">
  projects: CardProjectProps[]
}
