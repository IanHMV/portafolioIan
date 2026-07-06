import type { HeroSectionProps } from "../components/organism/HeroSection/HeroSection.types"
import type { AboutMeProps } from "../components/organism/AboutMe/AboutMe.types"
import type { ProjectSectionProps } from "../components/organism/ProjectSection/ProjectSection.types"
import type { ExperienceSectionProps } from "../components/organism/ExperienceSection/ExperienceSection.types";
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
    src: "/img/imgAboutMe.svg",
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
    "My everyday stack is TypeScript, React and Tailwind CSS. I structure my components with Atomic Design and document every piece in Storybook, so each atom, molecule and organism stays reusable and easy to test.",
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
      "Some of the things I've built while polishing my craft. Hover a card to pause the carousel and flip it over.",
    className: "text-gray-400 max-w-xl",
  },
  projects: [
    {
      img: { src: "/img/tecNew.png", alt: "Project - TecNews" },
      description: "This was my fist project. I lern to develop webpages with HTML and CSS",
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
      description: "Project that i develop for learn about Bootstrap",
      title: "Project Bootstrap",
      footer: "HTML + BOOTSTRAP",
      githubUrl: "https://github.com/IanHMV/cursoBoostrap",
      backColor: "#14532d",
    },
    {
      img: { src: "/img/laptop.png", alt: "Project five screenshot" },
      description: "Placeholder project — swap this card with a real one.",
      title: "Project Five",
      footer: "2025 · MongoDB",
      githubUrl: "https://github.com/IanHMV",
      backColor: "#3b0764",
    },
    {
      img: { src: "/img/imgAboutMe.svg", alt: "Project six screenshot" },
      description: "Placeholder project — swap this card with a real one.",
      title: "Project Six",
      footer: "2025 · Tailwind CSS",
      githubUrl: "https://github.com/IanHMV",
      backColor: "#7c2d12",
    },
    {
      img: { src: "/img/image2.jpg", alt: "Project seven screenshot" },
      description: "Placeholder project — swap this card with a real one.",
      title: "Project Seven",
      footer: "2025 · Storybook",
      githubUrl: "https://github.com/IanHMV",
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
    className: "text-gray-400 max-w-xl py-3",
    children:
      "A file cabinet of the places and projects that shaped me. Hover a folder to peek inside; click it to pull out the full sheet.",
  },
  folders: [
    {
      label: "Frontend Developer",
      color: "#8f2d56",
      preview: {
        code: "01A",
        note: "My first experience working whith a company",
        date: "2020 — My first job",
      },
      sheet: {
        fileNo: "Nº 01",
        heading: "Frontend Developer",
        period: "2020 — Past",
        paragraphs: [
          "This was my first experience working with a company that wanted to develop a website for its gelato store.",
          "I joined this company as part of my internship, where I was given the opportunity to design and develop its website to promote the business and help attract more customers.",
        ],
      },
    },
    {
      label: "Freelance Projects",
      color: "#e4572e",
      preview: {
        code: "02B",
        note: "Client work and personal commissions.",
        date: "2023 — 2024",
      },
      sheet: {
        fileNo: "Nº 02",
        heading: "Freelance Projects",
        period: "2023 — 2024 · Remote",
        paragraphs: [
          "Placeholder description — landing pages, small apps and everything in between.",
        ],
      },
    },
    {
      label: "Open Source",
      color: "#0f8a5f",
      preview: {
        code: "03C",
        note: "Contributions and experiments in public.",
        date: "2023",
      },
      sheet: {
        fileNo: "Nº 03",
        heading: "Open Source",
        period: "2023 · GitHub",
        paragraphs: [
          "Placeholder description — issues, pull requests and the lessons that came with them.",
        ],
      },
    },
    {
      label: "Studies & Certifications",
      color: "#2b4bdb",
      preview: {
        code: "04D",
        note: "Formal education and self-directed learning.",
        date: "2021 — 2023",
      },
      sheet: {
        fileNo: "Nº 04",
        heading: "Studies & Certifications",
        period: "2021 — 2023",
        paragraphs: [
          "Placeholder description — degrees, courses and certifications that back your craft.",
        ],
      },
    },
    {
      label: "First Steps in Code",
      color: "#5b2a86",
      preview: {
        code: "05E",
        note: "Where it all started.",
        date: "2020",
      },
      sheet: {
        fileNo: "Nº 05",
        heading: "First Steps in Code",
        period: "2020",
        paragraphs: [
          "Placeholder description — the first project, the first bug and the moment you got hooked.",
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