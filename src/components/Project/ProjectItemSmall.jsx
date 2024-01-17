export default function ProjectItemSmall({ value }) {
  const { name, description, technologies } = value;
  return (
    <div className="relative items-center justify-between text-sm shadow-md p-6 border transition-colors duration-300 bg-white/40 dark:border-zinc-800 dark:bg-zinc-800/40 dark:hover:border-zinc-600 rounded-sm">
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-3">
          <h2 className=" text-2xl font-bold">{name}</h2>
          <p className="text-sm leading-6  text-neutral-700 text-justify dark:text-neutral-400">
            {description}
          </p>
        </div>
        <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-xs md:text-sm text-neutral-500 dark:text-neutral-200">
          {technologies.map((item, index) => (
            <li key={`item${index}`}>#{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
