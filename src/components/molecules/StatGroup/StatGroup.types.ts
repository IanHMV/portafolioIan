import type { StatItemProps } from "../StatItem/StatItem.types";
import type { DividerProps } from "../../atoms/Divider/Divider.types";

export interface StatGroupProps extends Pick<DividerProps, "variant"> {
  stats: StatItemProps[]
  className?: string
}