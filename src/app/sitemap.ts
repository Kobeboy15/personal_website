import type { MetadataRoute } from "next";
import { getPositions, getProjects, getPosts } from "@/lib/data";

const SITE_URL = "https://www.kobemichael.dev";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [positions, projects, posts] = await Promise.all([
    getPositions(),
    getProjects(),
    getPosts(),
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

  const postPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/posts/${post.slug}`,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [
    {
      url: SITE_URL,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/posts`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...projectPages,
    ...experiencePages,
    ...postPages,
  ];
}
