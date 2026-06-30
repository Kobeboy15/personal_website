import SiteHeader from "@/components/SiteHeader";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import RecommendationsSection from "@/components/sections/RecommendationsSection";
import PostsSection from "@/components/sections/PostsSection";
import ContactSection from "@/components/sections/ContactSection";
import { getPositions, getProjects, getRecommendations, getPosts } from "@/lib/data";

export default async function Home() {
  const [positions, projects, recommendations, posts] = await Promise.all([
    getPositions(),
    getProjects(),
    getRecommendations(),
    getPosts(),
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
        <PostsSection posts={posts} />
        <ContactSection />
      </main>
    </>
  );
}
