
type BadgeSize = "w-1/4" | "w-1/2" | "w-full"
type BadgeColor = "bg-red-500" | "bg-[#3a3939]" | "bg-white"
type BadgeRounded = "rounded-sm" | "rounded-md" | "rounded-lg"

export interface BadgeProps {
  label: string
  size?: BadgeSize
  color?: BadgeColor
  rounded?: BadgeRounded
  className?: string
}