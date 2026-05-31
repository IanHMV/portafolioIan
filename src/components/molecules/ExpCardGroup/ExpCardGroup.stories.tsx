import type { Meta, StoryObj } from "@storybook/react-vite";
import ExpCardGroup from "./ExpCardGroup";

const meta: Meta<typeof ExpCardGroup> = {
  title: "Molecules/ExpCardGroup",
  component: ExpCardGroup,
  argTypes: {
  },
} satisfies Meta<typeof ExpCardGroup>;

export default meta;

type Story = StoryObj<typeof ExpCardGroup>;

export const Default: Story = {
  args: {
    className: "",
    expCards: [
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
};