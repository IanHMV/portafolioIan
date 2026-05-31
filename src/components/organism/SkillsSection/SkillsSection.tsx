import Text from "../../atoms/Text/Text";
import Heading from "../../atoms/Heading/Heading";
import SkillIconGroup from "../../molecules/SkillIconGroup/SkillIconGroup";

import type { SkillsSectionProps } from "./SkillsSection.types";

const SkillsSection = ({
  title,
  description,
  skillIcon,
  className = ""
}: SkillsSectionProps) => {
  return (
    <section className={`${className}`}>
      <div>
        <Heading {...title} />
        <Text {...description} />
      </div>

      <SkillIconGroup {...skillIcon} />
    </section>
  );
}

export default SkillsSection;