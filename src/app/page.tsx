"use client";

import HeroImage from "@/assets/Me.jpg";
import { Reveal } from "@/components/Reveal";
import Image from "next/image";
import TypeWriterComponent from "@/components/TypeWriterComponent";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="mx-auto flex flex-col md:flex-row items-center gap-y-5">
        <div className="flex-1">
          <div className="lg:max-w-md">
            <h2 className="text-base text-center md:text-left font-semibold leading-7 tracking-wide">
              Hi!👋 &nbsp;My name is
            </h2>
            <h1 className="mt-4 text-5xl font-bold text-center md:text-left">
              Kobe Michael
            </h1>
            <div className="mt-6 grid gap-5 text-center text-sm md:text-md md:text-justify leading-8 tracking-wide">
              <p className="">
                I`m a Web Developer and Web Designer with more than half a
                decade of experience. I enjoy creating mockups, wireframes,
                prototypes, designing user experiences and interfaces, and
                bringing them to life.
              </p>
              <TypeWriterComponent />
              <p className="tracking-wide">
                I enjoy working on problems web and design related and always
                look forward to a challenge. &nbsp;🚀
              </p>
            </div>
          </div>
        </div>
        <Reveal>
          <div className="p-4">
            <Image
              src={HeroImage.src}
              alt="Product screenshot"
              className="rounded-xl w-[400px] h-[500px] object-cover shadow-md border-zinc-800 border"
              width={400}
              height={500}
              loading="lazy"
            />
          </div>
        </Reveal>
      </div>
    </div>
  );
}
