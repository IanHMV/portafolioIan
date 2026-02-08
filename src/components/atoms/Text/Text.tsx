

export type TextVariant = "h1" | "h2" | "h3" | "p" | "label" | "span";

export type TextProps = {
  children: React.ReactNode;
  variant?: TextVariant;
  className?: string;
  htmlFor?: string;
};



const Text = ({ children, variant = "p", className, htmlFor }: TextProps) => {

  if (variant === "label") {
    return (
      <label
        htmlFor={htmlFor}
        className={`${className ?? ""}`}
      >
        {children}
      </label>
    );
  }

  const Tag = variant;
  return (
    <Tag className={`${className ?? ""}`}>
      {children}
    </Tag>
  );
};

export default Text;
