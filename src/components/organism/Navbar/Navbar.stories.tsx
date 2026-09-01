import type { Meta, StoryObj } from "@storybook/react-vite";

import Navbar from "./Navbar";
import type { NavbarItem } from "./Navbar.types";

const meta: Meta<typeof Navbar> = {
  title: "Organism/Navbar",
  component: Navbar,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof Navbar>;

const items: NavbarItem[] = [
  { href: "#home", label: "Home", icon: "home" },
  { href: "#about", label: "About", icon: "about" },
  { href: "#projects", label: "Projects", icon: "projects" },
  { href: "#experience", label: "Experience", icon: "experience" },
  { href: "#skills", label: "Skills", icon: "skills" },
  { href: "#contact", label: "Contact", icon: "contact" },
];

/*
 * El componente pinta DOS navegaciones y el corte lo lleva entero el CSS
 * (48rem): por debajo, el menú hamburguesa; por encima, el dock. Así que
 * lo que se ve en el canvas depende del ancho del viewport, no de un arg
 * — de ahí que las historias de móvil solo cambien el `viewport` global.
 *
 * La navegación va fija a la ventana y su ítem activo lo decide un
 * IntersectionObserver sobre las secciones de la página. En el canvas de
 * Storybook no hay página, así que la historia monta unas secciones de
 * relleno con los mismos `id`: sin ellas la lente se quedaría clavada en
 * "Home" y no habría nada que probar.
 */
export const Default: Story = {
  args: { items },
  decorators: [
    (Story) => (
      <div style={{ background: "var(--color-surface)" }}>
        <Story />

        {items.map((item, index) => (
          <section
            key={item.href}
            id={item.href.slice(1)}
            style={{
              minHeight: "100svh",
              display: "grid",
              placeItems: "center",
              /* una franja sí y otra no, para ver dónde acaba cada sección
                 mientras se comprueba en qué punto salta la lente */
              background:
                index % 2 === 0
                  ? "var(--color-surface)"
                  : "var(--color-surface-2)",
              color: "var(--color-ink)",
              font: "600 clamp(2rem, 6vw, 4rem)/1 'Outfit', sans-serif",
              letterSpacing: "-0.03em",
            }}
          >
            {item.label}
          </section>
        ))}
      </div>
    ),
  ],
};

/* Cómo se ve el dock al entrar por un enlace directo a una sección del
   medio: el `defaultIndex` es lo que mira antes de que el observador diga
   la suya. */
export const StartOnProjects: Story = {
  ...Default,
  args: { items, defaultIndex: 2 },
};

/*
 * ── MÓVIL ────────────────────────────────────────────────────────────
 *
 * Por debajo de 48rem el dock desaparece y queda el botón hamburguesa en
 * la esquina de arriba a la izquierda. El panel se abre al pulsarlo: no
 * hay forma de arrancar la historia con el menú desplegado porque el
 * estado es interno del componente, y sacarlo a una prop solo para
 * Storybook sería ensanchar la API por comodidad del taller.
 *
 * Qué mirar aquí:
 *   · el panel baja desde el filo superior y el botón se queda encima,
 *     convertido en aspa
 *   · el ítem de la sección en la que estás sale con el mismo cristal que
 *     la lente del dock
 *   · Escape, un toque en el velo o un toque en un enlace lo cierran
 *   · con el teclado, el tabulador da vueltas dentro del menú y no se
 *     escapa a la página de detrás
 */
export const Mobile: Story = {
  ...Default,
  globals: { viewport: { value: "iphoneX", isRotated: false } },
};

/* El teléfono más estrecho que se sigue vendiendo. Es el ancho en el que
   se comprueba que ni el botón ni los rótulos del panel se aprietan. */
export const MobileNarrow: Story = {
  ...Default,
  globals: { viewport: { value: "androidMid", isRotated: false } },
};
