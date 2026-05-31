import type { Meta, StoryObj } from "@storybook/react-vite";

import Card from "./Card";

const meta: Meta<typeof Card> = {
  title: "Molecules/Card",
  component: Card,
  argTypes: {
    glare: {
      control: "boolean",
      description: "Activa el efecto holográfico 3D al hacer hover",
    },
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    className: "m-5 w-72 ",
    img: {
      src: "./img/image2.jpg",
      alt: "Logo",
      className: "",
      rounded: "rounded-sm"
    },
    title: {
      children: "Title",
      className: "mb-1 font-bold",
      size: "text-2xl",
      as: "h3",
    },
    description: {
      children: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.",
      className: "opacity-80",
      size: "text-xs"
    },
  }
};