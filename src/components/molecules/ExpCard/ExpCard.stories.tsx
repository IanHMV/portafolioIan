import type { Meta, StoryObj } from "@storybook/react-vite";

import ExpCard from "./ExpCard";

const meta: Meta<typeof ExpCard> = {
  title: "Molecules/ExpCard",
  component: ExpCard,
  argTypes: {
  },
} satisfies Meta<typeof ExpCard>;

export default meta;

type Story = StoryObj<typeof ExpCard>;

export const Default: Story = {
  args: {
    className: "flex m-5 border-[#]",
    title: {
      as: "h4",
      className: "",
      size: "text-3xl",
      children: "Title"
    },
    description: {
      as: "p",
      size: "text-base",
      weight: "font-normal",
      className: "",
      children: "This is a description",
    },
    divider: {
      className: "h-16 border-l-2 border-t-0 mx-4",
      color: "border-black",
      variant: "border-solid"
    },
    seeMore: {
      type: "button",
      variant: "primary",
      onClick: () => { },
      className: "",
      disabled: false,
      size: "w-full",
      children: "See More"
    }
  }
};