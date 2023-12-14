import { Reveal } from "@/components/Reveal";
import ExperienceItem from "../../components/Experience/ExperienceItem";
import ProjectItem from "../../components/Project/ProjectItem";
import { externalLink as ExternalLink } from "@/components/Logo";
import { client } from "@/utils/configSanity";

export default async function About() {
  async function getExperienceData() {
    let query = `*[_type == "experience" ]`;
    let data = await client.fetch(query);
    return data;
  }

  async function getProjectData() {
    let query = `*[_type == "project" ]`;
    let data = await client.fetch(query);
    return data;
  }

  const experienceData = await getExperienceData();
  const projectData = await getProjectData();

  return (
    <div className="flex flex-col gap-16">
      <div>
        <Reveal>
          <h2 className="text-3xl mb-4 dark:text-white">about 🧑🏻‍💻</h2>
        </Reveal>
        <Reveal>
          <div className="flex flex-col gap-10">
            <p className="text-justify dark:text-white font-normal leading-10 tracking-normal md:tracking-wide text-sm md:text-[16px]">
              I&apos;ve had a creative background from an early age, exploring
              photography, film-making, and art vectors in Adobe Illustrator. My
              interest in design led me to Web Development during high school,
              where I realized the blend of art and complexity in structuring
              content for user-friendly web applications. This sparked my
              passion for becoming a developer. Currently, as a Frontend
              Engineer, I combine technical expertise with a focus on creating
              captivating designs tailored to clients&apos; needs. Always eager
              for new opportunities, I&apos;m continuously learning and growing.
              <br />
              <br />
              You can read more about my biography, experience, skills,
              education and much more in the PDF attached bellow:
              <br />
              <br />
              <a
                className="font-medium hover:text-yellow-500 dark:hover:text-yellow-200"
                href="/KobeMichael_CV.pdf"
                download
              >
                My resume (pdf 684kb)
              </a>
            </p>
          </div>
        </Reveal>
      </div>
      <div>
        <Reveal>
          <h2 className="text-3xl mb-14 dark:text-white">work experience 💻</h2>
        </Reveal>
        <div className="flex flex-col gap-10 mb-5">
          {experienceData
            ?.sort((a: any, b: any) => a.sortOrder - b.sortOrder)
            .map((item: any, index: number) => {
              return (
                <Reveal key={item._id} delay={0.1 * index}>
                  <ExperienceItem value={item} />
                </Reveal>
              );
            })}
        </div>
      </div>
      <div>
        <Reveal>
          <h2 className="text-3xl mb-8 dark:text-white">projects ✏️</h2>
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
      <div>
        <Reveal delay={0.2}>
          <h2 className="text-3xl mb-4 dark:text-white">contact ✉️</h2>
        </Reveal>
        <div className="flex flex-col gap-10">
          <Reveal delay={0.4}>
            <p className="text-justify dark:text-white font-normal leading-10 tracking-normal md:tracking-wide text-sm md:text-[16px]">
              I&apos;m actively exploring opportunities to collaborate with
              companies, agencies, and individuals. My goal is to contribute my
              design experience to collectively solve real-business problems.
              I&apos;m looking for partnerships where we can optimize our
              respective expertise and knowledge.
              <br />
              <br />
              Feel free to reach out:
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="flex flex-col gap-6 dark:text-white">
              <a
                href="mailto: kobemichael15@gmail.com"
                className="hover:text-yellow-200"
              >
                <p>kobemichael15@gmail.com</p>
              </a>
              <a
                href="https://www.linkedin.com/in/kobe-michael/"
                target="_blank"
                rel="noreferrer"
                className="group hover:text-yellow-200"
              >
                <p className="flex items-center gap-1">
                  LinkedIn{" "}
                  <span className="group-hover:opacity-100 md:opacity-0 opacity-50 transition-opacity duration-200 ease-in-out">
                    <ExternalLink size={18} />
                  </span>
                </p>
              </a>
              <a
                href="https://github.com/Kobeboy15"
                target="_blank"
                rel="noreferrer"
                className="group hover:text-yellow-200"
              >
                <p className="flex items-center gap-1">
                  Github{" "}
                  <span className="group-hover:opacity-100 md:opacity-0 opacity-50 transition-opacity duration-200 ease-in-out">
                    <ExternalLink size={18} />
                  </span>
                </p>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
