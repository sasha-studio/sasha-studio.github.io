import React from "react";
// Adapted from DavidHDev/react-bits, FadeContent. See LICENSE.md and SOURCES.md.
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function FadeContent({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const tween = gsap.fromTo(
        el,
        { opacity: 0, y: 22 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay,
          ease: "power2.out",
          clearProps: "opacity,transform",
          scrollTrigger: { trigger: el, start: "top 96%", once: true },
        },
      );
      // Keyboard navigation should never land inside visually hidden content.
      const reveal = () => {
        tween.progress(1);
      };
      el.addEventListener("focusin", reveal);
      return () => el.removeEventListener("focusin", reveal);
    });
    return () => media.revert();
  }, [delay]);
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
