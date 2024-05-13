"use client";

import { useEffect, useState } from "react";

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  function checkScrollPosition() {
    const button = document.getElementById("scroll-up-button");
    if (window.scrollY === 0) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", checkScrollPosition);
  }, []);

  return (
    <div
      id="scroll-up-button"
      className={`lg:px-24 z-10 px-8 fixed right-0 bottom-[30px] ${
        isVisible ? "fade-in" : "fade-out"
      }`}
    >
      <button
        disabled={!isVisible}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="lg:text-3xl text-xl text-cardColor bg-primary px-2 py-1 rounded-lg"
      >
        <i className="uil uil-arrow-up" />
      </button>
    </div>
  );
};

export default ScrollTop;
