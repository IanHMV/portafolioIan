
import "./BackgroundStyle.css"
import Image, { type ImageProps } from "../Image/Image"

type BackgroundStyleProps = {
    classNameDivPrimary?: string;
    classNameDivSecondary?: string;
    classNameDivTertiary?: string;
    imageSun: ImageProps;
    imageMe: ImageProps;
}

const BackgroundStyle = ({
    classNameDivPrimary,
    classNameDivSecondary,
    classNameDivTertiary,
    imageSun,
    imageMe,
}: BackgroundStyleProps) => {
    return (
        <div className={`${classNameDivPrimary ?? ""}`}>

            <div className="absolute inset-0 bg-black opacity-50" />

            <div className="flex flex-col items-center justify-center min-h-screen gap-8">
                
                {/* Contenedor relativo para superponer imágenes */}
                <div className="relative w-[250px] h-[250px]">
                    <Image className={`${imageMe.className ?? ""}`} {...imageMe} />
                    <Image className={`${imageSun.className ?? ""}`} {...imageSun} />
                </div>

                {/* Contenedor de botones debajo */}
                <div className="relative z-10 flex gap-2 ">
                    <button className="bg-gray-500 p-2 rounded-md">Botón 1</button>
                    <button className="bg-gray-500 p-2 rounded-md">Botón 2</button>
                </div>
            </div>
        </div>
    )
}

export default BackgroundStyle