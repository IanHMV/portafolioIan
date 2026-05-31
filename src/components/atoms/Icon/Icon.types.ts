
type IconType = "git" | "home" | "settings"

type IconSize = "text-sm" | "text-base" | "text-lg"


export interface IconProps {
  icon: IconType
  size?: IconSize
  className?: string
  label?: string
}