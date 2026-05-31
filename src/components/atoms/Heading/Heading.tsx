import type { HeadingProps } from "./Heading.types";


const Heading = ({
  as: Tag = 'h1',
  size = 'text-xl',
  className = "",
  children }: HeadingProps) => {

  return (
    <Tag className={`outfit ${size} ${className}`} >
      {children}
    </Tag>
  )
}

export default Heading;