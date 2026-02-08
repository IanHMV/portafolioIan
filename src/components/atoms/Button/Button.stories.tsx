import type { Meta, StoryObj } from "@storybook/react-vite";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    children: { control: "text" },
    disabled: { control: "boolean" },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Primary Button",
    disabled: false,
    className: "rounded font-bold transition-colors bg-blue-500 text-white px-4 py-2 text-base hover:bg-blue-600 cursor-pointer disable:bg- ",
    htmlType: "button"
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    className:"rounded font-bold transition-colors bg-gray-500 text-white hover:bg-gray-600 cursor-pointer px-4 py-2 text-base",
  },
};

export const DangerLarge: Story = {
  args: {
    children: "Danger Button",
    className:"rounded font-bold transition-colors bg-red-500 text-white hover:bg-red-600 cursor-pointer px-4 py-2 text-base",
  },
};

export const Disabled: Story = {
  args: {
    className:"rounded font-bold transition-colors bg-blue-500 text-white px-4 py-2 text-base hover:bg-blue-600 disable:bg- ",
    children: "Disabled Button",
    disabled: true,
  },
};
