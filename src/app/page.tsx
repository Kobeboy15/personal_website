import HeroImage from "@/assets/Me.jpg";
import { Reveal } from "@/components/Reveal";
import Image from "next/image";

export default async function Home() {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="mx-auto flex flex-col md:flex-row items-center gap-y-5">
        <div className="flex-1">
          <div className="lg:max-w-lg">
            <h2 className="text-base font-semibold leading-7 tracking-wide">
              Hi!👋 &nbsp;My name is
            </h2>
            <h1 className="mt-4 text-5xl font-bold">Kobe Michael</h1>
            <div className="mt-6 text-sm md:text-md text-justify leading-8">
              <p className="">
                Hello, I&apos;m Kobe, a seasoned professional with over half a
                decade of experience in web design and development. You can call
                me a:
              </p>
              <ul className="my-3 justify-center md:justify-start grid grid-cols-2 md:grid-cols-1 gap-2">
                {PositionTitles()}
              </ul>
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

function PositionTitles() {
  const positions = [
    "Web Designer",
    "UI/UX Engineer",
    "Frontend Developer",
    "Software Engineer",
  ];

  return positions.map((name, idx) => (
    <li
      key={`positionTitle${idx}`}
      className="font-medium px-4 py-2 bg-white/40 dark:border-zinc-800 dark:bg-zinc-800/40 transition-colors dark:hover:border-zinc-600 border"
    >
      <Reveal delay={idx * 0.2}>
        <p className="text-xs md:text-sm">{name}</p>
      </Reveal>
    </li>
  ));
}
