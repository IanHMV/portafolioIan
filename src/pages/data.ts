
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
    children: "Ian Martinez",
    size: "text-5xl",
    className: "sm:text-6xl md:text-7xl",
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
  coverImage: {
    src: "/img/space.gif",
    alt: "Scenic cover for the about me section",
  },
  coverTitle: {
    children: "About Me",
    size: "text-5xl",
    className: "sm:text-6xl md:text-7xl",
  },
  heading: {
    children: "Hi, I'm Ian",
    size: "text-3xl",
    className: "md:text-4xl",
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
  className: "bg-zinc-950",
  heading: {
    children: "Projects",
    as: "h2",
    className: "text-white font-bold tracking-tight",
    size: "text-4xl",
  },
  description: {
    children:
      "Some of the things I've created while perfecting my technique, studying, or working. Hover over a card to pause the carousel and flip it.",
    className: "text-gray-400 max-w-xl",
  },
  projects: [
    {
      img: { src: "/img/tecNew.png", alt: "Project - TecNews" },
      description: "This was my fist project. I lern to develop webpages with HTML and CSS.",
      title: "TecNews",
      footer: "CSS + HTML",
      githubUrl: "https://github.com/IanHMV/TecNews",
      backColor: "#151515",
    },
    {
      img: { src: "/img/finestra.png", alt: "Project - Finestra" },
      description: "Project for a small Gelato shop made during my internship.",
      title: "Finestra Website",
      footer: "HTML + CSS",
      githubUrl: "https://github.com/IanHMV/Gelato",
      backColor: "#0f2027",
    },
    {
      img: { src: "/img/testpiscometrico.png", alt: "Project - TestPsicometrico" },
      description: "Project developed for one of my classes in my university.",
      title: "TestPsicometrico",
      footer: "HTML + CSS",
      githubUrl: "https://github.com/IanHMV/TestPsicometrico",
      backColor: "#1e293b",
    },
    {
      img: { src: "/img/bootstrap.png", alt: "Project - Bootstrap course" },
      description: "Project that i develop for learn about Bootstrap.",
      title: "Project Bootstrap",
      footer: "HTML + BOOTSTRAP",
      githubUrl: "https://github.com/IanHMV/cursoBoostrap",
      backColor: "#14532d",
    },
    {
      img: { src: "/img/sesaecol.png", alt: "Sesaecol" },
      description: "This was the first project that i develop for my work in government.",
      title: "Sesaecol",
      footer: "REACT + TAILWIND CSS",
      githubUrl: "https://sesaecol-gob.com/",
      backColor: "#3b0764",
    },
    {
      img: { src: "/img/pdecolima.png", alt: "Pdecolima" },
      description: "This was my second project, i developed this page for centralize the others projects that i run up in my work.",
      title: "PDECOLIMA",
      footer: "REACT + TS + DOCKER",
      githubUrl: "https://pdecolima.mx/",
      backColor: "#7c2d12",
    },
    {
      img: { src: "/img/s5.png", alt: "System 5" },
      description: "I developed this system for my work, It's a project that helps you report a public official.",
      title: "System 5 for reporting public official",
      footer: "REACT + TS + DOCKER",
      githubUrl: "https://pdecolima.mx/s5",
      backColor: "#134e4a",
    },
  ],
};

export const experienceSection: ExperienceSectionProps = {
  className: "bg-zinc-950 min-h-svh",
  title: {
    as: "h2",
    size: "text-4xl",
    className: "text-white font-bold tracking-tight",
    children: "Experience",
  },
  description: {
    as: "p",
    size: "text-base",
    weight: "font-normal",
    className: "text-gray-400 max-w-xl py-3 whitespace-pre-line",
    children:
      "A file cabinet of the places and projects that shaped me.\n - Do click for open a folder.\n - Press again for close the folder.\n - Press and hold the click button to drag the folder.",
  },
  folders: [
    {
      label: "Frontend Developer",
      color: "#8f2d56",
      preview: {
        code: "01A",
        note: "Finestra Gelato",
        date: "2020 — My first job",
      },
      sheet: {
        fileNo: "Nº 01",
        heading: "Freelance Developer",
        period: "2020 — Past",
        paragraphs: [
          "This was my first experience working with a company that wanted to develop a website for its gelato store.",
          "I joined this company as part of my internship, where I was given the opportunity to design and develop its website to promote the business and help attract more customers.",
        ],
      },
    },
    {
      label: "Fontend Developer",
      color: "#e4572e",
      preview: {
        code: "02B",
        note: "TECNM Colima",
        date: "2023 — 2024",
      },
      sheet: {
        fileNo: "Nº 02",
        heading: "Institude Project",
        period: "2023 — 2024",
        paragraphs: [
          "I worked for my academic institude for developing a system for psicometric tests. I made the frontend for this page and i worked with another partners and they made the backend in that moment.",
          "It was a good first experience working with another people, and i learned to use github deeper."
        ],
      },
    },
    {
      label: "Frontend Developer",
      color: "#0f8a5f",
      preview: {
        code: "03C",
        note: "FORENTEC.",
        date: "2024-2025",
      },
      sheet: {
        fileNo: "Nº 03",
        heading: "FORENTEC",
        period: "2024",
        paragraphs: [
          "I worked with another partner in a company of cybersecurity, we develop web pages for companies and government. We developed pages for voting systems, data graphing and localitation of specific zones.",
          "I managed the graphication of the differents zones, i made that with json files and google."

        ],
      },
    },
    {
      label: "Pdecolima Manager",
      color: "#2b4bdb",
      preview: {
        code: "04D",
        note: "Manager of different systems for the National Digital Platform",
        date: "2025 — 2026",
      },
      sheet: {
        fileNo: "Nº 04",
        heading: "Government EmployeePlatform",
        period: "2025 — 2026",
        paragraphs: [
          "I worked in government managment the diferent systems of the National Digital Plataform. I worked with a physical server and run up different servers there for my government institute, some systems are from the National Digital Plataform and i only adapt this systems. And others systems i developed them from scratch.",
        ],
      },
    },
  ],
};

export const skillSection: SkillsSectionProps = {
  className: "bg-zinc-950",
  title: {
    as: "h2",
    size: "text-4xl",
    className: "text-white font-bold tracking-tight",
    children: "My Skills",
  },
  description: {
    as: "p",
    size: "text-base",
    weight: "font-normal",
    className: "text-gray-400 max-w-xl py-3",
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
  heading: {
    as: "h2",
    size: "text-2xl",
    className: "text-white font-bold tracking-tight",
    children: "Let's build something together",
  },
  description: {
    as: "p",
    size: "text-base",
    weight: "font-normal",
    className: "text-gray-400",
    children:
      "Frontend developer based in México. Open to new projects and collaborations — pick a slice and say hi.",
  },
  links: [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
  // El disco se parte en tantas porciones como redes haya aquí.
  social: [
    { id: "gmail", href: "mailto:ianvazquez418@gmail.com", label: "Gmail" },
    { id: "github", href: "https://github.com/IanHMV", label: "GitHub" },
    { id: "linkedin", href: "https://www.linkedin.com/in/ianhmv/", label: "LinkedIn" },
  ],
  // Todo el aspecto del disco se ajusta desde aquí; borra la línea que no
  // quieras tocar y se queda con su default.
  dial: {
    size: 270,        // diámetro en px (en móvil se autolimita a 40vw)
    tilt: 60,         // inclinación: 0 = de frente, 70 = casi de canto
    spin: 60,         // gira el disco sobre su propio plano
    startAngle: 0,    // rota solo el reparto de porciones
    thickness: 30,    // grosor extruido, en px
    rise: 20,         // cuánto sube la porción en hover
    push: 0,         // cuánto se aparta del centro en hover
    iconRadius: 0.62, // posición del icono, en fracción del radio
    floating: true,   // animación de flotado
  },
  copyright: "© 2026 Ian Martinez",
};