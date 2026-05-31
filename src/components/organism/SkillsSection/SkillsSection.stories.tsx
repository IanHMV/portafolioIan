import type { Meta, StoryObj } from "@storybook/react-vite";

import SkillsSection from "./SkillsSection";

const meta: Meta<typeof SkillsSection> = {
  title: "Organism/SkillsSection",
  component: SkillsSection,
  argTypes: {
  },
} satisfies Meta<typeof SkillsSection>;

export default meta;

type Story = StoryObj<typeof SkillsSection>;

export const Default: Story = {
  args: {
    className: "",
    title: {
      children: "Skills Section",
      size: "text-4xl",
      className: "py-5"
    },
    description: {
      children: "This is a description for skills section",
      className: "py-5"
    },
    skillIcon: {
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
    }
  }
}