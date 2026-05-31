import type { Meta, StoryObj } from "@storybook/react-vite";

import ExperienceSection from "./ExperienceSection";

const meta: Meta<typeof ExperienceSection> = {
  title: "Organism/ExperienceSection",
  component: ExperienceSection,
  argTypes: {
  },
} satisfies Meta<typeof ExperienceSection>;

export default meta;

type Story = StoryObj<typeof ExperienceSection>;

export const Default: Story = {
  args: {
    className: "",
    title: {
      as: "h2",
      size: "text-3xl",
      className: "py-5",
      children: "Experience Section"
    },
    description: {
      as: "p",
      className: "py-5",
      size: "text-base",
      weight: "font-normal",
      children: "This is a text for Experience Section"
    },
    expCards: {
      className: "",
      expCards: [{
        className: "",
        title: {
          as: "h4",
          className: "",
          children: "Title",
          size: "text-3xl"
        },
        description: {
          as: "p",
          className: "",
          size: "text-base",
          children: "This is a description"
        },
        divider: {
          variant: "border-solid",
          className: "h-16 border-l-2 border-t-0 mx-4",
          color: "border-black",
        },
        seeMore: {
          type: "button",
          variant: "primary",
          size: "w-full",
          disabled: false,
          onClick: () => { },
          className: "",
          children: "See more"
        }

      },
      {
        className: "",
        title: {
          as: "h4",
          className: "",
          children: "Title",
          size: "text-3xl"
        },
        description: {
          as: "p",
          className: "",
          size: "text-base",
          children: "This is a description"
        },
        divider: {
          variant: "border-solid",
          className: "h-16 border-l-2 border-t-0 mx-4",
          color: "border-black",
        },
        seeMore: {
          type: "button",
          variant: "primary",
          size: "w-full",
          disabled: false,
          onClick: () => { },
          className: "",
          children: "See more"
        }
      }
      ]
    }
  }
};