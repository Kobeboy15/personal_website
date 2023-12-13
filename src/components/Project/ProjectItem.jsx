export default function ProjectItem({ value }) {
  const { name, description, link, imageLink } = value;
  return (
    <div className="grid grid-cols-2 even:grid-flow-dense gap-8 items-center dark:text-white">
      <div>
        <a href={link} alt={link} target="__blank">
          <img src={imageLink} alt={`Link to ${name}`} />
        </a>
      </div>
      <div className="flex flex-col gap-3">
        <h2 className=" text-4xl font-bold">{name}</h2>
        <p className="text-sm leading-9 text-neutral-700 dark:text-neutral-400 text-justify">
          {description}
        </p>
      </div>
    </div>
  );
}
