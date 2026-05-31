
type LabelSize = "text-sm" | "text-base" | "text-lg" | "text-xl"

export interface LabelProps {
  htmlFor: string
  text: string
  size?: LabelSize
  required?: boolean
  disabled?: boolean
  className?: string
}