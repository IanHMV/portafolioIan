import Input from "../../atoms/Input/Input";
import Text from "../../atoms/Text/Text";


type InputFieldProps = {
  className?: string;
  // Id para asociar el label con el input
  id: string;
  //variables para label
  classNameLabel?:string;
  label: string;
  //Variantes para Input
  type?: "text" | "number" | "password" | "email";
  placeholder?: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  classNameInput?:string;
};

const baseStyles = "flex flex-col gap-3";

const InputField = ({
  id,
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  className,
  classNameInput,
  classNameLabel,

}: InputFieldProps) => {
  return (
    <div className={`${baseStyles} ${className || ""}`} >

      <Text htmlFor={id} variant="label" className={classNameLabel || ""}>
        {label}
      </Text>

      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={classNameInput || ""}
      />
    </div>
  );
};

export default InputField;
