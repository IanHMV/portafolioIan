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
    <input type={type} name={name} id={id} onChange={onChange} placeholder={placeholder} value={value} disabled={disabled} className={`${size} border-2 rounded-md ${error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"} ${className}`} />
  );
}

export default Input;