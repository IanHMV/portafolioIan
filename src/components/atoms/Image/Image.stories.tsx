import type { Meta, StoryObj } from "@storybook/react-vite";

import Image from "./Image";

const meta: Meta<typeof Image> = {
  title: "Atoms/Image",
  component: Image,
  argTypes: {
  },
} satisfies Meta<typeof Image>;

export default meta;

type Story = StoryObj<typeof Image>;

export const Default: Story = {
  args: {
    src: "/img/Logo-SF.svg",
    alt: "Logo",
    className: "w-16 h-16 bg-black",
    rounded: "rounded-sm"
  },
};