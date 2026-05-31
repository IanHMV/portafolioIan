import type { CardGroupProps } from "./CardGroup.types";
import Card from "../Card/Card";

const CardGroup = ({
  cards,
  className = ""
}: CardGroupProps) => {
  return (
    <div className={`${className}`}>
      {cards.map((card, i) => (
        <Card key={i} {...card} />
      ))}
    </div>
  );
}

export default CardGroup;