import type { ButtonProps } from "./Button.types";

const variantMap: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "rounded-md bg-blue-600 text-white hover:bg-blue-700",
  secondary: "rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300",
  ghost: "rounded-md bg-transparent text-gray-800 hover:bg-gray-100 border border-gray-300",
  icon: "rounded-md bg-transparent p-2 hover:bg-gray-100",
}

const Button = ({
  variant = "primary",
  disabled = false,
  size = "w-1/4",
  type = "button",
  onClick,
  children,
  className = ""
}: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${variantMap[variant]} ${size} ${className} py-2 px-4`
      }>
      {children}
    </button>
  );
}

export default Button;