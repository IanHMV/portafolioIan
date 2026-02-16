import ToggleDivList, {type ToggleDivListProps} from "../../molecules/ToggleDivList/ToggleDivList";
import Text, {type TextProps } from "../../atoms/Text/Text";

export type ExperienceAreaProps ={
    id:string;
    className?:string;
    toggleList:ToggleDivListProps,
    title:TextProps;
}

const ExperienceArea = ({className,id,toggleList,title}:ExperienceAreaProps) => {

    return (
        <section id={id} className={`${className ??""}`}>
            <Text {...title}></Text>
            <ToggleDivList {...toggleList}/>
        </section>
    )
}

export default ExperienceArea;