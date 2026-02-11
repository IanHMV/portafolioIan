import CardProyectList from "../../molecules/CardProyectList/CardProyectList";
import type { CardProyectListProps } from "../../molecules/CardProyectList/CardProyectList";

export type ProyectsDataProps ={
    id:string;
    className?:string;
    cardList:CardProyectListProps[];
}

const ProyectsData = ({className,id,cardList}:ProyectsDataProps) =>{
    return(
        <section className={`${className??""}`} id={id}>
            {cardList.map((card,i) => (
                <CardProyectList key={i} {...card}/>
            ))}
        </section>
    )
}

export default ProyectsData;