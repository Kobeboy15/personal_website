import HeroImage from "@/assets/Me.jpg";
import { Reveal } from "@/components/Reveal";

export default async function Home() {
  return (
    <div className="mx-auto max-w-5xl">
      <div className="mx-auto flex flex-col md:flex-row items-center gap-y-5">
        <div className="flex-1">
          <div className="lg:max-w-lg">
            <Reveal>
              <h2 className="text-base font-semibold leading-7 tracking-wide">
                Hi!👋 &nbsp;My name is
              </h2>
            </Reveal>
            <Reveal>
              <h1 className="mt-4 text-5xl font-bold">Kobe Michael</h1>
            </Reveal>
            <Reveal>
              <div className="mt-6 text-md text-justify leading-8">
                <p className="">
                  Hello, I'm Kobe, a seasoned professional with over half a
                  decade of experience in web design and development. You can
                  call me a:
                </p>
                <ul className="list-disc my-3 flex flex-col gap-2">
                  {PositionTitles()}
                </ul>
                <p>
                  I enjoy working on problems web and design related and always
                  look forward to a challenge. 🚀
                </p>
              </div>
            </Reveal>
          </div>
        </div>
        <Reveal>
          <div className="p-4">
            <img
              src={HeroImage.src}
              alt="Product screenshot"
              className="rounded-xl w-[400px] h-[500px] object-cover shadow-md border-zinc-800 border"
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
    <li key={`positionTitle${idx}`} className="font-medium pl-2 ml-4">
      <Reveal delay={0.1 * idx}>
        <p>{name}</p>
      </Reveal>
    </li>
  ));
}
