type TextAs = "p" | "span"

type TextSize = "text-xs" | "text-sm" | "text-base" | "text-lg" | "text-xl"

type TextWeight = "font-thin" | "font-extralight" | "font-light" | "font-normal" | "font-medium" | "font-semibold" | "font-bold" | "font-extrabold" | "font-black"



export interface TextProps {
  as?: TextAs
  size?: TextSize
  weight?: TextWeight
  className?: string
  children: React.ReactNode
}

