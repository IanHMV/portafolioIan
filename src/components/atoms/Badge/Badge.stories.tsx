import type { Meta, StoryObj } from "@storybook/react-vite";

import Badge from "./Badge";

const meta: Meta<typeof Badge> = {
  title: "Atoms/Badge",
  component: Badge,
  argTypes: {
  },
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    color: "bg-[#3a3939]",
    size: "w-1/4",
    className: "text-white",
    label: "Badge"
  },
};