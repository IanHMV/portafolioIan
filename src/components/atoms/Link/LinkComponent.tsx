import type { LinkProps } from "./LinkComponent.types";
import { Link } from "react-router-dom";

const LinkComponent = ({
  to,
  href,
  size = "text-base",
  className = "",
  children
}: LinkProps) => {

  if (href) {
    return (
      <a href={href} className={`${size} ${className}`}>{children}</a>
    )
  }

  return (
    <Link to={to ?? "/"} className={`${size} ${className}`}>{children}</Link>
  );
}

export default LinkComponent;