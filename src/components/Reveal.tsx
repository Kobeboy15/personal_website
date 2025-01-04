"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  delay?: number;
  className?: String;
  child_className?: string;
}

export const Reveal = ({
  children,
  width = "fit-content",
  delay = 0,
  className = "",
  child_className = "",
}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div
      ref={ref}
      style={{ width }}
      className={`relative ${!isInView ? "overflow-hidden" : ""} ${className}`}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 5 },
          visible: { opacity: 1, y: 0 },
        }}
        className={child_className}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};
