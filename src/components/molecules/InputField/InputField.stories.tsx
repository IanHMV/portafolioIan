import type { Meta, StoryObj } from "@storybook/react-vite";
import InputField from "./InputField";

const meta: Meta<typeof InputField> = {
  title: "Molecules/InputField",
  component: InputField,
  argTypes: {
    id: { control: "text" },
    className: { control: "text" },
    text: { control: "object" },  
    input: { control: "object" },  
  },
};

export default meta;

type Story = StoryObj<typeof InputField>;

export const OriginalInput: Story = {
  args: {
    id: "input-field",
    className: "flex flex-col gap-3",
    text: {
      htmlFor:"",
      variant: "label",
      children: "Label text",
      className: "text-sm font-medium",
    },
    input: {
      id:"",
      type: "text",
      value: "",
      className: "border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
      placeholder: "Ingresa algo",
    },
  },
};
