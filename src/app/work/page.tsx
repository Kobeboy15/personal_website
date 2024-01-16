import ExperienceItem from "@/components/Experience/ExperienceItem";
import { Reveal } from "@/components/Reveal";
import { client } from "@/utils/configSanity";

export default async function Work() {
  async function getExperienceData() {
    let query = `*[_type == "experience" ]`;
    let data = await client.fetch(query);
    return data;
  }

  const experienceData = await getExperienceData();

  return (
    <div className="flex items-center">
      <div className="flex flex-col justify-center relative dark:text-white mx-auto">
        <div id="work" className="mt-[40px]">
          <Reveal>
            <h2 className="text-2xl mb-14 dark:text-white font-semibold">
              Work Experience &nbsp;💻
            </h2>
          </Reveal>
          <Reveal>
            <div className="flex flex-col gap-7 mb-5">
              {experienceData
                ?.sort((a: any, b: any) => a.sortOrder - b.sortOrder)
                .map((item: any, index: number) => {
                  return (
                    <ExperienceItem key={`workExp` + index} value={item} />
                  );
                })}
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
