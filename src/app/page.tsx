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
    <div className="max-w-[940px] m-auto my-10">
      <h2 className="text-[40px] font-semibold mb-[30px]">
        {handleGreeting()}
      </h2>
      {/* <p className="text-justify text-xl line leading-[45px] font-normal">
        I'm Kobe, a collaborative frontend developer with 5 years of experience.
        My strength lies not only in my proficiency with frameworks like Vue.js,
        React.js, and Nuxt.js/Next.js but also in my commitment to teamwork. I'm
        passionate about creating exceptional user interfaces and seamless
        experiences, and I'm here to be a key player in your projects. I work
        closely with design teams, using tools like Figma, AdobeXD, Photoshop,
        and Illustrator to transform concepts into pixel-perfect prototypes. My
        adaptability shines when customizing designs to meet specific project
        requirements. Staying updated with industry trends is a must for me, and
        I thrive on effective communication and collaboration. I'm ready to
        contribute my design expertise to your team, working hand in hand to
        achieve outstanding results.
      </p> */}
    </div>
  );
}
