# React Bits adaptations

Source: David Haz / React Bits, https://reactbits.dev

Adapted from the JavaScript + CSS sources inspected on 2026-09-15:

- [BlurText](https://github.com/DavidHDev/react-bits/blob/main/src/content/TextAnimations/BlurText/BlurText.jsx): word-by-word blur reveal, changed to semantic spans, shorter travel and reduced-motion support.
- [FadeContent](https://github.com/DavidHDev/react-bits/blob/main/src/content/Animations/FadeContent/FadeContent.jsx): GSAP ScrollTrigger reveal, scoped to matchMedia with cleanup and immediate visibility on keyboard focus.
- [TiltedCard](https://github.com/DavidHDev/react-bits/blob/main/src/content/Components/TiltedCard/TiltedCard.jsx): pointer-driven spring rotation. Adapted to accept existing card children and preserve semantic links. No tooltip or mobile warning; tilt disabled for touch and reduced motion.

- [Ballpit](https://reactbits.dev/backgrounds/ballpit): adapted from the source supplied by the user on 2026-09-15. Three.js instanced spheres with sphere collisions, gravity, and cursor repulsion. Reworked lifecycle, fixed-step physics, capped pixel density, passive mouse tracking, offscreen/tab suspension, pause control, and static reduced-motion/WebGL fallback. The original effect credits Kevin Levron.

The upstream license is preserved in LICENSE.md. These are local adaptations, not a package claiming to be the React Bits library. Motion, GSAP, and Three.js are the runtime dependencies.
