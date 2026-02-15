import ToggleDivList, {type ToggleDivListProps} from "../../molecules/ToggleDivList/ToggleDivList";

export type ExperienceAreaProps ={
    className?:string;
    id:string;
    toggleList:ToggleDivListProps,
}

const ExperienceArea = ({className,id,toggleList}:ExperienceAreaProps) => {

    return (
        <>
        <section id={id} className={`${className ??""}`}>
            <ToggleDivList {...toggleList}/>
        </section>
        </>
    )
}

export default ExperienceArea;