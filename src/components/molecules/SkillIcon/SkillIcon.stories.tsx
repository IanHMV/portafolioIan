import type { Meta, StoryObj } from "@storybook/react-vite";

import SkillIcon from "./SkillIcon";

const meta: Meta<typeof SkillIcon> = {
  title: "Molecules/SkillIcon",
  component: SkillIcon,
  argTypes: {
  },
} satisfies Meta<typeof SkillIcon>;

export default meta;

type Story = StoryObj<typeof SkillIcon>;

export const Default: Story = {
  args: {
    className: "flex flex-col justify-center items-center",
    img: {
      src: "/imgStack/react.svg",
      alt: "Logo",
      className: "w-8 h-8",
      rounded: "rounded-md"
    },
    name: {
      as: "span",
      className: "",
      size: "text-lg",
      weight: "font-bold",
      children: "React",
    },
  },
}