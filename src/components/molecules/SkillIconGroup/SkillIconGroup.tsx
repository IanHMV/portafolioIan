import type { SkillIconGroupProps } from "./SkillIconGroup.types";
import SkillIcon from "../SkillIcon/SkillIcon";

const SkillIconGroup = ({
  className = "",
  skillGroup
}: SkillIconGroupProps) => {
  return (
    <div className={`${className}`}>
      {skillGroup.map((skill, i) => (
        <SkillIcon key={i} {...skill} />
      ))}
    </div>
  );
}

export default SkillIconGroup;