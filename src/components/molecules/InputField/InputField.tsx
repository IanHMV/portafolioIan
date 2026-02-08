import Input from "../../atoms/Input/Input";
import Text from "../../atoms/Text/Text";
import type { TextProps } from "../../atoms/Text/Text";
import type { InputProps } from "../../atoms/Input/Input";

type InputFieldProps = {
  // Id para asociar el label con el input
  id: string;
  className?: string;
  //variables para label
  text:TextProps;
  //Variantes para Input
  input:InputProps;
};


const InputField = ({
  id,
  className,
  text,
  input

}: InputFieldProps) => {
  return (
    <div className={`${className ?? ""}`} >

      <Text {...text} htmlFor={id}>
        {text.children}
      </Text>

      <Input  {...input} id={id} />
    </div>
  );
};

export default InputField;
