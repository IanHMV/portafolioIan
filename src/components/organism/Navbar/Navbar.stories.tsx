import type { Meta, StoryObj } from "@storybook/react-vite";
import Navbar from "./Navbar";

const meta: Meta<typeof Navbar> = {
    title:"Organism/Navbar",
    component:Navbar,
} satisfies Meta<typeof Navbar>

export default meta;

type Story = StoryObj<typeof Navbar>


export const Default: Story ={
    
}