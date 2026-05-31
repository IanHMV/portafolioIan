import type { TextProps } from "../../atoms/Text/Text.types";
import type { HeadingProps } from "../../atoms/Heading/Heading.types";
import type { ExpCardGroupProps } from "../../molecules/ExpCardGroup/ExpCardGroup.types";

export interface ExperienceSectionProps {
  className?: string
  title: HeadingProps
  description: TextProps
  expCards: ExpCardGroupProps
}