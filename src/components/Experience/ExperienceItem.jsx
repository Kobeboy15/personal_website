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
    <div className="flex items-start justify-between text-sm gap-5 lg:gap-0 md:gap-0">
      <p className="flex-1 pt-1 md:pt-0 text-xs md:text-lg">
        {formatDate(value.startDate)}&nbsp;-&nbsp;{" "}
        {value.currentPosition ? "Present" : formatDate(value.endDate)}
      </p>
      <div className="flex-[1.5] md:flex-[2]">
        <h4 className="text-sm md:text-lg text-neutral-300 flex flex-col md:flex-row md:gap-2">
          <span className="font-semibold text-white">{value.position}</span>
          <span className="hidden md:block">-</span>
          {value.employer}
        </h4>
        <p className="text-neutral-400 leading-7 mt-2 font-normal text-xs md:text-[14px]">
          {value.description}
        </p>
        <p className="mt-4 flex flex-wrap gap-x-5 gap-y-3 text-neutral-500 text-xs md:text-sm">
          {value.technologies.map((skill, index) => {
            return <span key={index}>{skill}</span>;
          })}
        </p>
      </div>
    </div>
  );
}
