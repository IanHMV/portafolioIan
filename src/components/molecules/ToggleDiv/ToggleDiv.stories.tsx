import type { Meta, StoryObj } from "@storybook/react-vite";
import ToggleDiv from "./ToggleDiv";

const meta: Meta<typeof ToggleDiv> = {
  title: "Molecules/ToggleDiv",
  component: ToggleDiv,
} satisfies Meta<typeof ToggleDiv>;

export default meta;

type Story = StoryObj<typeof ToggleDiv>;

export const Default: Story = {
  args: {
    className: "w-full p-2 shadow-sm rounded-md",

    classNamePre: " flex justify-between cursor-pointer",
    title: [{
      children: "Programador Junior",
      className: "text-xl font-bold text-indigo-600",
      variant: "h2"
    }, {
      children: "FORENTEC",
      className: " font-bold text-gray-500",
      variant: "h3"
    }],

    classNameInfo: "transition-all ease-in-out duration-500 ml-4 mt-2 md:w-8/10 lg:w-6/10",
    info: [
      {
        children: "Js",
        className: "inline-block rounded-md bg-yellow-200 w-2/10 py-1 mr-2 text-center",
        variant: "span"
      },
      {
        children: "Ruby",
        className: "inline-block rounded-md bg-red-200 w-2/10 py-1 mr-2 text-center",
        variant: "span"
      },
      {
        children: "CSS",
        className: "inline-block rounded-md bg-blue-200 w-2/10 py-1 mr-2 text-center",
        variant: "span"
      },
      {
        children: "Led the creation of a system for a political party, using Ruby on Rails and JavaScript, which improved data management efficiency by 25%, facilitating access and organization of real-time information.",
        className: "mt-2 text-justify text-sm font-bold",
        variant: "p"
      }
    ]
  }
}