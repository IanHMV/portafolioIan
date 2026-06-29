import type { HeadingProps } from "../../atoms/Heading/Heading.types"
import type { TextProps } from "../../atoms/Text/Text.types"
import type { CardProjectGroupProps } from "../../molecules/CardProjectGroup/CardProjectGroup.types"

export interface ProjectSectionProps {
  className?: string
  heading: Pick<HeadingProps, "as" | "children" | "className" | "size">
  description: Pick<TextProps, "children" | "className">
  cards: CardProjectGroupProps
}