import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";
import CurrentlyBuilding from "@/components/sections/CurrentlyBuilding";
import MoreProjects from "@/components/sections/MoreProjects";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Achievements from "@/components/sections/Achievements";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      {/* <CurrentlyBuilding /> */}
      <TechStack />
      <Projects />
      <MoreProjects />
      <Experience />
      <Education />
      {/* <Achievements /> */}
      <Contact />
    </>
  );
}
