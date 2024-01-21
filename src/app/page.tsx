"use client";

import HeroImage from "@/assets/Me.jpg";
import { Reveal } from "@/components/Reveal";
import Image from "next/image";
import TypeWriterComponent from "@/components/TypeWriterComponent";

export default async function Home() {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="mx-auto flex flex-col md:flex-row items-center gap-y-5">
        <div className="flex-1">
          <div className="lg:max-w-md">
            <h2 className="text-base font-semibold leading-7 tracking-wide">
              Hi!👋 &nbsp;My name is
            </h2>
            <h1 className="mt-4 text-5xl font-bold">Kobe Michael</h1>
            <div className="mt-6 grid gap-5 text-sm md:text-md text-justify leading-8">
              <p className="">
                Hello, I&apos;m Kobe, a seasoned professional with over half a
                decade of experience in web design and development.
              </p>
              <TypeWriterComponent />
              <p>
                I enjoy working on problems web and design related and always
                look forward to a challenge. 🚀
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
