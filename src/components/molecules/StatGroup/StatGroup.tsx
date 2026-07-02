
import { Fragment } from "react";
import type { StatGroupProps } from "./StatGroup.types";
import StatItem from "../StatItem/StatItem";
import Divider from "../../atoms/Divider/Divider";

const StatGroup = ({
  stats,
  className = "",
  variant = "border-solid",
}: StatGroupProps) => {
  return (
    <div className={className}>

      {stats.map((stat, i) => (
        <Fragment key={stat.label}>
          <StatItem {...stat} />
          {i < stats.length - 1 && (
            <Divider variant={variant} className="h-8 border-l-2 border-t-0 m-auto" />
          )}
        </Fragment>
      ))}

    </div>
  );
}

export default StatGroup;