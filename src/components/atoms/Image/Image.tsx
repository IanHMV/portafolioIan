
export type ImageProps = {
    src:string;
    alt: string;
    className?:string;
    rounded?:boolean;
    size?:number;
}


const Image = ({src,alt, className,rounded,size=25}:ImageProps) =>{
    return (
        <img src={src}
        alt={alt}
        className={`${rounded ? "rounded-full" : "rounded"} object-cover ${className ?? ""} `}
        style={{width:size, height:size }}
        />
    )
}

export default Image;