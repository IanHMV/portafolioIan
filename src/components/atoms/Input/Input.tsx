
type InputTypes = "text" | "number" | "password" | "email";

export type InputProps = {
    id:string;
    type?: InputTypes;
    placeholder?: string;
    value: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?:string;
};


const Input = ({type, placeholder, value, onChange, className, id}:InputProps) => {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`${className ?? ""}`}
    />
  )
}

export default Input;