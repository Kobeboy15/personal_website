import Image from "next/image";
import { ExternalLink } from "../Logo";

export default function ProjectItem({ value }) {
  const { name, description, link, imageLink, technologies } = value;
  return (
    <a
      title={name}
      href={link}
      alt={link}
      target="__blank"
      className="grid relative items-center grid-cols-1 md:grid-cols-2 gap-10 justify-between text-sm shadow-md p-6 border transition-colors duration-300 bg-white/40 dark:border-zinc-800 dark:bg-zinc-800/40 dark:hover:border-zinc-600 rounded-sm"
    >
      <div className="absolute top-0 right-0 p-4 opacity-40">
        <ExternalLink size={20} />
      </div>
      <div className="w-full">
        <Image
          src={imageLink}
          alt={`Link to ${name}`}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-full"
        />
      </div>
      <div className="flex flex-col gap-3">
        <h2 className=" text-3xl font-bold">{name}</h2>
        <p className="text-sm leading-6  text-neutral-700 text-justify dark:text-neutral-400">
          {description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-xs md:text-sm text-neutral-500 dark:text-neutral-200">
          {technologies.map((item, index) => (
            <li key={`item${index}`}>#{item}</li>
          ))}
        </ul>
      </div>
    </a>
  );
}
