import { Reveal } from "./Reveal";

export default function FooterMenu() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="dark:bg-[#AAA7E7] text-[#090D1F]/80">
      <div className="pt-16 mb-10 text-center mx-auto flex justify-center">
        <Reveal>
          <div id="contact" className="px-6">
            <h2 className="text-2xl text-center font-bold mb-4 w-full">
              Lets stay in touch &nbsp;✉️
            </h2>
            <div className="flex flex-col gap-10">
              <p className="text-center max-w-screen-sm font-normal tracking-wider leading-6 text-xs sm:text-sm text-[#090D1F]/70">
                I&apos;m up for collabs with companies and cool folks to tackle
                real-world challenges together. Let&apos;s combine our skills
                for awesome results!
                <br />
                <br />
                <a
                  href="mailto: kobemichael15@gmail.com"
                  className="font-semibold border-b border-[#090D1F]/70 hover:text-[#090D1F] hover:border-[#090D1F] transition-colors duration-150"
                >
                  Send me an email
                </a>{" "}
                and I&apos;ll get back to you as soon as I can!
              </p>
            </div>
          </div>
        </Reveal>
      </div>
      <div className="text-sm flex flex-col gap-1.5 items-center justify-center px-6 m-auto md:min-h-[140px]">
        <div className="text-[12px] font-medium md:block hidde text-neutral-800/60 dark:text-[#090D1F]/70">
          <p className="tracking-widest">
            Built with{" "}
            <a href="https://nextjs.org/" target="_blank">
              NextJs
            </a>{" "}
            and{" "}
            <a href="https://tailwindcss.com/" target="_blank">
              TailwindCSS
            </a>
          </p>
        </div>
        <h3 className="text-xs font-light text-neutral-800/60 dark:text-[#090D1F]/50">
          © {currentYear} Kobe Michael
        </h3>
      </div>
    </footer>
  );
}
