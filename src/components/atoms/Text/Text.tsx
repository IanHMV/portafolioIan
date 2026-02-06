

type TextVariant = "h1" | "h2" | "h3" | "p" | "label" | "span";

type TextProps = {
  children: React.ReactNode;
  variant?: TextVariant;
  className?: string;
  htmlFor?: string;
};

const variantStyles: Record<TextVariant, string> = {
  h1: "text-4xl font-bold",
  h2: "text-3xl font-semibold",
  h3: "text-2xl font-medium",
  p: "text-base",
  label: "text-sm font-medium",
  span: "text-base",
};

const Text = ({ children, variant = "p", className, htmlFor }: TextProps) => {

  if (variant === "label") {
    return (
      <label
        htmlFor={htmlFor}
        className={`${variantStyles[variant]} ${className ?? ""}`}
      >
        {children}
      </label>
    );
  }

  const Tag = variant;
  return (
    <Tag className={`${variantStyles[variant]} ${className ?? ""}`}>
      {children}
    </Tag>
  );
};

export default Text;
