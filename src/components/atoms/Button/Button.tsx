

export type ButtonProps = {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  htmlType?: "button" | "submit" | "reset";
};

const Button = ({
  children,
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
      className={`
        ${disabled ? "cursor-not-allowed opacity-50" :  "cursor-pointer"}  
        ${className ?? ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
