import HeroSection from "../components/organism/HeroSection/HeroSection";
import AboutMe from "../components/organism/AboutMe/AboutMe";
import ProjectSection from "../components/organism/ProjectSection/ProjectSection";
import ExperienceSection from "../components/organism/ExperienceSection/ExperienceSection";
import SkillsSection from "@/components/organism/SkillsSection/SkillsSection";
import Footer from "@/components/organism/Footer/Footer";
import { hero, aboutMe, projectSection, experienceSection, skillSection, footer } from "./data";

const Inicio = () => {
  return (
    <>
      <HeroSection {...hero} />

      <AboutMe {...aboutMe} />

      <ProjectSection {...projectSection} />

      <ExperienceSection {...experienceSection} />

      <SkillsSection {...skillSection} />

      <Footer {...footer} />
    </>
  );
};

export default Inicio;
