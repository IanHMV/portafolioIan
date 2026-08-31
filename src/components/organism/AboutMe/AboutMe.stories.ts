import type { Meta, StoryObj } from "@storybook/react-vite";
import AboutMe from "./AboutMe";

const meta: Meta<typeof AboutMe> = {
  title: "Organism/AboutMe",
  component: AboutMe,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof AboutMe>;

export default meta;

type Story = StoryObj<typeof AboutMe>;

const content = {
  cover: {
    initials: "IM",
    role: "Frontend developer",
  },
  heading: {
    children: "Hi, I'm Ian",
  },
  paragraphs: [
    "I'm a frontend developer passionate about building interfaces that feel effortless: clean layouts, thoughtful motion and details that make people want to stay.",
    "My everyday stack is TypeScript, React and Tailwind CSS. I structure my components with Atomic Design and document every piece in Storybook, so each atom, molecule and organism stays reusable and easy to test.",
    "When I'm not coding you'll find me exploring new UI trends, polishing this portfolio or learning something new to push my craft further.",
  ],
  contentImage: {
    src: "/img/Me.svg",
    alt: "Portrait of Ian Martinez",
  },
};

/* La tarjeta arranca en el rótulo y se funde sola a la presentación cuando
   la sección ocupa la pantalla; en el canvas de Storybook eso pasa nada más
   abrirla. Para ver el rótulo quieto, pulsa el botón de la esquina. */
export const Default: Story = {
  args: content,
};
