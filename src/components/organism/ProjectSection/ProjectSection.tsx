import type { ProjectSectionProps } from "./ProjectSection.types";

import Text from "../../atoms/Text/Text";
import Heading from "../../atoms/Heading/Heading";
import CardGroup from "../../molecules/CardGroup/CardGroup";


const ProjectSection = ({
  description,
  heading,
  className = "",
  cards
}: ProjectSectionProps) => {
  return (
    <section className={`${className}`}>
      <div className="">
        <Heading {...heading} />
        <Text {...description} />
      </div>

      <div className="">
        <CardGroup {...cards} />
      </div>

    </section>
  );
}

export default ProjectSection;