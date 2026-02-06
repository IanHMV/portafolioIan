
type InputTypes = "text" | "number" | "password" | "email";

type InputProps = {
    id:string;
    type?: InputTypes;
    placeholder?: string;
    value: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?:string;
};

const baseStyles = "border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500";

const Input = ({type, placeholder, value, onChange, className, id}:InputProps) => {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`${baseStyles} ${className || ""}`}
    />
  )
}

export default Input;