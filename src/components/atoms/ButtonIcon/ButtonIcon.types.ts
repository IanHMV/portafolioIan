
type IconType = "git" | "home" | "settings"

type IconButtonSize = "text-sm" | "text-base" | "text-lg"

export interface ButtonIconProps {
  icon?: IconType
  label: string
  disabled?: boolean
  size?: IconButtonSize
  onClick?: () => void
  className?: string
}