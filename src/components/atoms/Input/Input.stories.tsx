import type { Meta, StoryObj } from "@storybook/react-vite";

import Input from "./Input";

const meta: Meta<typeof Input> = {
  title: "Atoms/Input",
  component: Input,
  argTypes: {
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    id: "input",
    name: "input",
    type: "text",
    placeholder: "Input",
    value: "",
    disabled: false,
    error: false,
    size: "w-1/4",
    onChange: () => { },
    className: ""
  },
};