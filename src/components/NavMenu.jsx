"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Sun, Moon, Menu, Close } from "./Logo";
import { usePathname } from "next/navigation";

export default function NavMenu() {
  const [currentTheme, setCurrentTheme] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const MenuItems = [
    {
      name: "work",
      route: "/work",
    },
    {
      name: "projects",
      route: "/projects",
    },
    // {
    //   name: "blog",
    //   route: "/blog",
    // },
    {
      name: "about",
      route: "/about",
    },
  ];

  function handleMobileMenu(value) {
    document.body.style.overflow = !isMenuOpen && value ? "hidden" : "unset";
    setIsMenuOpen(value);
  }

  return (
    <div className="flex items-center justify-between max-w-7xl m-auto px-6 h-[140px]">
      <Link onClick={() => handleMobileMenu(false)} href="/">
        <h3
          className={`text-lg md:text-[24px] font-bold dark:text-white text-gray-900`}
        >
          kobe michael
        </h3>
      </Link>
      <div className="flex flex-row-reverse gap-5">
        <button
          onClick={handleTheme}
          className="dark:text-white dark:hover:text-yellow-200 w-12 flex justify-center fixed top-5 right-5"
        >
          {currentTheme === "dark" ? <Sun /> : <Moon />}
        </button>
        <DesktopItems routes={MenuItems} />
        <MobileItems
          routes={MenuItems}
          isMenuOpen={isMenuOpen}
          handleMobileMenu={handleMobileMenu}
        />
      </div>
    </div>
  );
}

function DesktopItems({ routes }) {
  const pathname = usePathname();
  return (
    <div className="hidden dark:text-white md:flex items-center gap-5 md:gap-11 text-sm md:text-[16px]">
      {routes.map((item, index) => {
        const isActive = pathname.startsWith(item.route);
        return (
          <Link
            key={index}
            href={item.route}
            active
            className={`hover:text-yellow-500 border-dotted dark:hover:text-yellow-200 transition-colors duration-200 py-1 border-b-[3px] ${
              isActive ? "dark:border-white border-black" : "border-transparent"
            }`}
          >
            <p>{item.name}</p>
          </Link>
        );
      })}
    </div>
  );
}

function MobileItems({ routes, isMenuOpen, handleMobileMenu }) {
  return (
    <div className="md:hidden dark:text-white flex items-center gap-5 md:gap-11 text-sm">
      {isMenuOpen ? (
        <button
          onClick={() => handleMobileMenu(false)}
          className="hover:text-yellow-500 dark:hover:text-yellow-200 transition-colors"
        >
          <Close />
        </button>
      ) : (
        <button
          onClick={() => handleMobileMenu(true)}
          className="hover:text-yellow-500 dark:hover:text-yellow-200 transition-colors"
        >
          <Menu />
        </button>
      )}
      {isMenuOpen && (
        <div className="absolute top-[140px] left-0 px-6 bg-amber-50 dark:bg-zinc-900 duration-150 w-full h-full z-50">
          <div className="text-lg flex flex-col gap-7">
            {routes.map((item, index) => {
              return (
                <Link
                  key={index}
                  onClick={() => handleMobileMenu(false)}
                  href={item.route}
                  className="hover:text-yellow-500 dark:hover:text-yellow-200"
                >
                  <p>{item.name}</p>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
