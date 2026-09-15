import { defineConfig } from "vite";

export default defineConfig({
  base: "/",
  esbuild: { jsx: "automatic" },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react": ["react", "react-dom", "react-router"],
          "vendor-motion": ["motion/react"],
          "vendor-gsap": ["gsap", "gsap/ScrollTrigger"],
        },
      },
    },
  },
});
