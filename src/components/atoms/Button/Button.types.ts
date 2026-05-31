
type ButtonVariant = "primary" | "secondary" | "ghost" | "icon"

type ButtonTypes = "submit" | "button" | "reset"

type ButtonSize = "w-1/4" | "w-2/4" | "w-3/4" | "w-full"

export interface ButtonProps {
  type?: ButtonTypes
  size?: ButtonSize
  variant?: ButtonVariant
  disabled?: boolean
  onClick?: () => void
  className?: string
  children: React.ReactNode
}