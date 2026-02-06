

type ButtonVariant = "Primary" | "Secondary" | "Danger";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  htmlType?: "button" | "submit" | "reset";
};

const variantStyles: Record<ButtonVariant, string> = {
  Primary: "bg-blue-500 text-white hover:bg-blue-600",
  Secondary: "bg-gray-500 text-white hover:bg-gray-600",
  Danger: "bg-red-500 text-white hover:bg-red-600",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-2 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

const Button = ({
  children,
  variant = "Primary",
  size = "md",
  disabled = false,
  onClick,
  className,
  htmlType = "button",
}: ButtonProps) => {
  return (
    <button
      type={htmlType}
      disabled={disabled}
      onClick={onClick}
      className={`rounded font-bold transition-colors ${variantStyles[variant]} ${sizeStyles[size]} ${className ?? ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
