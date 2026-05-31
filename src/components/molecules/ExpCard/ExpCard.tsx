import Text from "../../atoms/Text/Text";
import Heading from "../../atoms/Heading/Heading";
import Button from "../../atoms/Button/Button";
import Divider from "../../atoms/Divider/Divider";
import type { ExpCardProps } from "./ExpCard.types";


const ExpCard = ({
  className = "",
  description,
  title,
  seeMore,
  divider
}: ExpCardProps) => {

  return (
    <div className={`flex items-center w-full bg-white border border-gray-200 rounded-2xl shadow-sm px-8 py-6 gap-6 ${className}`}>

      <div className="flex flex-col gap-2 flex-1 min-w-0">
        <Heading {...title} />
        <Text {...description} />
      </div>

      <Divider {...divider} />

      <div className="shrink-0 flex justify-center">
        <Button {...seeMore} />
      </div>

    </div>
  );
}

export default ExpCard;