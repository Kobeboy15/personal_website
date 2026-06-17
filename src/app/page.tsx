import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import RecommendationsSection from "@/components/sections/RecommendationsSection";
import ContactSection from "@/components/sections/ContactSection";
import { getPositions, getProjects, getRecommendations } from "@/lib/data";

export default async function Home() {
  const [positions, projects, recommendations] = await Promise.all([
    getPositions(),
    getProjects(),
    getRecommendations(),
  ]);

  return (
    <>
      <SiteHeader />
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <ExperienceSection positions={positions} />
        <ProjectsSection projects={projects} />
        <RecommendationsSection recommendations={recommendations} />
        <ContactSection />
      </main>
    </>
  );
}
