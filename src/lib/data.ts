import "server-only";

import { promises as fs } from "fs";
import path from "path";

export interface Position {
  id: string;
  date: string;
  name: string;
  type: string;
  company: string;
  short_description: string;
  markdown: string;
}

export interface Project {
  name: string;
  link: string;
  short_description: string;
}

export interface Recommendation {
  name: string;
  title: string;
  /** Employer, rendered after the title. Omit for multi-role titles. */
  company?: string;
  /** Short relationship label rendered as a chip, e.g. "Direct manager", "Teammate" */
  relationship: string;
  /** Display date, e.g. "Nov 2025" */
  date: string;
  /** Quote body, one entry per paragraph. */
  quote: string[];
}

const PUBLIC_DIR = path.join(process.cwd(), "public");

export async function getPositions(): Promise<Position[]> {
  const raw = await fs.readFile(
    path.join(PUBLIC_DIR, "positionsData.json"),
    "utf8",
  );
  return (JSON.parse(raw).positions ?? []) as Position[];
}

export async function getProjects(): Promise<Project[]> {
  const raw = await fs.readFile(
    path.join(PUBLIC_DIR, "projectsData.json"),
    "utf8",
  );
  return (JSON.parse(raw).projects ?? []) as Project[];
}

export async function getRecommendations(): Promise<Recommendation[]> {
  const raw = await fs.readFile(
    path.join(PUBLIC_DIR, "recommendationsData.json"),
    "utf8",
  );
  return (JSON.parse(raw).recommendations ?? []) as Recommendation[];
}

export async function getPositionById(
  id: string,
): Promise<Position | undefined> {
  const positions = await getPositions();
  return positions.find((p) => p.id === id);
}

export async function getExperienceMarkdown(slug: string): Promise<string> {
  return fs.readFile(
    path.join(PUBLIC_DIR, "experiences", `${slug}.md`),
    "utf8",
  );
}
