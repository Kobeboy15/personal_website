"use client";
import Link from "next/link";
import { Github, LinkedIn, MailIcon } from "./Logo";
import { Reveal } from "./Reveal";
import { externalLink as ExternalLink } from "@/components/Logo";

export default function FooterMenu() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="dark:from-zinc-800/90 bg-gradient-to-t to-transparent">
      <div className=" pt-28 mb-24 text-center max-w-lg mx-auto">
        <div id="contact">
          <h2 className="text-2xl text-center dark:text-white font-bold mb-4 w-full">
            Lets stay in touch ✉️
          </h2>
          <div className="flex flex-col gap-10">
            <p className="text-center dark:text-white/80 font-normal tracking-wide leading-6 text-sm">
              I'm up for collabs with companies and cool folks to tackle
              real-world challenges together. Let's combine our skills for
              awesome results!
              <br />
              <br />
              <a
                href="mailto: kobemichael15@gmail.com"
                className="dark:text-white underline"
              >
                Send me an email
              </a>{" "}
              and I'll get back to you as soon as I can!
            </p>
          </div>
        </div>
      </div>
      <div className="text-sm flex items-center justify-between max-w-7xl px-6 m-auto min-h-[140px]">
        <Reveal delay={0.9}>
          <Link href="/">
            <h3 className="text-xs md:text-sm text-neutral-800 dark:text-neutral-300 font-semibold">
              © {currentYear} kobe michael
            </h3>
          </Link>
        </Reveal>
        <Reveal delay={0.9}>
          <div className="flex items-center gap-5">
            <a
              title="kobemichael15@gmail.com"
              href="mailto: kobemichael15@gmail.com"
              className="dark:hover:text-white text-neutral-800  dark:text-neutral-300 transition-colors"
            >
              <MailIcon size={20} />
            </a>
            <a
              title="Kobe Michael's LinkedIn"
              href="https://www.linkedin.com/in/kobe-michael/"
              target="_blank"
              rel="noreferrer"
              className="dark:hover:text-white text-neutral-800  dark:text-neutral-300 transition-colors"
            >
              <LinkedIn size={20} />
            </a>
            <a
              title="Kobe Michael's GitHub"
              href="https://github.com/Kobeboy15"
              target="_blank"
              rel="noreferrer"
              className="dark:hover:text-white text-neutral-800  dark:text-neutral-300 transition-colors"
            >
              <Github size={20} />
            </a>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
