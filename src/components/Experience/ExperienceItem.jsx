import Link from "next/link";

export default function ExperienceItem({ value }) {
  function formatDate(dateString) {
    const monthAbbreviations = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const dateObject = new Date(dateString);
    const monthAbbreviation = monthAbbreviations[dateObject.getMonth()];
    const year = dateObject.getFullYear().toString();
    const result = `${monthAbbreviation} ${year}`;
    return result;
  }

  return (
    <Link
      href={value.url}
      target="_blank"
      className="flex items-start justify-between text-sm shadow-md p-6 border transition-colors duration-300 bg-white/40 dark:border-zinc-800 dark:bg-zinc-800/40 dark:hover:border-zinc-600 rounded-sm"
    >
      <div className="flex-[1.5] md:flex-[2] dark:text-white">
        <div className="flex justify-between">
          <div className="grid gap-2">
            <h3 className="text-xl font-bold">{value.employer}</h3>
            <h4 className="text-base font-light">{value.position}</h4>
          </div>
          <p className="dark:text-white tracking-wide">
            {formatDate(value.startDate)}&nbsp;-&nbsp;{" "}
            {value.currentPosition ? "Present" : formatDate(value.endDate)}
          </p>
        </div>
        <p className="leading-7 mt-2 font-normal text-justify text-xs md:text-[14px] text-neutral-700 dark:text-neutral-400">
          {value.description}
        </p>
        <p className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-xs md:text-sm text-neutral-500 dark:text-neutral-200">
          {value.technologies.map((skill, index) => {
            return <span key={index}>{skill}</span>;
          })}
        </p>
      </div>
    </Link>
  );
}
