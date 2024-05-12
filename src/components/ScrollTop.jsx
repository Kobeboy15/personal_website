"use client";

import { useEffect } from "react";

const ScrollTop = () => {
  return (
    <div className="px-24 fixed right-0 bottom-[30px]">
      <button
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="text-3xl text-cardColor bg-primary px-2 py-1 rounded-lg"
      >
        <i className="uil uil-arrow-up" />
      </button>
    </div>
  );
};

export default ScrollTop;
