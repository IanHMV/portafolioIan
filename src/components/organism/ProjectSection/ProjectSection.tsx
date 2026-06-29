import styles from "./ProjectSection.module.css";
import type { ProjectSectionProps } from "./ProjectSection.types";

import Text from "../../atoms/Text/Text";
import Heading from "../../atoms/Heading/Heading";
import CardProjectGroup from "../../molecules/CardProjectGroup/CardProjectGroup";

const ProjectSection = ({
  description,
  heading,
  className = "",
  cards
}: ProjectSectionProps) => {
  return (
    <section className={`${styles.section} ${className}`}>
      <div className={styles.header}>
        <Heading {...heading} />
        <Text {...description} />
      </div>

      <div className={styles.content}>
        <CardProjectGroup {...cards} />
      </div>
    </section>
  );
}

export default ProjectSection;