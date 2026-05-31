import type { Meta, StoryObj } from "@storybook/react-vite";

import Textarea from "./Textarea";

const meta: Meta<typeof Textarea> = {
  title: "Atoms/Textarea",
  component: Textarea,
  argTypes: {
  },
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    id: "",
    name: "",
    error: false,
    disabled: false,
    row: 4,
    value: "",
    size: "w-1/4",
    placeholder: "",
    className: "",
    resize: "resize-none",
    onChange: () => { }
  },
};