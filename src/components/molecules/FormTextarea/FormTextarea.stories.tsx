import type { Meta, StoryObj } from "@storybook/react-vite";

import FormTextarea from "./FormTextarea";

const meta: Meta<typeof FormTextarea> = {
  title: "Molecules/FormTextarea",
  component: FormTextarea,
  argTypes: {
  },
} satisfies Meta<typeof FormTextarea>;

export default meta;

type Story = StoryObj<typeof FormTextarea>;

export const Default: Story = {
  args: {
    id: "textArea",
    className: "",
    disabled: false,

    labelClassName: "",
    text: "Text Area",
    required: false,

    textareaClassName: "",
    name: "TextArea",
    value: "",
    placeholder: "Text Area",
    onChange: () => { },
    error: false,
    resize: "resize",
    size: "w-full",
    row: 4,
  },
};