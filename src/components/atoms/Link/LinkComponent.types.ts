
type LinkSize = "text-sm" | "text-base" | "text-lg" | "text-xl"

export interface LinkProps {
  to?: string
  href?: string
  size?: LinkSize
  className?: string
  children: React.ReactNode
}