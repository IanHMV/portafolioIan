
import type { HeroSectionProps } from "./HeroSection.types";
import Badge from "../../atoms/Badge/Badge";
import Heading from "../../atoms/Heading/Heading";
import Text from "../../atoms/Text/Text";
import ActionButtons from "../../molecules/ActionButtons/ActionButtons";
import StatGroup from "../../molecules/StatGroup/StatGroup";

const HeroSection = ({
  badge,
  heading,
  description,
  actions,
  stats,
  className
}: HeroSectionProps) => {
  return (
    <section className={`${className}`}>
      <Badge {...badge} />
      <Heading {...heading} />
      <Text {...description} />
      <ActionButtons {...actions} />
      <StatGroup {...stats} />
    </section>
  );
}

export default HeroSection;