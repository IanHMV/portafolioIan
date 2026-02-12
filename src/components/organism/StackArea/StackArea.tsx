import CardList from '../../molecules/CardList/CardList';
import type { CardListProps } from '../../molecules/CardList/CardList';

export type StackAreaProps ={
    id:string;
    className?:string;
    cards:CardListProps[];
}

const StackArea = ({
    id,
    className,
    cards
}:StackAreaProps) => {
    
  return (
    <section className={`${className ??""}`} id={id}>
        {cards.map((card,i) =>(
            <CardList key={i} {...card}/>
        ))}
    </section>
  )
}

export default StackArea