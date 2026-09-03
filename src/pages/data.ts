
import type { HeroSectionProps } from "../components/organism/HeroSection/HeroSection.types"
import type { AboutMeProps } from "../components/organism/AboutMe/AboutMe.types"
import type { ProjectSectionProps } from "../components/organism/ProjectSection/ProjectSection.types"
import type { ExperienceSectionProps } from "../components/organism/ExperienceSection/ExperienceSection.types";
import type { FooterProps } from "../components/organism/Footer/Footer.types";
import type { SkillsSectionProps } from "@/components/organism/SkillsSection/SkillsSection.types";
import type { NavbarProps } from "@/components/organism/Navbar/Navbar.types";

/*
 * El menú del dock. El orden de esta lista es el orden en el que se recorre
 * la página, y cada `href` tiene que apuntar al `id` de su sección: es de
 * ahí de donde el componente saca qué elemento vigilar para encender el
 * ítem cuando esa sección llega a la altura de los ojos.
 *
 * Seis es el tope: el dock mide 6 x ancho de icono y a partir de ahí no
 * cabe en una pantalla de 320px sin encoger los iconos por debajo del área
 * táctil recomendada. Para añadir una séptima sección, lo que hay que
 * repensar es el dock, no esta lista.
 */
export const navbar: NavbarProps = {
  items: [
    { href: "#home", label: "Home", icon: "home" },
    { href: "#about", label: "About", icon: "about" },
    { href: "#projects", label: "Projects", icon: "projects" },
    { href: "#experience", label: "Experience", icon: "experience" },
    { href: "#skills", label: "Skills", icon: "skills" },
    { href: "#contact", label: "Contact", icon: "contact" },
  ],
};

export const hero: HeroSectionProps = {
  id: "home",
  logo: {
    src: "/img/Logo.svg",
    alt: "Ian Martinez logo",
  },
  heading: {
    // Cámbialo por lo que quieras y del largo que quieras: el hero reparte
    // el ancho del panel entre las letras del saludo para calcular su
    // cuerpo, así que uno largo sale más pequeño y uno corto más grande,
    // sin tocar el CSS. Y si aun así no cupiera, parte en dos líneas en vez
    // de recortarse.
    children: "Hi, what's new?",
  },
  description: {
    children:
      "Frontend Developer building clean, modern interfaces that are fast, accessible, and a joy to use.",
  },
  primaryAction: {
    label: "View projects",
    href: "#projects",
  },
  secondaryAction: {
    label: "Contact me",
    href: "#contact",
  },
  /* El CV se sirve desde `public/`, así que es un fichero estático del mismo
     origen: un <a href download> lo baja sin pasar por JavaScript. */
  tertiaryAction: {
    label: "Download CV",
    href: "/Ian_Martinez_CV.pdf",
    download: true,
  },
};

export const aboutMe: AboutMeProps = {
  id: "about",
  // Rótulo de la tarjeta: es lo primero que se ve y se desvanece solo al
  // llegar a la sección. Los tamaños no se tocan aquí — el CSS los calcula
  // contra el ancho de la tarjeta.
  cover: {
    initials: "IM",
    role: "Frontend developer",
  },
  heading: {
    children: "Hi, I'm Ian",
  },
  paragraphs: [
    "I'm a frontend developer passionate about building interfaces that feel effortless: clean layouts, thoughtful motion and details that make people want to stay.",
    // El cierre decía "...easy to test": una afirmación que hoy no hay con
    // qué defender en una entrevista, porque el repo no tiene tests. Se
    // cambia por "easy to reason about". Cuando haya tests de verdad, la
    // línea original vuelve tal cual:
    //   "...stays reusable and easy to test."
    "My everyday stack is TypeScript, React and Tailwind CSS, and I take my own work to production with Docker and nginx on Linux. I structure my components with Atomic Design and document them in Storybook, so each atom, molecule and organism stays reusable and easy to reason about.",
    "When I'm not coding you'll find me exploring new UI trends, polishing this portfolio or learning something new to push my craft further.",
  ],
  contentImage: {
    src: "/img/Me.svg",
    alt: "Portrait of Ian Martinez",
  },
};

export const projectSection: ProjectSectionProps = {
  id: "projects",
  className: "bg-surface",
  eyebrow: "What I have built",
  // Sin `size` ni clases de color, igual que Experience y Skills: el cuerpo
  // fluido y el degradado de tinta los pone ProjectSection.module.css. Antes
  // el `text-white font-bold` de aquí era lo que hacía que este titular se
  // viera distinto a todos los demás del sitio.
  heading: {
    as: "h2",
    children: "Projects",
  },
  description: {
    children:
      "Some of the things I've created while perfecting my technique, studying, or working. Hover over a card to pause the carousel.",
  },
  projects: [
    {
      img: { src: "/img/sesaecol.webp", alt: "Sesaecol" },
      description: "The public-facing platform for Colima's state anti-corruption system. My first production project in government.",
      title: "Sesaecol",
      footer: "REACT + TAILWIND CSS",
      githubUrl: "https://sesaecol-gob.com/",
      backColor: "#3b0764",
    },
    {
      img: { src: "/img/pdecolima.webp", alt: "Pdecolima" },
      description: "A central hub that unifies access to every system I run on the state server, deployed with Docker behind nginx.",
      title: "PDECOLIMA",
      footer: "REACT + TS + DOCKER",
      githubUrl: "https://pdecolima.mx/",
      backColor: "#7c2d12",
    },
    {
      img: { src: "/img/s5.webp", alt: "System 5" },
      description: "A public reporting system that lets citizens file complaints against public officials.",
      title: "System 5 for reporting public official",
      footer: "REACT + TS + DOCKER",
      githubUrl: "https://pdecolima.mx/s5",
      backColor: "#134e4a",
    },
    {
      img: { src: "/img/finestra.webp", alt: "Project - Finestra" },
      description: "Website for a small gelato shop, built during my internship.",
      title: "Finestra Website",
      footer: "HTML + CSS",
      githubUrl: "https://github.com/IanHMV/Gelato",
      backColor: "#0f2027",
    },
  ],
};

export const experienceSection: ExperienceSectionProps = {
  id: "experience",
  className: "bg-surface",
  eyebrow: "Where I have worked",
  // El titular va partido a mano en dos líneas, como en la referencia: el
  // `\n` lo respeta `.title` con `white-space: pre-line`.
  title: {
    as: "h2",
    children: "Four places that turned\npractice into real work.",
  },
  description: {
    children:
      "Every card is a chapter — the short version here, the full story one click away.",
  },
  // El detalle de cada ficha es el mismo texto que ya estaba en la sección
  // anterior; lo nuevo es solo el resumen corto de la tarjeta.
  /*
   * De la más reciente a la más antigua, como en un CV: quien abre la
   * sección ve primero dónde estoy ahora, no dónde empecé.
   *
   * `code` es el ordinal de LECTURA, no el de la carrera: numera las
   * tarjetas por el orden en que aparecen, así que 01 es el trabajo actual.
   * La cronología ya la cuenta el campo `date` de cada tarjeta, que es un
   * dato y no una etiqueta.
   */
  entries: [
    {
      code: "01",
      title: "Full-Stack Developer",
      summary: "Built the state anti-corruption platform and its OAuth 2.0 integration with Mexico's National Digital Platform",
      date: "2025 — 2026",
      detail: {
        heading: "Government Employee",
        period: "January 2025 — August 2026 · SESAECOL",
        paragraphs: [
          "I worked in government managment the diferent systems of the National Digital Plataform. I worked with a physical server and run up different servers there for my government institute, some systems are from the National Digital Plataform and i only adapt this systems. And others systems i developed them from scratch.",
        ],
      },
    },    {
      code: "02",
      title: "Frontend Developer",
      summary: "Voting systems, data graphing and zone mapping for a cybersecurity firm",
      date: "2024",
      detail: {
        heading: "FORENTEC",
        period: "January — November 2024 · Cybersecurity",
        paragraphs: [
          "I worked with another partner in a company of cybersecurity, we develop web pages for companies and government. We developed pages for voting systems, data graphing and localitation of specific zones.",
          "I managed the graphication of the differents zones, i made that with json files and google.",
        ],
      },
    },
    {
      code: "03",
      title: "Frontend Developer",
      summary: "Frontend of a psychometric testing system, alongside a backend team",
      date: "2022 — 2023",
      detail: {
        heading: "Institute Project",
        period: "January 2022 — December 2023 · TECNM Colima",
        paragraphs: [
          "I worked for my academic institude for developing a system for psicometric tests. I made the frontend for this page and i worked with another partners and they made the backend in that moment.",
          "It was a good first experience working with another people, and i learned to use github deeper.",
        ],
      },
    },
    {
      code: "04",
      title: "Freelance Developer",
      summary: "Website for a gelato shop, built during my internship",
      date: "2020",
      detail: {
        heading: "Freelance Developer",
        period: "2020 · Finestra Gelato",
        paragraphs: [
          "This was my first experience working with a company that wanted to develop a website for its gelato store.",
          "I joined this company as part of my internship, where I was given the opportunity to design and develop its website to promote the business and help attract more customers.",
        ],
      },
    },
  ],
};

export const skillSection: SkillsSectionProps = {
  /* Skills era la única sección con `id` en sus props y sin usarlo. Ahora
     lo necesita: es el destino del quinto icono del dock. */
  id: "skills",
  className: "bg-surface",
  eyebrow: "What I build with",
  // Sin `size` ni clases de color: el tamaño fluido y la tinta los pone
  // SkillsSection.module.css, igual que en Experience y en el hero.
  title: {
    as: "h2",
    children: "My Skills",
  },
  description: {
    children:
      "The tools I work with every day. Hover a logo to stop the wheel and read what I do with it.",
  },
  skills: [
    {
      name: "JavaScript",
      icon: { src: "/imgStack/js.svg", alt: "JavaScript logo" },
      description:
        "The language behind everything I build — from DOM logic to async data flows.",
      color: "#f7df1e",
    },
    {
      name: "TypeScript",
      icon: { src: "/imgStack/ts.svg", alt: "TypeScript logo" },
      description:
        "My default for every project: typed props, safer refactors and self-documenting code.",
      color: "#3178c6",
    },
    {
      name: "React",
      icon: { src: "/imgStack/react.svg", alt: "React logo" },
      description:
        "Component-driven UIs with hooks, following Atomic Design and documented in Storybook.",
      color: "#61dafb",
    },
    {
      name: "Node.js",
      icon: { src: "/imgStack/node.svg", alt: "Node.js logo" },
      description:
        "APIs, tooling and scripts on the server side of JavaScript.",
      color: "#83cd29",
    },
    {
      name: "MongoDB",
      icon: { src: "/imgStack/mongodb.svg", alt: "MongoDB logo" },
      description:
        "Document databases for flexible, fast-moving data models.",
      color: "#4faa41",
    },
    {
      name: "CSS",
      icon: { src: "/imgStack/css.svg", alt: "CSS logo" },
      description:
        "Layouts, animation and responsive design — lately with Tailwind CSS v4.",
      color: "#1572b6",
    },
    {
      name: "HTML",
      icon: { src: "/imgStack/html.svg", alt: "HTML5 logo" },
      description:
        "Semantic, accessible markup as the foundation of every interface.",
      color: "#e34f26",
    },
    {
      name: "Git",
      icon: { src: "/imgStack/git.svg", alt: "Git logo" },
      description:
        "Version control with clean branches and readable history on GitHub.",
      color: "#f05033",
    },
    {
      name: "Tailwind CSS",
      icon: { src: "/imgStack/tailwind.svg", alt: "Tailwind CSS logo" },
      description:
        "Utility-first styling for layouts that stay consistent without a stylesheet per component.",
      color: "#38bdf8",
    },
    {
      name: "Next.js",
      icon: { src: "/imgStack/nextjs.svg", alt: "Next.js logo" },
      description:
        "React with file-based routing and server rendering when a project needs to be indexable.",
      color: "#ffffff",
    },
    {
      name: "Docker",
      icon: { src: "/imgStack/docker.svg", alt: "Docker logo" },
      description:
        "Containers for shipping my own work — every system I run on the state server is an image.",
      color: "#2496ed",
    },
    {
      name: "Python",
      icon: { src: "/imgStack/python.svg", alt: "Python logo" },
      description:
        "ETL pipelines that normalize and load data outside the browser.",
      color: "#3776ab",
    },
  ],
};

export const footer: FooterProps = {
  id: "contact",
  logo: { src: "/img/Logo.svg", alt: "Ian Martinez logo" },
  // Mismo criterio que en Skills: el footer decide su tipografía y su
  // tinta desde el CSS, aquí solo viaja el texto.
  heading: {
    as: "h2",
    children: "Let's build something together",
  },
  description: {
    children:
      "Frontend developer based in México. Open to new projects and collaborations — pick a slice and say hi.",
  },
  // El botón grande junto al titular. Va al mismo correo que la insignia de
  // Gmail del anillo: una sola dirección de contacto, dos caminos hacia ella.
  action: { label: "Contact me", href: "mailto:ianhmv418@gmail.com" },
  links: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
  // Mismo fichero que el botón del hero: quien llega abajo sin haber pulsado
  // arriba lo vuelve a encontrar junto a las vías de contacto.
  resume: {
    label: "Download CV",
    href: "/Ian_Martinez_CV.pdf",
    download: true,
  },
  // Una esfera por red, sin repetir. Salen ordenadas en fila y a partir de
  // ahí las mueve quien visita la página: se arrastran, se empujan entre
  // ellas y rebotan contra las paredes del área.
  social: [
    { id: "gmail", href: "mailto:ianhmv418@gmail.com", label: "Gmail" },
    { id: "github", href: "https://github.com/IanHMV", label: "GitHub" },
    { id: "linkedin", href: "https://www.linkedin.com/in/ianhmv/", label: "LinkedIn" },
  ],
  // Todo el aspecto del área se ajusta desde aquí; borra la línea que no
  // quieras tocar y se queda con su default.
  orbs: {
    width: 380,      // ancho máximo del área en px (en móvil ocupa el 100%)
    height: 190,     // alto del área en px
    orbSize: 64,     // diámetro de cada esfera; si no caben, se encogen solas
    friction: 0.92,  // impulso que conserva entre fotogramas: 1 = no se para
    bounce: 0.62,    // rebote contra paredes y entre esferas; 0 = sin rebote
    hint: "Drag them around", // pista bajo el área; null la quita
  },
  copyright: "© 2026 Ian Martinez",
};
