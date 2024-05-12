const AboutMe = () => {
  return (
    <section className="px-20 pt-[240px]">
      <div className="section-header flex flex-col gap-3 justify-center items-center mb-20">
        <p className="text-sm opacity-50">My intro</p>
        <h2 className="text-3xl font-medium text-primary">About Me</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="bg-primary rounded-3xl max-w-[70%] justify-self-center">
          <img
            loading="lazy"
            src={`/me_2.png`}
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
        <div className="flex  flex-col gap-10 items-center lg:items-start">
          <ul className="flex gap-4 items-center lg:items-start justify-center lg:justify-start">
            <li className="w-32 h-32 bg-cardColor rounded-lg flex flex-col gap-1 justify-center items-center">
              <i className="uil uil-suitcase"></i>
              <p>6</p>
              <p>Experience</p>
            </li>
            <li className="w-32 h-32 bg-cardColor rounded-lg flex flex-col gap-1 justify-center items-center">
              <i className="uil uil-suitcase"></i>
              <p>6</p>
              <p>Experience</p>
            </li>
            <li className="w-32 h-32 bg-cardColor rounded-lg flex flex-col gap-1 justify-center items-center">
              <i className="uil uil-suitcase"></i>
              <p>6</p>
              <p>Experience</p>
            </li>
          </ul>
          <p className="text-justify">
            Frontend Developer, I create web peages with UI / UX user interface,
            I have years of experience and many clients are happy with the
            projects carried out.
          </p>
          <button className="w-fit border-primary border-2 py-3 px-4 rounded-lg bg-primary text-[#090D1F]">
            Contact me
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
