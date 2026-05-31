
import type { ButtonProps } from "../../atoms/Button/Button.types";

export interface ActionButtonsProps {
  primary: Pick<ButtonProps, "children" | "disabled" | "onClick">
  secondary: Pick<ButtonProps, "children" | "disabled" | "onClick">
  className?: string
}