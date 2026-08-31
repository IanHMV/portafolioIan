
import type { HeroSectionProps } from "../components/organism/HeroSection/HeroSection.types"
import type { AboutMeProps } from "../components/organism/AboutMe/AboutMe.types"
import type { ProjectSectionProps } from "../components/organism/ProjectSection/ProjectSection.types"
import type { ExperienceSectionProps } from "../components/organism/ExperienceSection/ExperienceSection.types";
import type { FooterProps } from "../components/organism/Footer/Footer.types";
import type { SkillsSectionProps } from "@/components/organism/SkillsSection/SkillsSection.types";

export const hero: HeroSectionProps = {
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
    "My everyday stack is TypeScript, React and Tailwind CSS. I structure my components with Atomic Design and document in storybook, so each atom, molecule and organism stays reusable and easy to test.",
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
  heading: {
    children: "Projects",
    as: "h2",
    className: "text-white font-bold tracking-tight",
    size: "text-4xl",
  },
  description: {
    children:
      "Some of the things I've created while perfecting my technique, studying, or working. Hover over a card to pause the carousel.",
    className: "text-gray-400 max-w-xl",
  },
  projects: [
    {
      img: { src: "/img/tecNew.webp", alt: "Project - TecNews" },
      description: "This was my fist project. I lern to develop webpages with HTML and CSS.",
      title: "TecNews",
      footer: "CSS + HTML",
      githubUrl: "https://github.com/IanHMV/TecNews",
      backColor: "#151515",
    },
    {
      img: { src: "/img/finestra.webp", alt: "Project - Finestra" },
      description: "Project for a small Gelato shop made during my internship.",
      title: "Finestra Website",
      footer: "HTML + CSS",
      githubUrl: "https://github.com/IanHMV/Gelato",
      backColor: "#0f2027",
    },
    {
      img: { src: "/img/testpiscometrico.webp", alt: "Project - TestPsicometrico" },
      description: "Project developed for one of my classes in my university.",
      title: "TestPsicometrico",
      footer: "HTML + CSS",
      githubUrl: "https://github.com/IanHMV/TestPsicometrico",
      backColor: "#1e293b",
    },
    {
      img: { src: "/img/bootstrap.webp", alt: "Project - Bootstrap course" },
      description: "Project that i develop for learn about Bootstrap.",
      title: "Project Bootstrap",
      footer: "HTML + BOOTSTRAP",
      githubUrl: "https://github.com/IanHMV/cursoBoostrap",
      backColor: "#14532d",
    },
    {
      img: { src: "/img/sesaecol.webp", alt: "Sesaecol" },
      description: "This was the first project that i develop for my work in government.",
      title: "Sesaecol",
      footer: "REACT + TAILWIND CSS",
      githubUrl: "https://sesaecol-gob.com/",
      backColor: "#3b0764",
    },
    {
      img: { src: "/img/pdecolima.webp", alt: "Pdecolima" },
      description: "This was my second project, i developed this page for centralize the others projects that i run up in my work.",
      title: "PDECOLIMA",
      footer: "REACT + TS + DOCKER",
      githubUrl: "https://pdecolima.mx/",
      backColor: "#7c2d12",
    },
    {
      img: { src: "/img/s5.webp", alt: "System 5" },
      description: "I developed this system for my work, It's a project that helps you report a public official.",
      title: "System 5 for reporting public official",
      footer: "REACT + TS + DOCKER",
      githubUrl: "https://pdecolima.mx/s5",
      backColor: "#134e4a",
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
  entries: [
    {
      code: "01",
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
    {
      code: "02",
      title: "Institute Project",
      summary: "Frontend of a psychometric testing system, alongside a backend team",
      date: "2023 — 2024",
      detail: {
        heading: "Institute Project",
        period: "2023 — 2024 · TECNM Colima",
        paragraphs: [
          "I worked for my academic institude for developing a system for psicometric tests. I made the frontend for this page and i worked with another partners and they made the backend in that moment.",
          "It was a good first experience working with another people, and i learned to use github deeper.",
        ],
      },
    },
    {
      code: "03",
      title: "Frontend Developer",
      summary: "Voting systems, data graphing and zone mapping for a cybersecurity firm",
      date: "2024 — 2025",
      detail: {
        heading: "FORENTEC",
        period: "2024 — 2025 · Cybersecurity",
        paragraphs: [
          "I worked with another partner in a company of cybersecurity, we develop web pages for companies and government. We developed pages for voting systems, data graphing and localitation of specific zones.",
          "I managed the graphication of the differents zones, i made that with json files and google.",
        ],
      },
    },
    {
      code: "04",
      title: "Platform Manager",
      summary: "Running the National Digital Platform systems on the state server",
      date: "2025 — 2026",
      detail: {
        heading: "Government Employee",
        period: "2025 — 2026 · PDECOLIMA",
        paragraphs: [
          "I worked in government managment the diferent systems of the National Digital Plataform. I worked with a physical server and run up different servers there for my government institute, some systems are from the National Digital Plataform and i only adapt this systems. And others systems i developed them from scratch.",
        ],
      },
    },
  ],
};

export const skillSection: SkillsSectionProps = {
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
  // Las redes se reparten en ángulos iguales por el anillo.
  social: [
    { id: "gmail", href: "mailto:ianhmv418@gmail.com", label: "Gmail" },
    { id: "github", href: "https://github.com/IanHMV", label: "GitHub" },
    { id: "linkedin", href: "https://www.linkedin.com/in/ianhmv/", label: "LinkedIn" },
  ],
  // Todo el aspecto del anillo se ajusta desde aquí; borra la línea que no
  // quieras tocar y se queda con su default.
  ring: {
    size: 340,        // diámetro de la órbita en px (en móvil se autolimita a 62vw)
    badgeSize: 76,    // diámetro de cada insignia en px
    minBadges: 12,    // insignias mínimas: las 3 redes se repiten hasta llegar
    startAngle: 0,    // rota el reparto sin mover nada más
    spinDuration: 48, // segundos por vuelta; 0 deja el anillo quieto
    reverse: false,   // true = sentido antihorario
  },
  copyright: "© 2026 Ian Martinez",
};
