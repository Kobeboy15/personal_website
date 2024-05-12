import { Reveal } from "./Reveal";

const linkStyles =
  "py-1 px-2 bg-cardColor hover:text-primary/70 duration-200 rounded-sm";

const SocialIsland = () => {
  return (
    <div className="grid gap-3 text-2xl text-primary px-24 fixed left-0 bottom-[30px]">
      <a
        href={`https://www.linkedin.com/in/kobe-michael/`}
        className={linkStyles}
      >
        <i className="uil uil-linkedin" />
      </a>
      <a href={`https://github.com/Kobeboy15/`} className={linkStyles}>
        <i className="uil uil-github" />
      </a>
      <a href={`mailto:kobemichael15@gmail.com`} className={linkStyles}>
        <i className="uil uil-at" />
      </a>
      <div className="mt-3 ml-[4px] w-[32px] h-[1.5px] bg-primary -rotate-90"></div>
    </div>
  );
};

export default SocialIsland;
