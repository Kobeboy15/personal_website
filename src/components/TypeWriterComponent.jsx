"use client";

import Typewriter from "typewriter-effect";

export default function TypeWriterComponent({ value }) {
  return (
    <Typewriter
      options={{
        strings: [value],
        delay: "90",
        autoStart: true,
        loop: true,
      }}
    />
  );
}
