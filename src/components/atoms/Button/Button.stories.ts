import type { Meta, StoryObj } from "@storybook/react-vite";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    children: { control: "text" },
    variant: {
      control: { type: "select" },
      options: ["Primary", "Secondary", "Danger"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: "Primary",
    size: "md",
    disabled: false,
    className: "",
    htmlType: "button"
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    variant: "Secondary",
    size: "md",
  },
};

export const DangerLarge: Story = {
  args: {
    children: "Danger Button",
    variant: "Danger",
    size: "lg",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    variant: "Primary",
    size: "md",
    disabled: true,
  },
};
