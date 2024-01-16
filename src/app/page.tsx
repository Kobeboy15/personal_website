import HeroImage from "@/assets/Me.jpg";

export default async function Home() {
  return (
    <div className="mx-auto pt-16 max-w-5xl">
      <div className="mx-auto flex flex-col md:flex-row items-center gap-y-5">
        <div className="flex-1">
          <div className="lg:max-w-lg">
            <h2 className="text-base font-semibold leading-7 tracking-wide">
              Hi!👋 My name is
            </h2>
            <p className="mt-2 text-5xl font-bold tracking-tight">
              Kobe Michael
            </p>
            <p className="mt-6 text-md text-justify leading-8">
              Hello, I'm Kobe, a seasoned professional with over half a decade
              of experience in web design and development. You can call me a:
              <br />
              <ul className="list-disc mt-3 flex flex-col gap-2">
                {PositionTitles()}
                <li className="font-medium pl-2 ml-4">
                  Any position that fits the role
                </li>
              </ul>
              <br />I enjoy working on problems web and design related and
              always look forward to a challenge. 🚀
            </p>
          </div>
        </div>
        <img
          src={HeroImage.src}
          alt="Product screenshot"
          className="rounded-xl w-[400px] h-[500px] object-cover shadow-md border-slate-400 border"
        />
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
      {name}
    </li>
  ));
}
