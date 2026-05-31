import type { InputProps } from "./Input.types";


const Input = ({
  id,
  name = "",
  type = "text",
  placeholder = "",
  size = "w-full",
  value,
  error = false,
  disabled = false,
  className = "",
  onChange
}: InputProps) => {
  return (
    <input type={type} name={name} id={id} onChange={onChange} placeholder={placeholder} value={value} disabled={disabled} className={`${size} ${error ? "" : ""} ${className} border-2 rounded-md`} />
  );
}

export default Input;