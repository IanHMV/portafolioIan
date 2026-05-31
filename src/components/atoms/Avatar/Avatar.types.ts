
type ImgRounded = "rounded-sm" | "rounded-md" | "rounded-lg" | "rounded-full"
type ImgSize = "w-8 h-8" | "w-12 h-12" | "w-16 h-16" | "w-24 h-24"

export interface AvatarProps {
  src: string
  alt: string
  size?: ImgSize
  rounded?: ImgRounded
  className?: string
}