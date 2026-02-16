import CardList,{type CardListProps} from '../../molecules/CardList/CardList';
import Text, {type TextProps} from '../../atoms/Text/Text';

export type StackAreaProps ={
    id:string;
    className?:string;
    title:TextProps;
    cards:CardListProps[];
}

const StackArea = ({
    id,
    className,
    cards,
    title
}:StackAreaProps) => {
    
  return (
    <section className={`${className ??""}`} id={id}>
        <Text{...title}></Text>
        {cards.map((card,i) =>(
            <CardList key={i} {...card}/>
        ))}
    </section>
  )
}

export default StackArea