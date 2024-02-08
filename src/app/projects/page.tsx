import ProjectItem from "@/components/Project/ProjectItem";
import ProjectItemSmall from "@/components/Project/ProjectItemSmall";
import { Reveal } from "@/components/Reveal";
import { client } from "@/utils/configSanity";

export default async function Projects() {
  async function getProjectData() {
    let query = `*[_type == "project" ]`;
    let data = await client.fetch(query);
    return data;
  }

  const projectData = await getProjectData();

  return (
    <div className="flex items-center max-w-[940px] mx-auto">
      <div className="flex flex-col justify-center relative dark:text-white mx-auto">
        <div id="projects" className="pb-20">
          <Reveal>
            <div className="mb-14">
              <h2 className="text-3xl mb-2 dark:text-white font-semibold">
                Projects 🔨
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
          <div className="mt-14">
            <h2 className="my-4 text-lg font-semibold">Other Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {projectData
                .filter((item: any) => !item.featured)
                .sort((a: any, b: any) => a.sortOrder - b.sortOrder)
                .map((item: any) => {
                  return <ProjectItemSmall key={item._id} value={item} />;
                })}
            </div>
          </div>
        </div>
        <div className="text-center leading-8 max-w-md mx-auto pt-24">
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
    </div>
  );
}
