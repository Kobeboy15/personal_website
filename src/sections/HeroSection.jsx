const HeroSection = () => {
  return (
    <section className="pt-[80px] w-full flex flex-col gap-12">
      <div className="flex flex-col gap-3 mx-auto text-center">
        <p>Hello, I'm</p>
        <h3 className="font-medium text-5xl">Kobe Michael</h3>
        <p className=" opacity-50">Frontend Developer</p>
      </div>
      <div className="flex justify-center gap-8">
        <button className="border-primary border-2 py-3 px-4 rounded-lg text-primary hover:bg-primary hover:text-primary-text transition-colors">
          Download CV
        </button>
        <button className="border-primary border-2 py-3 px-4 rounded-lg bg-primary text-[#090D1F]">
          About me
        </button>
      </div>
      <div className="flex items-end mt-12">
        <div className="bg-primary mx-auto px-4 rounded-tl-full rounded-tr-full">
          <img loading="lazy" src={"/me.png"} className="max-w-[300px]" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
