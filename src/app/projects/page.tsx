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
        <div id="projects" className="mt-[40px]">
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
      </div>
    </div>
  );
}
