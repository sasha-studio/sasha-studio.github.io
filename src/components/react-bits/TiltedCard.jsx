import React from "react";
// Adapted from DavidHDev/react-bits, TiltedCard. See LICENSE.md and SOURCES.md.
import { useRef } from "react";
import { motion, useSpring, useReducedMotion } from "motion/react";
const spring = { damping: 28, stiffness: 220, mass: 0.8 };

export default function TiltedCard({
  children,
  className = "",
  amplitude = 3,
}) {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const rotateX = useSpring(0, spring);
  const rotateY = useSpring(0, spring);
  function move(e) {
    if (reduced || e.pointerType !== "mouse") return;
    const rect = ref.current.getBoundingClientRect();
    rotateX.set(-((e.clientY - rect.top) / rect.height - 0.5) * amplitude * 2);
    rotateY.set(((e.clientX - rect.left) / rect.width - 0.5) * amplitude * 2);
  }
  function reset() {
    rotateX.set(0);
    rotateY.set(0);
  }
  return (
    <div
      ref={ref}
      className={`tilted-card ${className}`}
      onPointerMove={move}
      onPointerLeave={reset}
      onPointerCancel={reset}
    >
      <motion.div
        className="tilted-card-inner"
        style={reduced ? {} : { rotateX, rotateY }}
      >
        {children}
      </motion.div>
    </div>
  );
}
