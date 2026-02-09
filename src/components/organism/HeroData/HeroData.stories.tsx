import type { Meta, StoryObj } from "@storybook/react-vite";
import HeroData from "./HeroData";

const meta: Meta <typeof HeroData> = {
    title:"Layout/HeroData",
    component:HeroData,
    argTypes:{
        className:{control:"text"}
    }

} satisfies Meta<typeof HeroData>;

export default meta;

type Story = StoryObj <typeof HeroData>;

export const Hero: Story ={
    args:{
        className:"min-h-screen flex flex-col justify-center",
        imageText:{
            className:"flex flex-col items-center justify-center gap-5",
            image:{
                className:"",
                alt:"Me",
                src:"./Me.svg",
                rounded:true,
                size:100
            },
            text:[
                {
            children:"Hi! My Name is Ian.",
            variant:"h3",
            className:"text-2xl font-medium",
            htmlFor:""
        },
        {
            children:"FrontEnd Developer",
            variant:"p",
            className:"text-base",
            htmlFor:""
        }

            ]
        },
        containerButtons:"flex flex-col gap-4 justify-center items-center mt-5 sm:flex-col md:flex-row md:gap-10 ",
        links:[
            {children: "Ver proyectos", href: "#proyectos", className:"bg-blue-100 w-6/12 sm:w-6/12 md:w-4/12 lg:w-2/12 px-2 py-5 rounded-sm text-center"},
            {children: "Experiencia", href: "#experiencia", className:"bg-blue-100 w-6/12 sm:w-6/12 md:w-4/12 lg:w-2/12 px-2 py-5 rounded-md text-center"}
        ]

    }
}