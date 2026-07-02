import type { LabelProps } from "../../atoms/Label/Label.types";
import type { InputProps } from "../../atoms/Input/Input.types";

export interface InputFieldProps extends Pick<LabelProps, "text" | "required">, Pick<InputProps, "type" | "value" | "disabled" | "error" | "placeholder" | "onChange" | "name"> {
  id: string
  className?: string
  labelClassName?: string
  inputClassName?: string
}