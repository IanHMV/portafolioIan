import HeroSection from "@/components/organism/HeroSection/HeroSection";
import AboutMe from "@/components/organism/AboutMe/AboutMe";
import ProjectSection from "@/components/organism/ProjectSection/ProjectSection";
import ExperienceSection from "@/components/organism/ExperienceSection/ExperienceSection";
import SkillsSection from "@/components/organism/SkillsSection/SkillsSection";
import Footer from "@/components/organism/Footer/Footer";
import Navbar from "@/components/organism/Navbar/Navbar";
import {
  navbar,
  hero,
  aboutMe,
  projectSection,
  experienceSection,
  skillSection,
  footer,
} from "@/content/data";

/*
 * La home. Es el mismo árbol que montaba `pages/Inicio.tsx` con react-router;
 * lo que cambia es quién lo monta: aquí no hay router de cliente, la ruta la
 * define la posición del archivo (`app/page.tsx` = "/") y Next lo renderiza
 * durante el build para escribir el HTML en `out/index.html`.
 */
const Home = () => {
  return (
    <>
      {/* Va el primero del documento aunque en pantalla flote encima de
          todo: así es lo primero que encuentra el tabulador y lo primero
          que anuncia un lector de pantalla, que es lo que se espera de la
          navegación de un sitio. Dónde se pinta lo decide su CSS. */}
      <Navbar {...navbar} />

      <HeroSection {...hero} />

      <AboutMe {...aboutMe} />

      <ProjectSection {...projectSection} />

      <ExperienceSection {...experienceSection} />

      <SkillsSection {...skillSection} />

      <Footer {...footer} />
    </>
  );
};

export default Home;
