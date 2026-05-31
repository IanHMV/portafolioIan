import type { StatItemProps } from "./StatItem.types";
import Text from "../../atoms/Text/Text";


const StatItem = ({
  value,
  label,
  className = "",
  textClassName = "",
  valueClassName = "",
}: StatItemProps) => {
  return (
    <div className={className}>
      <Text as="span" size="text-xl" weight="font-bold" className={valueClassName}>
        {value}
      </Text>

      <Text as="span" size="text-sm" weight="font-normal" className={textClassName}>
        {label}
      </Text>

    </div>
  );
}

export default StatItem;