import { Reveal } from "@/components/Reveal";
import { externalLink as ExternalLink } from "@/components/Logo";
import { PDFIcon } from "@/components/Logo";

export default async function About() {
  return (
    <div className="flex items-center max-w-[940px] mx-auto">
      <div className="flex flex-col justify-center relative dark:text-white mx-auto">
        <Reveal>
          <img
            src="https://images.pexels.com/photos/9519006/pexels-photo-9519006.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="wow"
            className="mb-6"
          />
        </Reveal>
        <div className="About">
          <Reveal>
            <h2 className="text-3xl dark:text-white font-semibold mb-4">
              About 🧑🏻‍💻
            </h2>
          </Reveal>
          <Reveal>
            <div className="flex flex-col gap-10">
              <p className="text-justify dark:text-white font-normal leading-10 tracking-normal md:tracking-wide text-sm md:text-[16px]">
                I've nurtured a lifelong passion for creativity, exploring
                realms like film-making, photography, and crafting art vectors
                in Adobe Illustrator. Constantly seeking avenues to flex my
                creative muscles, I stumbled upon the dynamic universe of Web
                Development. Here, I found my love for sculpting intricate
                shapes, playing with on-screen elements, and mastering the art
                of layout design. Delving into the intricacies of User
                Experience and crafting User Interfaces became not just a skill,
                but a calling.
                <br />
                <br />
                As a Frontend Engineer today, I seamlessly blend technical
                prowess with a dedicated focus on fashioning designs that
                captivate and cater to clients' unique needs. My enthusiasm for
                new opportunities fuels a perpetual cycle of learning and
                growth, ensuring I stay at the forefront of the ever-evolving
                landscape of design and development.
                <br />
                <br />
                You can read more about my biography, experience, skills,
                education and much more in the PDF attached bellow:
                <br />
                <br />
                <a
                  title="Kobe Michael's Resume"
                  className="font-medium hover:text-yellow-500 dark:hover:text-yellow-200"
                  href="/KobeMichael_CV.pdf"
                  download
                >
                  <span className="flex items-center gap-2">
                    My resume (pdf 684kb) <PDFIcon />
                  </span>
                </a>
              </p>
            </div>
          </Reveal>
        </div>
        {/* <div id="contact">
          <Reveal delay={0.2}>
            <h2 className="text-2xl dark:text-white font-semibold mb-4">
              Contact ✉️
            </h2>
          </Reveal>
          <div className="flex flex-col gap-10">
            <Reveal delay={0.4}>
              <p className="text-justify dark:text-white font-normal leading-10 tracking-normal md:tracking-wide text-sm md:text-[16px]">
                I&apos;m actively exploring opportunities to collaborate with
                companies, agencies, and individuals. My goal is to contribute
                my design experience to collectively solve real-business
                problems. I&apos;m looking for partnerships where we can
                optimize our respective expertise and knowledge.
                <br />
                <br />
                Feel free to reach out:
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="flex flex-col gap-6 dark:text-white">
                <a
                  title="kobemichael15@gmail.com"
                  href="mailto: kobemichael15@gmail.com"
                  className="hover:text-yellow-200"
                >
                  <p>kobemichael15@gmail.com</p>
                </a>
                <a
                  title="Kobe Michael's LinkedIn"
                  href="https://www.linkedin.com/in/kobe-michael/"
                  target="_blank"
                  rel="noreferrer"
                  className="group hover:text-yellow-200"
                >
                  <p className="flex items-center gap-1">
                    LinkedIn{" "}
                    <span className="group-hover:opacity-100 md:opacity-0 opacity-50 transition-opacity duration-200 ease-in-out">
                      <ExternalLink size={18} />
                    </span>
                  </p>
                </a>
                <a
                  title="Kobe Michael's GitHub"
                  href="https://github.com/Kobeboy15"
                  target="_blank"
                  rel="noreferrer"
                  className="group hover:text-yellow-200"
                >
                  <p className="flex items-center gap-1">
                    Github{" "}
                    <span className="group-hover:opacity-100 md:opacity-0 opacity-50 transition-opacity duration-200 ease-in-out">
                      <ExternalLink size={18} />
                    </span>
                  </p>
                </a>
              </div>
            </Reveal>
          </div>
        </div> */}
      </div>
    </div>
  );
}
