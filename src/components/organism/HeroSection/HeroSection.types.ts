
import type { BadgeProps } from "../../atoms/Badge/Badge.types";
import type { HeadingProps } from "../../atoms/Heading/Heading.types";
import type { TextProps } from "../../atoms/Text/Text.types";
import type { ActionButtonsProps } from "../../molecules/ActionButtons/ActionButtons.types";
import type { StatGroupProps } from "../../molecules/StatGroup/StatGroup.types";

export interface HeroSectionProps {
  badge: Pick<BadgeProps, "label" | "color" | "className">
  heading: Pick<HeadingProps, "children" | "className" | "size">
  description: Pick<TextProps, "children" | "className">
  actions: ActionButtonsProps
  stats: StatGroupProps
  className: string
}