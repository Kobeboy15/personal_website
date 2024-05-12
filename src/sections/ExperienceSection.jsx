import { client } from "@/utils/configSanity";
import ExperienceItem from "@/components/Experience/ExperienceItem";

const ExperienceSection = async () => {
  async function getExperienceData() {
    let query = `*[_type == "experience" ]`;
    let data = await client.fetch(query);
    return data;
  }

  const experienceData = await getExperienceData();

  return (
    <section className="px-20 pt-[240px]">
      <div className="section-header flex flex-col gap-3 justify-center items-center mb-20">
        <p className="text-sm opacity-50">My experience</p>
        <h2 className="text-3xl font-medium text-[#AAA7E7]">
          Skills in Action
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-8 items-center max-w-screen-lg mx-auto">
        {experienceData &&
          experienceData
            ?.sort((a, b) => a.sortOrder - b.sortOrder)
            .map((item, index) => {
              return <ExperienceItem key={`workExp` + index} value={item} />;
            })}
      </div>
    </section>
  );
};

export default ExperienceSection;
