export default function ProjectItemSmall({ value }) {
  const { name, description, technologies } = value;
  return (
    <div className="relative items-center justify-between text-sm p-8 h-full w-full transition-colors bg-white shadow-md dark:bg-cardColor rounded-lg">
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-col gap-3">
          <h2 className=" text-xl font-semibold text-primary">{name}</h2>
          <p className="text-sm leading-8 text-neutral-700 dark:text-white">
            {description}
          </p>
        </div>
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
    </div>
  );
}
