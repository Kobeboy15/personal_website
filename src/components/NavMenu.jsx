"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Sun, Moon } from "./Logo";

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
    <div className="flex items-center justify-between m-auto px-24 py-[40px] sticky top-0 bg-background-dark z-10 xl:bg-transparent">
      <Link href="/">
        <h3
          className={`text-xl font-semibold dark:text-[#AAA7E7] text-gray-900`}
        >
          Kobe Michael
        </h3>
      </Link>
      <div className="flex flex-row-reverse gap-5">
        <button
          onClick={handleTheme}
          className="dark:text-white dark:hover:text-[#AAA7E7] flex justify-center"
        >
          {currentTheme === "dark" ? <Sun /> : <Moon />}
        </button>
      </div>
    </div>
  );
}
