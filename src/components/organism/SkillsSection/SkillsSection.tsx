import styles from "./SkillsSection.module.css";
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
    <section className={`${styles.section} ${className}`}>
      <div className={styles.header}>
        <Heading {...title} />
        <Text {...description} />
      </div>

      <div className={styles.content}>
        <SkillIconGroup {...skillIcon} />
      </div>
    </section>
  );
}

export default SkillsSection;