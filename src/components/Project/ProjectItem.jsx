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
      className="grid relative items-center grid-cols-1 md:grid-cols-2 lg:gap-10 justify-between text-sm shadow-md p-8 transition-colors bg-white dark:bg-cardColor rounded-lg"
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
          loading="lazy"
        />
      </div>
      <div className="flex flex-col gap-3">
        <div>
          <p className="my-0 py-0 mb-1 text-[12px] text-white/40">
            Featured Project
          </p>
          <h2 className=" text-xl font-semibold text-primary">{name}</h2>
        </div>
        <p className="md:text-sm text-xs lg:text-justify py-0.5 leading-8 text-neutral-700 dark:text-white">
          {description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-x-2 gap-y-3 text-xs md:text-sm text-neutral-500 dark:text-neutral-200">
          {technologies.map((item, index) => (
            <li
              key={`item${index}`}
              className="text-xs px-3 py-2 bg-primary text-primary-text rounded"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
}
