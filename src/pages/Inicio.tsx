import HeroSection from "../components/organism/HeroSection/HeroSection";
import AboutMe from "../components/organism/AboutMe/AboutMe";
import ProjectSection from "../components/organism/ProjectSection/ProjectSection";
import ExperienceSection from "../components/organism/ExperienceSection/ExperienceSection";
import SkillsSection from "@/components/organism/SkillsSection/SkillsSection";
import { hero, aboutMe, projectSection, experienceSection, skillSection } from "./data";

const Inicio = () => {
  return (
    <>
      <HeroSection {...hero} />

      <AboutMe {...aboutMe} />

      <ProjectSection {...projectSection} />

      <ExperienceSection {...experienceSection} />

      <SkillsSection {...skillSection} />

      {/* Sección destino del botón "Contact me". Placeholder mientras
          construimos el organismo de contacto. */}
      <section
        id="contact"
        className="flex min-h-svh items-center justify-center bg-black"
      >
        <p className="text-gray-600 text-lg">Contact — coming soon</p>
      </section>
    </>
  );
};

export default Inicio;
