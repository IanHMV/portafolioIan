import type { Meta, StoryObj } from "@storybook/react-vite";
import LayInicio from "./LayInicio";

const meta: Meta <typeof LayInicio> = {
    title:"Layout/LayInicio",
    component:LayInicio,

} satisfies Meta<typeof LayInicio>;

export default meta;

type Story = StoryObj <typeof LayInicio>;

export const Lay: Story ={

}