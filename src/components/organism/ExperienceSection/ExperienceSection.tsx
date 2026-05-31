import Text from "../../atoms/Text/Text";
import Heading from "../../atoms/Heading/Heading";
import ExpCardGroup from "../../molecules/ExpCardGroup/ExpCardGroup";

import type { ExperienceSectionProps } from "./ExperienceSection.types";

const ExperienceSection = ({
  title,
  description,
  expCards,
  className = ""
}: ExperienceSectionProps) => {
  return (
    <section className={`${className}`}>
      <div className="px-2">
        <Heading {...title} />
        <Text {...description} />
      </div>

      <div className="px-2">
        <ExpCardGroup {...expCards} />
      </div>
    </section>
  );
}

export default ExperienceSection;