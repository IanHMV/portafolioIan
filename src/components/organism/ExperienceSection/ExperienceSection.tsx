import styles from "./ExperienceSection.module.css";
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
    <section className={`${styles.section} ${className}`}>
      <div className={styles.header}>
        <Heading {...title} />
        <Text {...description} />
      </div>

      <div className={styles.content}>
        <ExpCardGroup {...expCards} />
      </div>
    </section>
  );
}

export default ExperienceSection;