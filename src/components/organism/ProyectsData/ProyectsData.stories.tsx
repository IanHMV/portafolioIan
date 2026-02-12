import type { Meta, StoryObj } from "@storybook/react-vite";
import ProyectsData from "./ProyectsData";

const meta: Meta<typeof ProyectsData> = {
  title: "Organism/ProyectsData",
  component: ProyectsData,
  argTypes: {
  },
} satisfies Meta<typeof ProyectsData>;

export default meta;

type Story = StoryObj<typeof ProyectsData>;

export const Default: Story = {
  args: {
    className: "",
    id: "",
    cardList: [
      {
        className: "grid grid-cols-1 gap-5 sm:grid-cols-2 md: grid-cols-3 lg:grid-cols-4",
        cards: [
          {
            className: "",
            image: {
              src: "./img/Me.svg",
              alt: "Me",
              className: "rounded-md",
              rounded: false,
              size: 300
            },

            classNameOverlay: "",
            title: {
              children: "Proyecto",
              variant: "p",
              className: ""
            },

            classNameIcons: "",
            linkIcons: [
              {
                link: {
                  href: "https://github.com/IanHMV",
                  className: "",
                  children: "",
                },
                icon: {
                  name: "home",
                  size: 24,
                  className: "text-blue-500"
                }
              },
              {
                link: {
                  href: "https://github.com/IanHMV",
                  className: "",
                  children: "",
                },
                icon: {
                  name: "home",
                  size: 24,
                  className: "opacity-100 text-blue-500"
                }
              }

            ],

            classNameTec: "",
            tecnologias: [
              {
                children: "Boostrap",
                className: "bg-blue-500 text-white px-2 py-1 rounded text-sm",
                variant: "span",
              },
              {
                children: "Boostrap",
                className: "bg-blue-500 text-white px-2 py-1 rounded text-sm",
                variant: "span",
              }
            ]
          },
          {
            className: "",
            image: {
              src: "./img/Me.svg",
              alt: "Me",
              className: "rounded-md",
              rounded: false,
              size: 300
            },

            classNameOverlay: "",
            title: {
              children: "Proyecto",
              variant: "p",
              className: ""
            },

            classNameIcons: "",
            linkIcons: [
              {
                link: {
                  href: "https://github.com/IanHMV",
                  className: "",
                  children: "",
                },
                icon: {
                  name: "home",
                  size: 24,
                  className: "text-blue-500"
                }
              },
              {
                link: {
                  href: "https://github.com/IanHMV",
                  className: "",
                  children: "",
                },
                icon: {
                  name: "home",
                  size: 24,
                  className: "opacity-100 text-blue-500"
                }
              }

            ],

            classNameTec: "",
            tecnologias: [
              {
                children: "Boostrap",
                className: "bg-blue-500 text-white px-2 py-1 rounded text-sm",
                variant: "span",
              },
              {
                children: "Boostrap",
                className: "bg-blue-500 text-white px-2 py-1 rounded text-sm",
                variant: "span",
              }
            ]
          }
        ]
      }
    ]
  }
}