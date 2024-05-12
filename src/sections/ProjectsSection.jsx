import { client } from "@/utils/configSanity";
import ProjectItem from "@/components/Project/ProjectItem";
import ProjectItemSmall from "@/components/Project/ProjectItemSmall";
import { Reveal } from "@/components/Reveal";

const ProjectsSections = async () => {
  async function getProjectData() {
    let query = `*[_type == "project" ]`;
    let data = await client.fetch(query);
    return data;
  }

  const projectData = await getProjectData();

  return (
    <section className="px-20 pt-[240px]">
      <Reveal width="100%">
        <div className="section-header flex flex-col gap-3 justify-center items-center mb-20">
          <p className="text-sm opacity-50">My projects</p>
          <h2 className="text-3xl font-medium text-[#AAA7E7]">
            Portfolio Highlights
          </h2>
        </div>
      </Reveal>
      <div className="grid gap-8">
        <div className="grid grid-cols-1 gap-8 items-center max-w-screen-lg mx-auto">
          {projectData
            .filter((item) => item.featured)
            .sort((a, b) => a.sortOrder - b.sortOrder)
            .map((item) => {
              return (
                <Reveal width="100%">
                  <ProjectItem key={item._id} value={item} />
                </Reveal>
              );
            })}
        </div>
        <div className="grid grid-cols-2 gap-8 items-center max-w-screen-lg mx-auto">
          {projectData
            .filter((item) => !item.featured)
            .sort((a, b) => a.sortOrder - b.sortOrder)
            .map((item, index) => {
              return (
                <Reveal delay={0.1 * index} className="h-full">
                  <ProjectItemSmall key={item._id} value={item} />
                </Reveal>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSections;
