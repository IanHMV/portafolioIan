import type { Meta, StoryObj } from "@storybook/react-vite";

import SkillIconGroup from "./SkillIconGroup";

const meta: Meta<typeof SkillIconGroup> = {
  title: "Molecules/SkillIconGroup",
  component: SkillIconGroup,
  argTypes: {
  },
} satisfies Meta<typeof SkillIconGroup>;

export default meta;

type Story = StoryObj<typeof SkillIconGroup>;

export const Default: Story = {
  args: {
    className: "flex gap-6",
    skillGroup: [
      {
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
      {
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
    ]
  },
}