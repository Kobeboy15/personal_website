"use client";

import { Reveal } from "@/components/Reveal";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Home() {
  const [currentTime, setCurrentTime] = useState<number>(-1);
  const [showMore, setShowMore] = useState(false);

  function handleGreeting() {
    if (currentTime < 12) {
      return "Good Morning. ☀️";
    } else if (currentTime < 18) {
      return "Good Afternoon. ⛅";
    } else {
      return "Good Evening. 🌙";
    }
  }

  useEffect(() => {
    setCurrentTime(new Date().getHours());
  }, []);

  return (
    <div style={{ minHeight: "inherit" }} className="flex items-center">
      <div
        style={{ minHeight: "calc(100vh - 420px)" }}
        className="flex flex-col justify-center relative dark:text-white"
      >
        <Reveal>
          <h1 className=" text-3xl md:text-[40px] font-semibold md:mb-[42px] mb-6">
            {handleGreeting()}
          </h1>
        </Reveal>
        <Reveal delay={0.5}>
          <p className="text-justify leading-[45px] text-sm md:text-[1.25rem] tracking-wide font-normal mb-16 md:mb-0">
            Hello, I&apos;m Kobe, a seasoned professional with over half a
            decade of experience in design and development. You can call me a
            web designer designer, front-end developer, software engineer, or
            any title that fits the job. I enjoy working on problems web and
            design related and always look forward to a challenge.
          </p>
        </Reveal>
        {!showMore && (
          <div className="md:pt-20 static bottom-0 w-full hover:scale-105 transition-all ease-in-out duration-300">
            <Reveal width="100%" delay={1.3}>
              <Link href="/about">
                <div className="w-full text-center text-sm md:text-base flex items-end justify-center cursor-pointer hover:text-yellow-500 dark:hover:text-yellow-200">
                  <p>Click to learn more</p>
                </div>
              </Link>
            </Reveal>
          </div>
        )}
      </div>
      {/* {showMore && (
        <div className="flex flex-col justify-center transition-all ease-in"></div>
      )} */}
    </div>
  );
}
