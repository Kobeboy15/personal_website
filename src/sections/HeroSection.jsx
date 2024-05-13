"use client";

import { Reveal } from "@/components/Reveal";
import TypewriterComponent from "../components/TypeWriterComponent";

const HeroSection = () => {
  return (
    <section className="pt-[80px] w-full flex flex-col gap-12">
      <div className="flex flex-col gap-3 mx-auto text-center">
        <Reveal width="100%">
          <p className="text-center">Hello, I`m</p>
        </Reveal>
        <Reveal>
          <h3 className="font-medium text-5xl">Kobe Michael</h3>
          <p className=" opacity-50">Frontend Developer</p>
        </Reveal>
      </div>
      <Reveal width="100%">
        <div className="flex justify-center gap-8">
          <a
            href="/KobeMichael_CV.pdf"
            download={"Kobe Michael CV"}
            className="border-primary border-2 py-3 px-4 rounded-lg text-primary-text dark:text-primary dark:hover:text-primary-text hover:bg-primary hover:text-primary-text transition-colors"
          >
            Download CV
          </a>
          <button
            onClick={() => {
              document
                .getElementById("about_me")
                .scrollIntoView({ behavior: "smooth" });
            }}
            className="border-primary border-2 py-3 px-4 rounded-lg bg-primary text-[#090D1F]"
          >
            About me
          </button>
        </div>
      </Reveal>
      <Reveal width="100%">
        <div className="flex items-end mt-12">
          <div className="bg-primary mx-auto px-4 rounded-tl-full rounded-tr-full">
            <img
              loading="lazy"
              src={"/me.png"}
              className="max-w-[300px]"
              alt="Picture of Me"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default HeroSection;
