import type { Meta, StoryObj } from "@storybook/react-vite";

import Avatar from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "Atoms/Avatar",
  component: Avatar,
  argTypes: {
  },
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    src: "./img/Logo-SF.svg",
    alt: "logo",
    rounded: "rounded-full",
    size: "w-24 h-24",
    className: "bg-black"
  },
};