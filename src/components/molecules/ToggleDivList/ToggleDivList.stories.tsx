import type { Meta, StoryObj } from "@storybook/react-vite";
import ToggleDivList from "./ToggleDivList";

const meta: Meta<typeof ToggleDivList> = {
  title: "Molecules/ToggleDivList",
  component: ToggleDivList,
} satisfies Meta<typeof ToggleDivList>;

export default meta;

type Story = StoryObj<typeof ToggleDivList>;

export const Default: Story = {
    args:{
        items:[
  {
    title: "Senior Product Designer",
    details: "Empresa: Innovative Solutions Inc. | San Francisco, CA | 2021 - Presente"
  },
  {
    title: "UX Designer",
    details: "Empresa: Digital Creations Studio | Remote | 2019 - 2021"
  },
  {
    title: "UI Designer",
    details: "Empresa: CreativeTech Agency | New York, NY | 2017 - 2019"
  },
  {
    title: "Graphic Designer",
    details: "Empresa: TechStart Studios | Chicago, IL | 2015 - 2017"
  }
]
    }
}