import type { SkillIconGroupProps } from "../../molecules/SkillIconGroup/SkillIconGroup.types"
import type { TextProps } from "../../atoms/Text/Text.types"
import type { HeadingProps } from "../../atoms/Heading/Heading.types"


export interface SkillsSectionProps {
  className?: string
  title: HeadingProps
  description: TextProps
  skillIcon: SkillIconGroupProps
}