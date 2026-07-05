import type { HeroSectionProps } from "../components/organism/HeroSection/HeroSection.types"
import type { AboutMeProps } from "../components/organism/AboutMe/AboutMe.types"
import type { ProjectSectionProps } from "../components/organism/ProjectSection/ProjectSection.types"

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