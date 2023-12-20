import { Reveal } from "@/components/Reveal";

export default function ProjectItem({ value }) {
  const { name, description, link, imageLink } = value;
  return (
    <div className="md:flex even:flex-row-reverse lg:even:text-justify gap-8 items-center dark:text-white">
      <Reveal>
        <div className="flex-1">
          <a title={name} href={link} alt={link} target="__blank">
            <img src={imageLink} alt={`Link to ${name}`} />
          </a>
        </div>
      </Reveal>
      <Reveal>
        <div className="flex flex-1 flex-col gap-3">
          <h2 className=" text-4xl font-bold">{name}</h2>
          <p className="text-sm leading-9 text-neutral-700 dark:text-neutral-400 tracking-wider">
            {description}
          </p>
        </div>
      </Reveal>
    </div>
  );
}
