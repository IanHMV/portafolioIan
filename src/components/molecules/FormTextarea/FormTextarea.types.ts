import type { LabelProps } from "../../atoms/Label/Label.types"
import type { TextareaProps } from "../../atoms/Textarea/Textarea.types"

export interface FormTextareaProps extends Pick<LabelProps, "text" | "required">, Pick<TextareaProps, "name" | "value" | "placeholder" | "error" | "resize" | "row" | "size" | "onChange"> {
  id: string
  className?: string
  disabled?: boolean

  textareaClassName?: string
  labelClassName?: string
}