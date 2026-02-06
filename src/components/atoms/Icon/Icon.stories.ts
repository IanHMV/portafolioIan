import type { Meta, StoryObj } from "@storybook/react-vite";

import Icon from "./Icon";

const meta: Meta<typeof Icon> ={
    title:"Atoms/Icon",
    component: Icon,
    argTypes:{
        name:{
            control:"select",
            options:["home", "search", "user", "settings"]
        },
        size:{control:"number"},
        className:{control:"text"},
    }
}satisfies Meta<typeof Icon>

export default meta;

type Story = StoryObj<typeof Icon>;

export const Home: Story ={
    args:{
        name:"home",
        size:2,
        className:"",
    }
}