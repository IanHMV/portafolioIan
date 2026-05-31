
import type { InputFieldProps } from "./InputField.types";
import Label from "../../atoms/Label/Label";
import Input from "../../atoms/Input/Input";


const InputField = ({
  id,
  text,
  className = "",
  required = false,
  error = false,
  onChange,
  disabled = false,
  placeholder = "",
  inputClassName = "",
  labelClassName = "",
  type = "text",
  value = ""
}: InputFieldProps) => {
  return (
    <div className={className}>
      <Label
        htmlFor={id}
        text={text}
        required={required}
        className={labelClassName}
      />

      <Input
        id={id}
        type={type}
        value={value}
        error={error}
        disabled={disabled}
        placeholder={placeholder}
        onChange={onChange}
        className={inputClassName}
      />
    </div>
  );
}

export default InputField;