
import type { SkillIconProps } from "./SkillIcon.types";
import Text from "../../atoms/Text/Text";
import Image from "../../atoms/Image/Image";


const SkillIcon = ({
  name,
  img,
  className = ""
}: SkillIconProps) => {
  return (
    <div className={`${className}`}>
      <Image {...img} />
      <Text {...name} />
    </div>
  );
}

export default SkillIcon;