

import type { Meta, StoryObj } from "@storybook/react-vite";
import AboutMe from "./AboutMe";

const meta: Meta<typeof AboutMe> = {
    title: "Organism/AboutMe",
    component: AboutMe,
    argTypes: {
    }
} satisfies Meta<typeof AboutMe>

export default meta;

type Story = StoryObj<typeof AboutMe>

export const Default: Story = {
    args: {
        className: "text-center px-4 md:px-8 lg:px-16 lg:w-5/7 lg:m-auto",
        title: {
            children: "About Me",
            className: "text-3xl md:text-4xl lg:text-5xl py-5 font-bold",
            variant: "h2"
        },
            classNameDivTextImg: "flex flex-col items-center gap-6 md:flex-row md:gap-8 lg:flex lg:justify-center  ",

                classNameParagraph: "text-sm text-justify md:text-base md:text-left md:flex-1 lg:text-lg lg:w-1/2",
                paragraph: {
                    children: "Hi! I'm a Junior Frontend Developer with experience in React and Tailwind CSS, and solid JavaScript and CSS fundamentals. Focused on building clean, reusable, and flexible interfaces following Atomic Design principles. Constantly learning through documentation, courses, and personal projects. Currently seeking a remote Junior Frontend position.",
                    className: "leading-relaxed",
                    variant: "p"
                },
                
                classNameImg: "order-1 md:order-2 lg:w-1/2 lg:flex lg:justify-center",
                image: {
                    src: "./img/imgAboutMe.svg",
                    alt: "AboutMe",
                    // 👇 Imagen fluida que crece pero con max-width
                    className: "w-full sm:max-w-[300px] md:max-w-[300px] lg:max-w-[400px] h-auto",
                    rounded: false,
                }
    }
}