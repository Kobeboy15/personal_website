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
    <>
      <h2 className="text-3xl mb-14">Work experience</h2>
      <div className="flex flex-col gap-10">
        {experienceData
          ?.sort((a: any, b: any) => a.sortOrder - b.sortOrder)
          .map((item: any) => {
            return <ExperienceItem key={item._id} value={item} />;
          })}
      </div>
    </>
  );
}
