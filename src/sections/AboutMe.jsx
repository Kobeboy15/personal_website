import { Reveal } from "@/components/Reveal";

const AboutMe = () => {
  return (
    <section id="about_me" className="lg:px-20 px-8 md:py-[240px] py-32">
      <Reveal width="100%">
        <div className="section-header flex flex-col gap-3 justify-center items-center mb-20">
          <p className="text-sm opacity-50">My intro</p>
          <h2 className="text-3xl font-medium text-primary">About Me</h2>
        </div>
      </Reveal>
      <Reveal>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-center">
          <div className="bg-primary rounded-3xl lg:max-w-[80%] justify-self-center">
            <img
              loading="lazy"
              src={`/me_2.png`}
              alt="A second picture of me, VERY charming"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
          <div className="flex flex-col gap-10 items-center xl:items-start">
            <ul className="flex gap-4 items-center lg:items-start justify-center lg:justify-start">
              <li className="lg:w-32 lg:h-28 w-24 h-24 dark:bg-cardColor bg-white shadow-md rounded-lg flex flex-col gap-0.5 justify-center items-center">
                <div className="flex items-center justify-center gap-1 text-primary">
                  <p className="lg:text-4xl text-[32px] font-semibold">6</p>
                  <p className="font-medium">yrs+</p>
                </div>
                <p className="text-xs">Developer</p>
              </li>
              <li className="lg:w-32 lg:h-28 w-24 h-24 dark:bg-cardColor bg-white shadow-md rounded-lg flex flex-col gap-0.5 justify-center items-center">
                <div className="flex items-center justify-center gap-1 text-primary">
                  <p className="lg:text-4xl text-[32px] font-semibold">8</p>
                  <p className="font-medium">yrs+</p>
                </div>
                <p className="text-xs">Designer</p>
              </li>
              <li className="lg:w-32 lg:h-28 w-24 h-24 dark:bg-cardColor bg-white shadow-md rounded-lg flex flex-col gap-0.5 justify-center items-center">
                <div className="flex items-center justify-center gap-1 text-primary">
                  <p className="lg:text-4xl text-[32px] font-semibold">26</p>
                  <p className="font-medium">yrs+</p>
                </div>
                <p className="text-xs">Awesomeness</p>
              </li>
            </ul>
            <p className="text-justify text-base md:text:xs leading-8">
              As a{" "}
              <span className="font-semibold text-primary">
                Frontend Developer
              </span>
              &nbsp;and&nbsp;
              <span className="font-semibold text-primary">UI/UX Designer</span>
              , I specialize in creating web pages with intuitive and engaging
              interfaces. With years of experience in the field, I have a proven
              track record of delivering projects that not only meet but exceed
              client expectations.
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
