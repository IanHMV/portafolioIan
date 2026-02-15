import type { Meta, StoryObj } from "@storybook/react-vite";
import Contact from "./Contact";

const meta: Meta<typeof Contact> = {
    title: "Organism/Contact",
    component: Contact,
} satisfies Meta<typeof Contact>;

export default meta;

type Story = StoryObj<typeof Contact>;

export const Default: Story = {
    args: {
        id: "",
        className: "bg-gray-200 rounded-md py-10 px-5",
        classNameDivTextIcon: "bg-gray-100 rounded-lg py-5 flex flex-col gap-4",

        classNameDivText: "",
        text: {
            variant: "h2",
            children: "Contact with Me!",
            className: "text-3xl text-center font-bold",
        },
        classNameDivIcons: "flex gap-3 justify-center",
        listIcons: [
            {
                icon: {
                    name: "github",
                    className: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl", // Responsive
                },
                link: {
                    href: "https://github.com/IanHMV",
                    children: "",
                    className: ""
                }
            },
            {
                icon: {
                    name: "linkedin",
                    className: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl", // Responsive
                },
                link: {
                    href: "https://www.linkedin.com/in/ianhmv/",
                    children: "",
                    className: ""
                }
            },
        ]
    }
}