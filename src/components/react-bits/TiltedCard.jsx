import React from "react";
// Adapted from DavidHDev/react-bits, TiltedCard. See LICENSE.md and SOURCES.md.
import { useRef } from "react";
import { motion, useSpring, useReducedMotion } from "motion/react";
const spring = { damping: 32, stiffness: 460, mass: 0.38 };

export default function TiltedCard({
  children,
  className = "",
  amplitude = 3,
}) {
  const ref = useRef(null);
  const boundsRef = useRef(null);
  const pointerRef = useRef({ x: 0, y: 0 });
  const frameRef = useRef(0);
  const reduced = useReducedMotion();
  const rotateX = useSpring(0, spring);
  const rotateY = useSpring(0, spring);
  function enter() {
    boundsRef.current = ref.current?.getBoundingClientRect() ?? null;
  }
  function move(e) {
    if (reduced || e.pointerType !== "mouse") return;
    pointerRef.current = { x: e.clientX, y: e.clientY };
    if (frameRef.current) return;
    frameRef.current = requestAnimationFrame(() => {
      frameRef.current = 0;
      const rect = boundsRef.current;
      if (!rect || !rect.width || !rect.height) return;
      rotateX.set(-((pointerRef.current.y - rect.top) / rect.height - 0.5) * amplitude * 2);
      rotateY.set(((pointerRef.current.x - rect.left) / rect.width - 0.5) * amplitude * 2);
    });
  }
  function reset() {
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    frameRef.current = 0;
    boundsRef.current = null;
    rotateX.set(0);
    rotateY.set(0);
  }
  return (
    <div
      ref={ref}
      className={`tilted-card ${className}`}
      onPointerEnter={enter}
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
