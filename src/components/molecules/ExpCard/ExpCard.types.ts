import type { HeadingProps } from "../../atoms/Heading/Heading.types";
import type { TextProps } from "../../atoms/Text/Text.types";
import type { ButtonProps } from "../../atoms/Button/Button.types";
import type { DividerProps } from "../../atoms/Divider/Divider.types";

export interface ExpCardProps {
  className?: string
  title: HeadingProps
  description: TextProps
  seeMore: ButtonProps
  divider: DividerProps
}