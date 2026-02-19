import type { Meta, StoryObj } from "@storybook/react-vite";
import BackgroundClouds from "./BackgroundClouds";

const meta: Meta<typeof BackgroundClouds> = {
  title: "Atoms/BackgroundClouds",
  component: BackgroundClouds,
} satisfies Meta<typeof BackgroundClouds>;

export default meta;

type Story = StoryObj<typeof BackgroundClouds>;

export const Primary: Story = {
    args:{
        classNameDivPrimary:"scene",
        classNameDivSecondary:"clouds clouds-1 ",
        classNameDivTertiary:""
    }
}
