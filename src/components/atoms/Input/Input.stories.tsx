import type { Meta, StoryObj } from "@storybook/react-vite";

import Input from "./Input";

const meta: Meta<typeof Input> ={
    title: "Atoms/Input",
    component: Input,
    argTypes:{
        type:{
            control:"select",
            options:["text" , "number" , "password" , "email"]
        },
        value:{control:"text"},
        placeholder:{control:"text"},
        className:{control:"text"}
    }
} satisfies Meta<typeof Input>

export default meta;

type Story = StoryObj<typeof Input>

export const Text: Story ={
    args:{
        type:"text",
        value:"",
        placeholder:"Ingresa el texto aqui",
        className:"",
    }
}


export const Number: Story ={
    args:{
        type:"number",
        value:"",
        placeholder:"123456",
        className:"",
    }
}

export const Password: Story ={
    args:{
        type:"password",
        value:"",
        placeholder:"********",
        className:"",
    }
}