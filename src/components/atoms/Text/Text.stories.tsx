import type { Meta, StoryObj } from "@storybook/react-vite";

import Text from "./Text";

const meta: Meta<typeof Text> = {
  title: "Atoms/Text",
  component: Text,
  argTypes: {
  },
} satisfies Meta<typeof Text>;

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    as: "p",
    className: "",
    size: "text-base",
    weight: "font-normal",
    children: "Text Nomal"
  },
};