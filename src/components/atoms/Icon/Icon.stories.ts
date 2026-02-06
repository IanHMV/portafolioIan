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

export const Search: Story ={
    args:{
        name:"search",
        size:2,
        className:"",
    }
}

export const User: Story ={
    args:{
        name:"user",
        size:2,
        className:"",
    }
}

export const Settings: Story ={
    args:{
        name:"settings",
        size:2,
        className:"",
    }
}