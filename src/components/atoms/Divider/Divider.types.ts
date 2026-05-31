

type DividerVariant = "border-solid" | "border-dashed" | "border-dotted"
type DividerSize = "border-t" | "border-t-2" | "border-t-4"
type DividerColor = "border-black" | "border-red-500" | "border-orange-500"

export interface DividerProps {
  variant?: DividerVariant
  size?: DividerSize
  color?: DividerColor
  className?: string
}