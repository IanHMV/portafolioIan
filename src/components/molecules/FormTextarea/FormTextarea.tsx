import Label from "../../atoms/Label/Label";
import Textarea from "../../atoms/Textarea/Textarea";
import type { FormTextareaProps } from "./FormTextarea.types";

const FormTextarea = ({
  id,
  className = "",
  text,
  value = "",
  placeholder = "",
  row = 4,
  disabled = false,
  error = false,
  size = "w-full",
  name = "",
  onChange,
  labelClassName = "",
  required = false,
  resize = "resize",
  textareaClassName = "",
}: FormTextareaProps) => {
  return (
    <div className={className}>
      <Label
        htmlFor={id}
        text={text}
        className={labelClassName}
        required={required}
        disabled={disabled} />

      <Textarea id={id} name={name} value={value} placeholder={placeholder} disabled={disabled} error={error} resize={resize} onChange={onChange} size={size} row={row} className={textareaClassName} />
    </div>
  );
}

export default FormTextarea;