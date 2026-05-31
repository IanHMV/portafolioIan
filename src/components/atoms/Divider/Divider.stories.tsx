import type { Meta, StoryObj } from "@storybook/react-vite";

import Divider from "./Divider";

const meta: Meta<typeof Divider> = {
  title: "Atoms/Divider",
  component: Divider,
  argTypes: {
  },
} satisfies Meta<typeof Divider>;

export default meta;

type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: {
    variant: "border-solid",
    size: "border-t-2",
    color: "border-black",
    className: "mt-5"
  },
};