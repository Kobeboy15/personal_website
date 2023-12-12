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
      document;
    } else {
      document.documentElement.classList.remove("dark");
      setCurrentTheme("light");
    }
  }, []);

  return (
    <div className="flex items-center justify-between max-w-[1180px] m-auto px-6 h-[140px]">
      <Link href="/">
        <h3 className="text-lg md:text-[24px] font-bold dark:text-white">
          kobe michael
        </h3>
      </Link>
      <div className="flex flex-row-reverse gap-5">
        <button
          onClick={handleTheme}
          className="dark:text-white w-12 flex justify-center"
        >
          {currentTheme === "dark" ? <Sun /> : <Moon size={20} />}
        </button>
        <div className="dark:text-white flex items-center gap-5 md:gap-11 text-sm md:text-[20px] hover:text-yellow-200 transition-colors">
          <Link href="/about">
            <p>about</p>
          </Link>
          {/* <p>contact</p> */}
        </div>
      </div>
    </div>
  );
}
