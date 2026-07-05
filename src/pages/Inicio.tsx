import HeroSection from "../components/organism/HeroSection/HeroSection";
import AboutMe from "../components/organism/AboutMe/AboutMe";
import ProjectSection from "../components/organism/ProjectSection/ProjectSection";
import { hero, aboutMe, projectSection } from "./data";

const Inicio = () => {
  return (
    <>
      <HeroSection {...hero} />

      <AboutMe {...aboutMe} />

      <ProjectSection {...projectSection} />

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
