import { client } from "@/utils/configSanity";
import React from "react";
import DesignItem from "@/components/Design/DesignItem";
import { Reveal } from "@/components/Reveal";
import { PDFIcon } from "@/components/Logo";
import ProjectItem from "@/components/Project/ProjectItem";
import ProjectItemSmall from "@/components/Project/ProjectItemSmall";
import ExperienceItem from "@/components/Experience/ExperienceItem";

export default async function ExperiencePage() {
  return (
    <>
      <WorkSection />
      <ProjectSection />
      <DesignSection />
    </>
  );
}

async function WorkSection() {
  async function getExperienceData() {
    let query = `*[_type == "experience" ]`;
    let data = await client.fetch(query);
    return data;
  }

  const experienceData = await getExperienceData();

  return (
    <div id="work">
      <Reveal width="100%">
        <div className="mb-14 text-center">
          <h1 className="text-3xl w-full dark:text-white font-semibold mb-2">
            Experience &nbsp;💻
          </h1>
          <p>
            A list of companies and projects that I have been assigned to and
            have worked on.
          </p>
        </div>
      </Reveal>
      <Reveal>
        <div className="flex flex-col gap-7 mb-5">
          {experienceData &&
            experienceData
              ?.sort((a: any, b: any) => a.sortOrder - b.sortOrder)
              .map((item: any, index: number) => {
                return <ExperienceItem key={`workExp` + index} value={item} />;
              })}
        </div>
      </Reveal>
    </div>
  );
}

async function ProjectSection() {
  async function getProjectData() {
    let query = `*[_type == "project" ]`;
    let data = await client.fetch(query);
    return data;
  }

  const projectData = await getProjectData();

  return (
    <div id="projects" className="">
      <Reveal width="100%">
        <div className="mb-14 text-center">
          <h2 className="text-3xl mb-2 dark:text-white font-semibold">
            Projects &nbsp;🚧
          </h2>
          <p>
            My portfolio of standout projects, from Program Exercises to
            personal initiatives.
          </p>
        </div>
      </Reveal>
      <Reveal>
        <div className="flex flex-col gap-5">
          {projectData
            .filter((item: any) => item.featured)
            .sort((a: any, b: any) => a.sortOrder - b.sortOrder)
            .map((item: any) => {
              return <ProjectItem key={item._id} value={item} />;
            })}
        </div>
      </Reveal>
      <div className="my-14">
        <h2 className="my-4 text-lg font-semibold text-center">
          Other Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projectData
            .filter((item: any) => !item.featured)
            .sort((a: any, b: any) => a.sortOrder - b.sortOrder)
            .map((item: any) => {
              return <ProjectItemSmall key={item._id} value={item} />;
            })}
        </div>
      </div>
      <div className="text-center leading-8 max-w-md mx-auto py-8">
        If you want to see more projects that I&apos;ve previously worked on,
        you can check my Github account{" "}
        <a
          href="https://github.com/Kobeboy15?tab=repositories"
          target="_blank"
          className="border-b-[1.5px] border-gray-900 dark:border-white font-semibold"
        >
          here
        </a>
        .
      </div>
    </div>
  );
}

async function DesignSection() {
  async function getDesignData() {
    let query = `*[_type == "designs" ]{ "caption": design_image.caption, "imageUrl": design_image.asset->url }`;
    let data = await client.fetch(query);
    return data;
  }

  const designData = await getDesignData();

  return (
    <div id="projects" className="pb-20">
      <Reveal width="100%">
        <div className="mb-14 text-center">
          <h2 className="text-3xl mb-2 dark:text-white font-semibold">
            Designs &nbsp;🎨
          </h2>
          <p>
            A selection of my high-fidelity prototypes developed across various
            projects.
          </p>
        </div>
      </Reveal>
      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-3">
          {designData.map(
            (image: { imageUrl: string; caption: string }, index: number) => (
              <DesignItem key={`image${index}`} image={image} />
            )
          )}
        </div>
      </Reveal>
      <div className="max-w-screen-sm mx-auto">
        <Reveal>
          <div className="mt-20 text-center dark:text-white font-normal leading-10 tracking-normal md:tracking-wide text-sm md:text-[16px]">
            <p className="">
              Here are a few designs I&apos;ve had the opportunity to work on.
              While I can&apos;t share all here on my portfolio due to NDA
              restrictions, I&apos;d be happy to discuss them with you if you
              reach out.
              <br />
              <br />
              You can also explore the high-quality versions of my designs along
              with their detailed descriptions in the attached PDF below:
              <br />
              <br />
              <a
                title="Kobe Michael's Design Portfolio"
                className="font-semibold hover:text-yellow-500 dark:hover:text-yellow-200 inline-flex"
                href="/KobeMichael_DesignPortfolio_Full.pdf"
                download
              >
                <span className="flex items-center gap-2 underline">
                  Download my design portfolio (pdf &nbsp;14.6mb) <PDFIcon />
                </span>
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
