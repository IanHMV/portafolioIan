import type { HeadingProps } from "../../atoms/Heading/Heading.types";
import type { TextProps } from "../../atoms/Text/Text.types";
import type { ImageProps } from "../../atoms/Image/Image.types";

export interface HeroAction {
  label: string
  href: string
}

export interface HeroSectionProps {
  logo: Pick<ImageProps, "src" | "alt">
  heading: Pick<HeadingProps, "children" | "className" | "size">
  description: Pick<TextProps, "children" | "className">
  primaryAction: HeroAction
  secondaryAction?: HeroAction
  className?: string
}
