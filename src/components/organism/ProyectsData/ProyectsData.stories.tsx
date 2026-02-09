import type { Meta, StoryObj } from "@storybook/react-vite";
import ProyectsData from "./ProyectsData";

const meta: Meta<typeof ProyectsData> = {
  title: "Organism/ProyectsData",
  component: ProyectsData,
  argTypes: {
  },
} satisfies Meta<typeof ProyectsData>;

export default meta;

type Story = StoryObj<typeof ProyectsData>;

export const Default: Story = {
    
}