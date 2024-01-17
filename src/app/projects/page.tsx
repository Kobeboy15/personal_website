import ProjectItem from "@/components/Project/ProjectItem";
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
                Projects 🚧
              </h2>
              <p>
                My portfolio of standout projects, from Program Exercises to
                personal initiatives.
              </p>
            </div>
          </Reveal>
          <div className="flex flex-col gap-12">
            {projectData
              ?.sort((a: any, b: any) => b.sortOrder - a.sortOrder)
              .map((item: any, index: number) => {
                return (
                  // <Reveal key={item._id} delay={1 * index}>
                  <ProjectItem key={item._id} value={item} />
                  // </Reveal>
                );
              })}
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
