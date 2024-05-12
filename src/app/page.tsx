import SocialIsland from "../components/SocialIsland";
import HeroSection from "../sections/HeroSection";
import AboutMe from "../sections/AboutMe";
import ExperienceSection from "../sections/ExperienceSection";
import ProjectsSection from "../sections/ProjectsSection";
import DesignSection from "../sections/DesignSection";

import ScrollTop from "../components/ScrollTop";

export default function Home() {
  return (
    <main className="px-24 max-w-screen-xl mx-auto">
      <SocialIsland />
      <ScrollTop />
      <HeroSection />
      <AboutMe />
      <ExperienceSection />
      <ProjectsSection />
      <DesignSection />
    </main>
  );
}
