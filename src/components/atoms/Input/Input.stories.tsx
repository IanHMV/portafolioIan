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
        className:"border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
    }
}


export const Number: Story ={
    args:{
        type:"number",
        value:"",
        placeholder:"123456",
        className:"border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
    }
}

export const Password: Story ={
    args:{
        type:"password",
        value:"",
        placeholder:"********",
        className:"border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
    }
}