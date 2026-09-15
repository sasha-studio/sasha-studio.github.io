import React from "react";
// Adapted from DavidHDev/react-bits, BlurText. See LICENSE.md and SOURCES.md.
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

export default function BlurText({ text, className = "", delay = 95 }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const reduced = useReducedMotion();
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <span ref={ref} className={`blur-text ${className}`} aria-label={text}>
      {text.split(" ").map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          aria-hidden="true"
          initial={reduced ? false : { filter: "blur(8px)", opacity: 0, y: 16 }}
          animate={
            inView || reduced
              ? { filter: "blur(0px)", opacity: 1, y: 0 }
              : undefined
          }
          transition={{
            duration: reduced ? 0 : 0.65,
            delay: reduced ? 0 : (index * delay) / 1000,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {word}
          {index < text.split(" ").length - 1 ? "\u00a0" : ""}
        </motion.span>
      ))}
    </span>
  );
}
