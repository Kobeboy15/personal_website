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
            <p className="text-justify dark:text-white font-normal leading-7 tracking-normal md:leading-10 md:tracking-wide text-sm md:text-base">
              I&apos;ve always had a creative background for as long as I can
              remember. From dealing with photography and film-making, to
              working on art vectors in Adobe Illustrator. I always had an eye
              for what I found was interesting, and trying to understand what
              made them interesting in the first place.
              <br />
              <br />
              As I got older, I eventually got my first exposure to Web
              Development and Design around my junior year of high school. We
              were tasked to design a personal web portfolio, using HTML and
              CSS. There I understood that there was a complexity behind all of
              this, dealing with numbers, percentages, and math, but I also
              could see there was an art-form with how you structure content and
              visualize it for a user. Presentation was essential in order for a
              web application to be usable by many. I immediately got hooked on
              that concept, and ever since then, I&apos;ve wanted to become a
              developer as my main job.
              <br />
              <br />
              Currently, I&apos;ve leaned into the position of being a Frontend
              Engineer, but I also pride myself on creating stunning and unique
              designs that cater to a client&apos;s want and needs for their
              application. I&apos;m always learning and always hungry for new
              opportunities.
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
            <p className="text-justify dark:text-white font-normal leading-7 tracking-normal md:leading-10 md:tracking-wide text-sm md:text-base">
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
