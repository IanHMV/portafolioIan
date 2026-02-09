import CardProyect from "../CardProyect/CardProyect";
import type { CardProyectProps } from "../CardProyect/CardProyect";

export type CardProyectListProps = {
    className?:string;
    cards:CardProyectProps[];
}

const CardProyectList = ({className,cards}:CardProyectListProps) => {
  return (
    <div className={`${className??""}`}>
        {cards.map((card,i ) =>(
            <CardProyect key={i} {...card}/>
        ))}
    </div>
  )
}

export default CardProyectList