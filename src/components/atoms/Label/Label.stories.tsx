import type { Meta, StoryObj } from "@storybook/react-vite";

import Label from "./Label";

const meta: Meta<typeof Label> = {
  title: "Atoms/Label",
  component: Label,
  argTypes: {
  },
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    htmlFor: "name",
    size: "text-base",
    text: "Label",
    disabled: false,
    required: false,
    className: ""
  },
};