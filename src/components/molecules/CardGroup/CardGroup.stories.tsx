import type { Meta, StoryObj } from "@storybook/react-vite";

import CardGroup from "./CardGroup";

const meta: Meta<typeof CardGroup> = {
  title: "Molecules/CardGroup",
  component: CardGroup,
  argTypes: {
  },
} satisfies Meta<typeof CardGroup>;

export default meta;

type Story = StoryObj<typeof CardGroup>;

export const Default: Story = {
  args: {
    className: "flex gap-4",
    cards: [
      {
        className: " w-72 ",
        img: {
          src: "/img/image2.webp",
          alt: "Image",
          className: "",
          rounded: "rounded-md"
        },
        title: {
          as: "h3",
          size: "text-3xl",
          className: "",
          children: "Title",
        },
        description: {
          as: "p",
          size: "text-base",
          className: "",
          children: "This is a description"
        },
      },
      {
        className: " w-72 ",
        img: {
          src: "/img/image2.webp",
          alt: "Image",
          className: "",
          rounded: "rounded-md"
        },
        title: {
          as: "h3",
          size: "text-3xl",
          className: "",
          children: "Title",
        },
        description: {
          as: "p",
          size: "text-base",
          className: "",
          children: "This is a description"
        },
      }
    ]
  }
};