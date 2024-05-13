import { client } from "@/utils/configSanity";
import ExperienceItem from "@/components/Experience/ExperienceItem";
import { Reveal } from "@/components/Reveal";

const ExperienceSection = async () => {
  async function getExperienceData() {
    let query = `*[_type == "experience" ]`;
    let data = await client.fetch(query);
    return data;
  }

  const experienceData = await getExperienceData();

  return (
    <section className="lg:px-20 md:pt-[80px] pt-32">
      <Reveal width="100%">
        <div className="section-header flex flex-col gap-3 justify-center items-center mb-20">
          <p className="text-sm opacity-50">My experience</p>
          <h2 className="text-3xl font-medium text-primary">
            Skills in Action
          </h2>
        </div>
      </Reveal>
      <div className="grid grid-cols-1 gap-8 items-center max-w-screen-lg mx-auto">
        {experienceData &&
          experienceData
            ?.sort((a, b) => a.sortOrder - b.sortOrder)
            .map((item, index) => {
              return (
                <Reveal key={`workExp` + index} delay={0.1 * index}>
                  <ExperienceItem value={item} />
                </Reveal>
              );
            })}
      </div>
    </section>
  );
};

export default ExperienceSection;
