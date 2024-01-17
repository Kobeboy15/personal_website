"use client";
import React from "react";
import ExperienceItem from "@/components/Experience/ExperienceItem";
import { Reveal } from "@/components/Reveal";
import { client } from "@/utils/configSanity";

export default async function Work() {
  async function getExperienceData() {
    let query = `*[_type == "experience" ]`;
    let data = await client.fetch(query);
    return data;
  }

  const experienceData = await getExperienceData();

  return (
    <div className="flex items-center max-w-[940px] mx-auto">
      <div className="flex flex-col justify-center relative dark:text-white mx-auto">
        <div id="work">
          <Reveal>
            <div className="mb-14">
              <h1 className="text-3xl dark:text-white font-semibold mb-2">
                Work Experience &nbsp;💻
              </h1>
              <p>
                A list of companies and projects that I have been assigned to
                and have worked on.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="flex flex-col gap-7 mb-5">
              {experienceData &&
                experienceData
                  ?.sort((a: any, b: any) => a.sortOrder - b.sortOrder)
                  .map((item: any, index: number) => {
                    return (
                      <ExperienceItem key={`workExp` + index} value={item} />
                    );
                  })}
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
