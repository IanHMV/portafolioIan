import Image from "../../atoms/Image/Image"
import Text from "../../atoms/Text/Text"

type ImageTextProps = {
    label:string;
    src:string;
    alt:string;
    size?:number;
    className?:string;
}

const baseStyle = "flex gap-2 items-center"

const ImageText = ({label, src, alt, size=25, className}:ImageTextProps) => {
  return (
    <div className={`${baseStyle} ${className ?? ""}`}>
        <Image src={src} alt={alt} size={size}/>
        <Text variant="h3">{label}</Text>
    </div>
  )
}

export default ImageText