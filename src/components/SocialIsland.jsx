const linkStyles =
  "py-1 px-2 dark:bg-cardColor bg-white shadow hover:text-primary/70 duration-200 rounded-sm";

const SocialIsland = () => {
  return (
    <div className="grid gap-3 text-2xl dark:text-primary text-primary-text/70 px-24 fixed left-0 bottom-[30px]">
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
      <div className="mt-3 ml-[4px] w-[32px] h-[1.5px] dark:bg-primary bg-primary-text/50 -rotate-90"></div>
    </div>
  );
};

export default SocialIsland;
