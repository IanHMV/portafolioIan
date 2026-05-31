
import type { TextareaProps } from "./Textarea.types";

const Textarea = ({
  id = "",
  name = "",
  value = "",
  size = "w-1/2",
  placeholder = "",
  disabled = false,
  error = false,
  onChange,
  className = "",
  resize = "resize-none",
  row = 4
}: TextareaProps) => {
  return (
    <textarea name={name} id={id} value={value} placeholder={placeholder} disabled={disabled} onChange={onChange} rows={row} className={`${size} ${error ? "" : ""} ${className} ${resize} border rounded-md`}></textarea>
  );
}

export default Textarea;