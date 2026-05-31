import type { Meta, StoryObj } from "@storybook/react-vite";

import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    variant: "primary",
    size: "w-1/4",
    type: "button",
    className: "",
    disabled: false,
    onClick: () => { },
    children: "Button"
  },
};