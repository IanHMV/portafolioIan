type ImgRounded = "rounded-sm" | "rounded-md" | "rounded-lg" | "rounded-full"

export interface ImageProps {
  src: string
  alt: string
  className?: string
  rounded?: ImgRounded
}