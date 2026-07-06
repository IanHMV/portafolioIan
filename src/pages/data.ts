import type { HeroSectionProps } from "../components/organism/HeroSection/HeroSection.types"
import type { AboutMeProps } from "../components/organism/AboutMe/AboutMe.types"
import type { ProjectSectionProps } from "../components/organism/ProjectSection/ProjectSection.types"
import type { ExperienceSectionProps } from "../components/organism/ExperienceSection/ExperienceSection.types";

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
      img: { src: "/img/image2.jpg", alt: "Portfolio website screenshot" },
      description: "Personal portfolio built with React, TypeScript and Tailwind CSS.",
      title: "Portafolio Web",
      footer: "2024 · React + TS",
      githubUrl: "https://github.com/IanHMV",
      backColor: "#151515",
    },
    {
      img: { src: "/img/laptop.png", alt: "Project two screenshot" },
      description: "Placeholder project — swap this card with a real one.",
      title: "Project Two",
      footer: "2024 · React",
      githubUrl: "https://github.com/IanHMV",
      backColor: "#0f2027",
    },
    {
      img: { src: "/img/imgAboutMe.svg", alt: "Project three screenshot" },
      description: "Placeholder project — swap this card with a real one.",
      title: "Project Three",
      footer: "2025 · TypeScript",
      githubUrl: "https://github.com/IanHMV",
      backColor: "#1e293b",
    },
    {
      img: { src: "/img/image2.jpg", alt: "Project four screenshot" },
      description: "Placeholder project — swap this card with a real one.",
      title: "Project Four",
      footer: "2025 · Node.js",
      githubUrl: "https://github.com/IanHMV",
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
        note: "Placeholder role. Swap with your real experience.",
        date: "2024 — present",
      },
      sheet: {
        fileNo: "Nº 01",
        heading: "Frontend Developer",
        period: "2024 — present · Remote",
        paragraphs: [
          "Placeholder description — replace with what you built, the stack you used and the impact it had.",
          "A second paragraph can cover collaboration, tooling or anything worth telling.",
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