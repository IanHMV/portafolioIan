import type { Meta, StoryObj } from "@storybook/react-vite";

import InputField from "./InputField";

const meta: Meta<typeof InputField> = {
  title: "Molecules/InputField",
  component: InputField,
  argTypes: {
  },
} satisfies Meta<typeof InputField>;

export default meta;

type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  args: {
    className: "w-1/4",
    id: "name",
    disabled: false,

    labelClassName: "",
    text: "Label",
    required: false,

    inputClassName: "",
    type: "text",
    value: "",
    onChange: () => { },
    error: false,
    placeholder: "Input Text",
  },
};