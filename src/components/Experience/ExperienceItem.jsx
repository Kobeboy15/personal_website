"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ExperienceItem({ value }) {
  const [xPos, setXPos] = useState(0);
  const [yPos, setYPos] = useState(0);

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

  if (!value) return <div>Nothing</div>;

  return (
    <Link
      href={value.url}
      target="_blank"
      className={`flex items-start justify-between text-sm px-8 py-8 transition-colors bg-white dark:bg-cardColor rounded-lg shadow-md`}
    >
      <div className="flex-[1.5] md:flex-[2] dark:text-white">
        <div className="flex items-start justify-between flex-col-reverse md:flex-row">
          <div className="grid gap-0.5">
            <div>
              <h3 className="text-xl font-semibold text-primary">
                {value.position}
              </h3>
            </div>
            <h4 className="text-sm font-light dark:text-white/70">
              {value.employer}
            </h4>
          </div>
          <p className="dark:text-white md:text-right text-left mb-3 md:mb-0 whitespace-nowrap">
            {formatDate(value.startDate)}&nbsp;-&nbsp;{" "}
            {value.currentPosition ? "Present" : formatDate(value.endDate)}
          </p>
        </div>
        <p className="leading-8 pt-5 pb-2 mt-2 font-normal text-justify text-sm text-neutral-700 dark:text-white">
          {value.description}
        </p>
        <p className="mt-4 flex flex-wrap gap-x-2 gap-y-3 text-xs md:text-sm text-neutral-500 dark:text-neutral-200">
          {value &&
            value.technologies.map((skill, index) => {
              return (
                <span
                  key={`${skill}${index}`}
                  className="text-xs px-3 py-2 bg-primary text-primary-text rounded"
                >
                  {skill}
                </span>
              );
            })}
        </p>
      </div>
    </Link>
  );
}
