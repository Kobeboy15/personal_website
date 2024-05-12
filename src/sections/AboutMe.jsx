import { Reveal } from "@/components/Reveal";

const AboutMe = () => {
  return (
    <section id="about_me" className="px-20 pt-[240px]">
      <Reveal width="100%">
        <div className="section-header flex flex-col gap-3 justify-center items-center mb-20">
          <p className="text-sm opacity-50">My intro</p>
          <h2 className="text-3xl font-medium text-primary">About Me</h2>
        </div>
      </Reveal>
      <Reveal>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-center">
          <div className="bg-primary rounded-3xl max-w-[80%] justify-self-center">
            <img
              loading="lazy"
              src={`/me_2.png`}
              alt="A second picture of me, VERY charming"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
          <div className="flex  flex-col gap-10 items-center xl:items-start">
            <ul className="flex gap-4 items-center lg:items-start justify-center lg:justify-start">
              <li className="w-32 h-28 dark:bg-cardColor bg-white shadow-md rounded-lg flex flex-col gap-0.5 justify-center items-center">
                <div className="flex items-center justify-center gap-1 text-primary">
                  <p className="text-4xl font-semibold">6</p>
                  <p className="font-medium">yrs+</p>
                </div>
                <p className="text-xs">Developer</p>
              </li>
              <li className="w-32 h-28 dark:bg-cardColor bg-white shadow-md rounded-lg flex flex-col gap-0.5 justify-center items-center">
                <div className="flex items-center justify-center gap-1 text-primary">
                  <p className="text-4xl font-semibold">8</p>
                  <p className="font-medium">yrs+</p>
                </div>
                <p className="text-xs">Designer</p>
              </li>
              <li className="w-32 h-28 dark:bg-cardColor bg-white shadow-md rounded-lg flex flex-col gap-0.5 justify-center items-center">
                <div className="flex items-center justify-center gap-1 text-primary">
                  <p className="text-4xl font-semibold">2k</p>
                  <p className="font-medium">+</p>
                </div>
                <p className="text-xs">Commits</p>
              </li>
            </ul>
            <p className="text-justify leading-7">
              As a Frontend Developer and UI/UX Designer, I specialize in
              creating web pages with intuitive and engaging interfaces. With
              years of experience in the field, I have a proven track record of
              delivering projects that not only meet but exceed client
              expectations.
            </p>
            <a
              href="mailto:kobemichael15@gmail.com"
              className="w-fit border-primary border-2 py-3 px-4 rounded-lg bg-primary text-[#090D1F]"
            >
              Contact me
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default AboutMe;
