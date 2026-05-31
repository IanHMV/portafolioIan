import type { LabelProps } from "../../atoms/Label/Label.types";
import type { InputProps } from "../../atoms/Input/Input.types";

export interface PresentationCardProps extends Pick<LabelProps, "required">, Pick<InputProps, "type" | "value" | "disabled" | "error" | "placeholder" | "onChange"> {
  id: string
  label: string
  className?: string
  labelClassName?: string
  inputClassName?: string
}