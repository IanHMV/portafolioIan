import './BackgroundClouds.css'

export type BackgroundCloudsProps = {
    classNameDivPrimary?: string;
    classNameDivSecondary?: string;
    classNameDivTertiary?: string;
}

const BackgroundClouds = ({
    classNameDivPrimary,
    classNameDivSecondary,
    classNameDivTertiary,
}:BackgroundCloudsProps) => {

    return (
        <div className={`${classNameDivPrimary??""}`}>
            <div className={`${classNameDivSecondary??""}`}>
                <div className={`${classNameDivTertiary??""}`}>

                </div>
            </div>
        </div>
    )
}

export default BackgroundClouds