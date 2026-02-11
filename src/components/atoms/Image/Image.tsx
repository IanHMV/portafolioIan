
export type ImageProps = {
    src: string;
    alt: string;
    className?: string;
    rounded?: boolean;
    size?: number; // Mantener para retrocompatibilidad
}

const Image = ({ src, alt, className, rounded, size }: ImageProps) => {
    return (
        <img 
            src={src}
            alt={alt}
            className={`${rounded ? "rounded-full" : "rounded"} object-cover ${className ?? ""}`}
            style={size ? { width: size, height: size } : undefined} 
        />
    )
}

export default Image;