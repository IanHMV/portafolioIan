import type { CardProjectGroupProps } from "./CardProjectGroup.types";
import CardProject from "../CardProject/CardProject";

const CardProjectGroup = ({
  className = "",
  cards
}: CardProjectGroupProps) => {
  return (
    <div className={`${className}`}>
      {cards.map((card, i) => (
        <CardProject key={i} {...card} />
      ))}
    </div>
  );
}

export default CardProjectGroup;