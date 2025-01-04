import { Reveal } from "./Reveal";
import { promises as fs } from "fs";
import Link from 'next/link';

export default function IntroSection() {
  return (
    <div className="py-20">
      <Reveal>
        <h1 className="pb-8 text-lg dark:text-white font-normal">
          Kobe Michael
        </h1>
      </Reveal>
      <div>
        <Reveal delay={0.1}>
          <p>
            Very Passionate and creative Web Developer, who enjoys creating{" "}
            <strong className="dark:text-white font-light">user-focused</strong>{" "}
            web experiences while finding the balance between functional and
            artistic.
          </p>
        </Reveal>
        <br />
        <Reveal delay={0.2}>
          <p>
            I previously collaborated with{" "}
            <span className="border-b border-zinc-500 dark:text-white font-light dark:hover:border-white transition duration-150">
              <a href="https://sheepcrm.co.uk/" target="_blank">
                SheepCRM
              </a>
            </span>{" "}
            and developed their Internal Event Calendar and Help Centre.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <ContentContainer />
        </Reveal>
        <Reveal delay={0.4}>
          <p>Now</p>
        </Reveal>
        <br />
        <Reveal delay={0.5}>
          <p>
            Actively seeking new opportunities to advance my career while
            enhancing my web development expertise and aspiring to become a
            full-stack developer through ongoing studies at{" "}
            <span className="border-b border-zinc-500 dark:text-white font-light dark:hover:border-white transition duration-150">
              <a href="https://langara.ca/" target="_blank">
                Langara College
              </a>
            </span>
            .
          </p>
        </Reveal>
        <br />
        <Reveal delay={0.6}>
          <p>
            I strive to challenge my creativity by tackling problems that
            emphasize usability and accessibility, crafting intuitive
            interfaces, and developing layouts that balance system constraints
            with high-quality UI and UX design.
          </p>
        </Reveal>
        <br />
        <Reveal delay={0.7}>
          <p>
            It’s a constantly evolving challenge—as new devices and systems
            emerge, interfaces and layouts must adapt and grow to meet changing
            needs.
          </p>
        </Reveal>
        <br />
        <br />
        <Reveal delay={0.8}>
          <h2>Connect</h2>
        </Reveal>
        <br />
        <Reveal delay={0.9}>
          <p>
            You can email me at{" "}
            <span className="border-b border-zinc-500 dark:text-white font-normal dark:hover:border-white transition duration-150">
              <a href="mailto:kobemichael15@gmail.com">
                kobemichael15@gmail.com
              </a>
            </span>
            .
          </p>
        </Reveal>
      </div>
    </div>
  );
}

async function ContentContainer() {
  const experiences = await fs.readFile(
    process.cwd() + "/public/positionsData.json",
    "utf8",
  );
  const dataExp = JSON.parse(experiences);

  const projects = await fs.readFile(
    process.cwd() + "/public/projectsData.json",
    "utf8",
  );
  const dataProj = JSON.parse(projects);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 py-12">
      <div>
        <h3 className="text-sm mb-7 text-black/70 dark:text-zinc-500 font-light">
          Experiences
        </h3>
        <div className="flex flex-col gap-7">
          {dataExp.positions.map((item: any, index: number) => {
            return (
              <div key={index}>
                <div className="flex items-center gap-2">
                <p className="border-b mb-1 leading-5 dark:text-white w-fit border-zinc-500 font-normal dark:hover:border-white transition duration-150">
                  <Link href={`/experience/${item.company.split(" ").join("")}`}>{item.company}</Link>
                </p>
                { index === 0 && <i title="Current Position" style={{ fontSize: '16px' }} className="material-symbols-outlined opacity-50 cursor-help">work</i> }
                </div>
                <p className="text-sm leading-6 text-black/70 dark:text-zinc-500 font-light">
                  {item.short_description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h3 className="text-sm mb-7 text-black/70 dark:text-zinc-500 font-light">
          Projects
        </h3>
        <div className="flex flex-col gap-7">
          {dataProj.projects.map((item: any, index: number) => {
            return (
              <div key={index}>
                <div className="flex items-center gap-2">
                <p className="border-b mb-1 leading-5 dark:text-white w-fit border-zinc-500 font-normal dark:hover:border-white transition duration-150">
                  <a href={item.link} target="_blank">
                    {item.name}
                  </a>
                </p>
                <i style={{ fontSize: '16px' }} className="material-symbols-outlined opacity-50">open_in_new</i>
                </div>
                <p className="text-sm leading-6 text-black/70 dark:text-zinc-500 font-light">
                  {item.short_description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
