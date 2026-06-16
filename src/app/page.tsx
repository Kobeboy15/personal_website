import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import { getPositions, getProjects } from "@/lib/data";

export default async function Home() {
  const [positions, projects] = await Promise.all([
    getPositions(),
    getProjects(),
  ]);

  return (
    <>
      <SiteHeader />
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <ExperienceSection positions={positions} />
        <ProjectsSection projects={projects} />
        <ContactSection />
      </main>
    </>
  );
}
