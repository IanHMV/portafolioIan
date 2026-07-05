import type { HeadingProps } from "../../atoms/Heading/Heading.types";
import type { ImageProps } from "../../atoms/Image/Image.types";

export interface AboutMeProps {
  id?: string
  coverImage: Pick<ImageProps, "src" | "alt">
  coverTitle: Pick<HeadingProps, "children" | "className" | "size">
  heading: Pick<HeadingProps, "children" | "className" | "size">
  paragraphs: string[]
  contentImage: Pick<ImageProps, "src" | "alt">
  className?: string
}
