import CardProyectList, { type CardProyectListProps }  from "../../molecules/CardProyectList/CardProyectList";
import Text, {type TextProps} from "../../atoms/Text/Text";
export type ProyectsDataProps ={
    id:string;
    className?:string;
    title:TextProps;
    cardList:CardProyectListProps[];
}

const ProyectsData = ({className,id,cardList,title}:ProyectsDataProps) =>{
    return(
        <section className={`${className??""}`} id={id}>
            <Text {...title} ></Text>
            {cardList.map((card,i) => (
                <CardProyectList key={i} {...card}/>
            ))}
        </section>
    )
}

export default ProyectsData;