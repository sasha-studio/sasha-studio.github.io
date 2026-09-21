// Adapted from ParticleCanvas in the Kirill Makarov Dev portfolio.
import { useEffect, useRef } from "react";

const PALETTE = [
  [0, 240, 255],
  [255, 0, 160],
  [57, 255, 20],
];

export default function ConstellationBackground({ reduced = false }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return undefined;

    let frame = 0;
    let particles = [];
    const pointer = { x: -1000, y: -1000, active: false };
    const mobile = window.matchMedia("(max-width: 700px)").matches;
    const count = reduced ? (mobile ? 15 : 24) : mobile ? 23 : 39;
    const connectionDistance = mobile ? 148 : 202;
    const pointerRadius = mobile ? 118 : 178;
    const pointerLinkDistance = mobile ? 170 : 245;
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);

    const createParticles = () => {
      particles = Array.from({ length: count }, (_, index) => {
        const driftX = (Math.random() - 0.5) * 0.075;
        const driftY = (Math.random() - 0.5) * 0.075;
        return {
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: driftX,
          vy: driftY,
          driftX,
          driftY,
          radius: Math.random() * 1.45 + 0.9,
          color: PALETTE[index % PALETTE.length],
        };
      });
    };

    const resize = () => {
      canvas.width = Math.round(window.innerWidth * pixelRatio);
      canvas.height = Math.round(window.innerHeight * pixelRatio);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      createParticles();
    };

    const draw = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      context.clearRect(0, 0, width, height);

      particles.forEach((particle) => {
        if (!reduced && pointer.active) {
          const dx = particle.x - pointer.x;
          const dy = particle.y - pointer.y;
          const distance = Math.hypot(dx, dy);
          if (distance > 0 && distance < pointerRadius) {
            const force = (pointerRadius - distance) / pointerRadius;
            particle.vx += (dx / distance) * force * 0.11;
            particle.vy += (dy / distance) * force * 0.11;
          }
        }

        if (!reduced) {
          particle.vx += (particle.driftX - particle.vx) * 0.012;
          particle.vy += (particle.driftY - particle.vy) * 0.012;
          particle.x += particle.vx;
          particle.y += particle.vy;
          if (particle.x < -10) particle.x = width + 10;
          if (particle.x > width + 10) particle.x = -10;
          if (particle.y < -10) particle.y = height + 10;
          if (particle.y > height + 10) particle.y = -10;
        }

        const [red, green, blue] = particle.color;
        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(${red}, ${green}, ${blue}, 0.82)`;
        context.shadowColor = `rgba(${red}, ${green}, ${blue}, 0.56)`;
        context.shadowBlur = 9;
        context.fill();
        context.shadowBlur = 0;
      });

      for (let first = 0; first < particles.length; first += 1) {
        for (let second = first + 1; second < particles.length; second += 1) {
          const start = particles[first];
          const end = particles[second];
          const distance = Math.hypot(start.x - end.x, start.y - end.y);
          if (distance >= connectionDistance) continue;
          const opacity = (1 - distance / connectionDistance) * 0.31;
          const gradient = context.createLinearGradient(start.x, start.y, end.x, end.y);
          gradient.addColorStop(0, `rgba(0, 240, 255, ${opacity})`);
          gradient.addColorStop(1, `rgba(255, 0, 160, ${opacity * 0.78})`);
          context.beginPath();
          context.moveTo(start.x, start.y);
          context.lineTo(end.x, end.y);
          context.strokeStyle = gradient;
          context.lineWidth = 0.8;
          context.stroke();
        }
      }

      if (!reduced && pointer.active) {
        particles.forEach((particle) => {
          const distance = Math.hypot(particle.x - pointer.x, particle.y - pointer.y);
          if (distance >= pointerLinkDistance) return;
          const opacity = (1 - distance / pointerLinkDistance) * 0.48;
          const gradient = context.createLinearGradient(
            pointer.x,
            pointer.y,
            particle.x,
            particle.y,
          );
          gradient.addColorStop(0, `rgba(0, 240, 255, ${opacity})`);
          gradient.addColorStop(1, `rgba(57, 255, 20, ${opacity * 0.35})`);
          context.beginPath();
          context.moveTo(pointer.x, pointer.y);
          context.lineTo(particle.x, particle.y);
          context.strokeStyle = gradient;
          context.lineWidth = 0.9;
          context.stroke();
        });

        const glow = context.createRadialGradient(
          pointer.x,
          pointer.y,
          0,
          pointer.x,
          pointer.y,
          mobile ? 18 : 24,
        );
        glow.addColorStop(0, "rgba(0, 240, 255, 0.5)");
        glow.addColorStop(0.18, "rgba(0, 240, 255, 0.2)");
        glow.addColorStop(1, "rgba(0, 240, 255, 0)");
        context.beginPath();
        context.arc(pointer.x, pointer.y, mobile ? 18 : 24, 0, Math.PI * 2);
        context.fillStyle = glow;
        context.fill();
      }
    };

    const animate = () => {
      draw();
      frame = requestAnimationFrame(animate);
    };
    const movePointer = (event) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.active = true;
    };
    const releasePointer = (event) => {
      if (event?.pointerType === "mouse") return;
      pointer.active = false;
      pointer.x = -1000;
      pointer.y = -1000;
    };

    resize();
    if (reduced) draw();
    else animate();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", movePointer, { passive: true });
    window.addEventListener("pointerdown", movePointer, { passive: true });
    window.addEventListener("pointerup", releasePointer, { passive: true });
    window.addEventListener("pointercancel", releasePointer, { passive: true });
    window.addEventListener("blur", releasePointer);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", movePointer);
      window.removeEventListener("pointerdown", movePointer);
      window.removeEventListener("pointerup", releasePointer);
      window.removeEventListener("pointercancel", releasePointer);
      window.removeEventListener("blur", releasePointer);
    };
  }, [reduced]);

  return <canvas ref={canvasRef} className="constellation-canvas" aria-hidden="true" />;
}
