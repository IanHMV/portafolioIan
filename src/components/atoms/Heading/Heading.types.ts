
type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4'
type HeadingSize = "text-xs" | "text-sm" | "text-base" | "text-lg" | "text-xl" | "text-2xl" | "text-3xl" | "text-4xl" | "text-5xl"

export interface HeadingProps {
  as?: HeadingTag
  size?: HeadingSize
  className?: string
  children: React.ReactNode
}

