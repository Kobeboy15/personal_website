"use client";

import React, { useState, useEffect } from "react";

export default function Home() {
  const [currentTime, setCurrentTime] = useState<number>(-1);

  function handleGreeting() {
    if (currentTime < 12) {
      return "Good Morning.";
    } else if (currentTime < 18) {
      return "Good Afternoon.";
    } else {
      return "Good Evening.";
    }
  }

  useEffect(() => {
    setCurrentTime(new Date().getHours());
  }, []);

  return (
    <div className="h-full">
      <h2 className="text-[40px] font-semibold mb-[30px]">
        {handleGreeting()}
      </h2>
      <p className="text-justify text-md line leading-[45px] font-normal">
        I'm Kobe, a dedicated frontend developer with a love for creating
        stunning websites and problem solving. Join me on a journey where design
        and innovation come together seamlessly in the digital world.
      </p>
    </div>
  );
}
