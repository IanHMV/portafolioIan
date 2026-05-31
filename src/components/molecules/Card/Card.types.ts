import type { TextProps } from "../../atoms/Text/Text.types";
import type { ImageProps } from "../../atoms/Image/Image.types";
import type { HeadingProps } from "../../atoms/Heading/Heading.types";

export interface CardProps {
  className?: string;
  glare?: boolean;
  title: HeadingProps;
  description: TextProps;
  img: ImageProps;
}