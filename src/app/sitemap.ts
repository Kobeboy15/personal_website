import type { MetadataRoute } from "next";
import { getPositions } from "@/lib/data";

const SITE_URL = "https://www.kobemichael.dev";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const positions = await getPositions();

  const experiencePages: MetadataRoute.Sitemap = positions.map((position) => ({
    url: `${SITE_URL}/experience/${position.id}`,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [
    {
      url: SITE_URL,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...experiencePages,
  ];
}
