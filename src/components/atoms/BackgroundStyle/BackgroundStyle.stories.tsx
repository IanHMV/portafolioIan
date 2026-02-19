import type { Meta, StoryObj } from "@storybook/react-vite";
import BackgroundStyle from "./BackgroundStyle";

const meta: Meta<typeof BackgroundStyle> = {
  title: "Atoms/BackgroundStyle",
  component: BackgroundStyle,

} satisfies Meta<typeof BackgroundStyle>;

export default meta;

type Story = StoryObj<typeof BackgroundStyle>;

export const Primary: Story = {
    args:{
        classNameDivPrimary:"sky",
        imageSun:{
            src:"./img/sun.gif",
            alt:"",
            className:"sun both",
            rounded:false,
        },
        imageMe:{
            src:"./img/Me.svg",
            alt:"",
            className:"me both",
            rounded:true,
        }
    }
}