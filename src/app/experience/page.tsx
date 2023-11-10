import ExperienceItem from "../../components/Experience/ExperienceItem";
import { client } from "@/utils/configSanity";

export default async function Experience() {
  async function getData() {
    const query = `*[_type == "experience" ]`;
    const data = await client.fetch(query);
    return data;
  }

  const experienceData = await getData();

  return (
    <div className="max-w-[940px] m-auto my-10">
      <h2 className="text-3xl mb-14">Work experience</h2>
      <div className="flex flex-col gap-10">
        {experienceData
          ?.sort((a, b) => a.sortOrder - b.sortOrder)
          .map((item, index) => {
            return <ExperienceItem key={index} value={item} />;
          })}

        {/* <ExperienceItem /> */}
      </div>
    </div>
  );
}
