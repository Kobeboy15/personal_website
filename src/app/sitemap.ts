import type { MetadataRoute } from "next";
import { getPositions, getProjects } from "@/lib/data";

const SITE_URL = "https://www.kobemichael.dev";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [positions, projects] = await Promise.all([
    getPositions(),
    getProjects(),
  ]);

  const experiencePages: MetadataRoute.Sitemap = positions.map((position) => ({
    url: `${SITE_URL}/experience/${position.id}`,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${SITE_URL}/projects/${project.id}`,
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  return [
    {
      url: SITE_URL,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projectPages,
    ...experiencePages,
  ];
}
