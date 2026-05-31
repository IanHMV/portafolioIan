
type InputType = "text" | "number" | "email" | "password" | "tel"
type InputSize = "w-1/4" | "w-1/2" | "w-full"

export interface InputProps {
  id: string
  type?: InputType
  name?: string
  size?: InputSize
  value?: string
  placeholder?: string
  disabled?: boolean
  error?: boolean
  className?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}