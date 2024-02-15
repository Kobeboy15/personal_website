import { Reveal } from "@/components/Reveal";
import { PDFIcon } from "@/components/Logo";

export default async function About() {
  return (
    <div className="flex items-center max-w-screen-md mx-auto">
      <div className="flex flex-col justify-center relative dark:text-white mx-auto">
        <Reveal>
          <img
            src="https://images.pexels.com/photos/9519006/pexels-photo-9519006.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="wow"
          />
        </Reveal>
        <div className="About">
          <Reveal width="100%">
            <h2 className="text-3xl text-center dark:text-white font-semibold mt-8 mb-4">
              About Me. 🧑🏻‍💻
            </h2>
          </Reveal>
          <Reveal>
            <div className="flex flex-col gap-10">
              <p className="text-center dark:text-white font-normal leading-10 tracking-normal md:tracking-wide text-sm md:text-[14px]">
                I&apos;ve nurtured a lifelong passion for creativity, exploring
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
                captivate and cater to clients&apos; unique needs. My enthusiasm
                for new opportunities fuels a perpetual cycle of learning and
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
                  className="font-semibold inline-block hover:text-yellow-500 dark:hover:text-yellow-200"
                  href="/KobeMichael_CV.pdf"
                  download
                >
                  <span className="flex items-center gap-2 underline">
                    Download my resume (pdf 684kb) <PDFIcon />
                  </span>
                </a>
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
