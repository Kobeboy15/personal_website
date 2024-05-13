"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function NavMenu() {
  const [currentTheme, setCurrentTheme] = useState("");

  function handleTheme() {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      setCurrentTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setCurrentTheme("dark");
    }
  }

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setCurrentTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setCurrentTheme("light");
    }
  }, []);

  return (
    <div className="flex items-center justify-between m-auto lg:px-24 px-8 lg:py-[40px] py-5 sticky top-0 shadow-md xl:shadow-none bg-slate-100 dark:bg-background-dark z-10 xl:bg-transparent">
      <Link href="/">
        <h3
          className={`text-xl font-semibold dark:text-primary text-primary-text`}
        >
          Kobe Michael
        </h3>
      </Link>
      <div className="flex flex-row-reverse gap-5">
        <button
          onClick={handleTheme}
          className="dark:text-white dark:hover:text-primary flex justify-center text-2xl"
        >
          {currentTheme !== "dark" ? (
            <i className="uil uil-sun" />
          ) : (
            <i className="uil uil-moon" />
          )}
        </button>
      </div>
    </div>
  );
}
