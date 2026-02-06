import type { Meta, StoryObj } from "@storybook/react-vite";
import InputField from "./InputField";

const meta: Meta<typeof InputField> ={
    title: "Molecules/InputField",
    component: InputField,
    argTypes:{
        id:{control:"text"},
        label:{control:"text"},
        type:{
            control:"select",
            options:["text", "number", "password", "email"]
        },
        placeholder:{control:"text"},
        value:{control:"text"},
        className:{control:"text"}
    }
} satisfies Meta<typeof InputField>;

export default meta;

type Story = StoryObj<typeof InputField>

export const OriginalInput: Story ={
    args:{
        id:"input-field",
        label:"Texto",
        type:"text",
        placeholder:"Este es un placeholder",
        value:"",
        className:"",
    },
}


