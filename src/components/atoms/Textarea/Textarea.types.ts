import type React from "react"

type TextareaSize = "w-1/4" | "w-1/2" | "w-full"

type TextareaResize = "resize-none" | "resize-y" | "resize-x" | "resize"

export interface TextareaProps {
  id?: string,
  name?: string,
  placeholder?: string
  value?: string
  size?: TextareaSize
  disabled?: boolean
  error?: boolean
  resize?: TextareaResize
  className?: string,
  row?: number
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}