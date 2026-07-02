import type { LabelProps } from "./Label.types";

const Label = ({
  htmlFor,
  text,
  className = "",
  disabled = false,
  required = false,
  size = "text-base"
}: LabelProps) => {
  return (
    <label htmlFor={htmlFor} className={`${size} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}>
      {text}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  );
}

export default Label;