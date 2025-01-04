import { Reveal } from "@/components/Reveal";
import { promises as fs } from "fs";
import Markdown from "markdown-to-jsx";
import path from "path";

export default async function Page({ params }: { params: { id: string } }) {
  const experiences = await fs.readFile(
    process.cwd() + "/src/app/positionsData.json",
    "utf8",
  );

  const dataExp = JSON.parse(experiences);
  const selectedExperience = dataExp.positions.find(
    (position: { id: string }) => position.id === params.id,
  );

  if (!selectedExperience) {
    return (
      <div>
        <h1>ID: {params.id}</h1>
        <br />
        <p>No matching experience found.</p>
      </div>
    );
  }

  const markdownFilePath = path.join(
    process.cwd(),
    "public/experiences",
    `${selectedExperience.markdown}.md`,
  );
  const sheepcrmContent = await fs.readFile(markdownFilePath, "utf8");

  return (
    <div>
      <Reveal delay={0.1} width="100%">
        <div className="flex justify-between">
          <div>
            <h1 className="flex sm:flex-row flex-col-reverse gap-5 items-start sm:items-center font-normal dark:text-white text-lg">
              {selectedExperience.company}
              {selectedExperience.date.includes("Present") && (
                <div className="flex items-center gap-1">
                  <i
                    title="Current Position"
                    className="material-symbols-outlined opacity-50 cursor-help"
                    style={{ fontSize: '16px' }}
                  >
                    work
                  </i>
                  <p className="opacity-50 text-sm">Current Position</p>
                </div>
              )}
            </h1>
            <p className="font-light">
              {selectedExperience.name}, &nbsp;
              <span className="opacity-60">{selectedExperience.type}</span>
            </p>
          </div>
        </div>
      </Reveal>
      <br />
      <Reveal delay={0.2}>
        <p className="text-sm tracking-wider font-light">
          {selectedExperience.date}
        </p>
      </Reveal>
      <Reveal delay={0.3} width="100%">
        <article className="min-w-full prose dark:prose-invert pt-6 font-light">
          <Markdown>{sheepcrmContent}</Markdown>
        </article>
      </Reveal>
    </div>
  );
}
