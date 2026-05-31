
import type { ExpCardGroupProps } from "./ExpCardGroup.types";
import ExpCard from "../ExpCard/ExpCard";

const ExpCardGroup = ({
  expCards,
  className = ""
}: ExpCardGroupProps) => {
  return (
    <div className={`${className}`}>
      {expCards.map((xpCard, i) => (
        <ExpCard key={i} {...xpCard} />
      ))}
    </div>
  );
}

export default ExpCardGroup;