import './BackgroundClouds.css'
import Image, {type ImageProps} from '../Image/Image';

export type BackgroundCloudsProps = {
    classNameDivPrimary?: string;
    classNameDivSecondary?: string;
    classNameDivTertiary?: string;
    img:ImageProps;
}

const BackgroundClouds = ({
    classNameDivPrimary,
    classNameDivSecondary,
    classNameDivTertiary,

    img
}:BackgroundCloudsProps) => {

    return (
        <div className={`${classNameDivPrimary??""}`}>

            <div className={`${classNameDivSecondary??""}`}>
                <div className={`${classNameDivTertiary??""}`}>
                    <Image {...img}/>
                    <Image {...img}/>
                </div>
            </div>
            
        </div>
    )
}

export default BackgroundClouds