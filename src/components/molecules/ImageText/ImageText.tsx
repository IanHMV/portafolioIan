import Image from "../../atoms/Image/Image"
import Text from "../../atoms/Text/Text"
import type { TextProps } from "../../atoms/Text/Text"
import type { ImageProps } from "../../atoms/Image/Image"

export type ImageTextProps = {
  className?:string;
  text:TextProps[]
  image:ImageProps
}


const ImageText = ({text, image, className}:ImageTextProps) => {
  return (
    <div className={`${className ?? ""}`}>
        <Image {...image}/>
        {text.map((item, i)=>(
          <Text key={i} {...item}> {item.children}</Text>
        ))}
    </div>
  )
}

export default ImageText