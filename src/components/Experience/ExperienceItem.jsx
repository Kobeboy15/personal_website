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
    const result = `${monthAbbreviation}-${year}`;
    return result;
  }

  return (
    <div className="flex items-start justify-between text-sm">
      <p className="flex-1 text-lg">
        {formatDate(value.startDate)}&nbsp;-&nbsp;{" "}
        {value.currentPosition ? "Present" : formatDate(value.endDate)}
      </p>
      <div className="flex-[2]">
        <h4 className="text-lg text-neutral-300">
          <span className="font-semibold text-white">{value.position}</span> -
          {value.employer}
        </h4>
        <p className="text-neutral-400 leading-7 mt-2 font-normal">
          {value.description}
        </p>
        <p className="mt-3 flex flex-wrap gap-x-5 gap-y-3 text-neutral-500">
          {value.technologies.map((skill, index) => {
            return <span key={index}>{skill}</span>;
          })}
          {/* TS • Next • Nest • Stitches • Mobx • Turbo */}
        </p>
      </div>
    </div>
  );
}
