// Adapted from React Bits Ballpit (MIT + Commons Clause); see SOURCES.md.
import React, { useEffect, useRef } from "react";
import {
  ACESFilmicToneMapping,
  AmbientLight,
  Color,
  DirectionalLight,
  InstancedMesh,
  MeshPhysicalMaterial,
  Object3D,
  PerspectiveCamera,
  PMREMGenerator,
  Scene,
  SphereGeometry,
  Vector3,
  WebGLRenderer,
} from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

export default function Ballpit({ paused, onUnavailable }) {
  const canvasRef = useRef(null);
  const controller = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas.closest(".hero");
    let renderer;
    try {
      renderer = new WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: "low-power",
      });
    } catch {
      onUnavailable();
      return;
    }
    const mobile = window.matchMedia("(max-width: 700px)").matches;
    const scene = new Scene();
    const camera = new PerspectiveCamera(40, 1, 0.1, 100);
    camera.position.z = 22;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, mobile ? 1 : 1.5));
    renderer.toneMapping = ACESFilmicToneMapping;
    const environment = new RoomEnvironment();
    const generator = new PMREMGenerator(renderer);
    const target = generator.fromScene(environment);
    environment.dispose();
    generator.dispose();
    const geometry = new SphereGeometry(1, 24, 16);
    const material = new MeshPhysicalMaterial({
      envMap: target.texture,
      metalness: 0.22,
      roughness: 0.24,
      clearcoat: 1,
      clearcoatRoughness: 0.15,
    });
    const count = mobile ? 28 : 58;
    const mesh = new InstancedMesh(geometry, material, count);
    mesh.frustumCulled = false;
    scene.add(mesh, new AmbientLight(0xffffff, 1.4));
    const light = new DirectionalLight(0xffe1ae, 3);
    light.position.set(-4, 8, 10);
    scene.add(light);
    const palette = ["#edc887", "#a491d0", "#8ab6d5", "#f2ddbb", "#6464a5"];
    const balls = Array.from({ length: count }, (_, index) => {
      mesh.setColorAt(index, new Color(palette[index % palette.length]));
      return {
        position: new Vector3(),
        velocity: new Vector3((Math.random() - 0.5) * 2, 0, 0),
        radius: 0.65 + Math.random() * 0.65,
      };
    });
    const transform = new Object3D();
    const difference = new Vector3();
    const pointer = new Vector3();
    let pointerActive = false;
    let halfWidth = 10,
      halfHeight = 8;
    let frame = 0,
      previous = 0,
      accumulator = 0;
    let visible = false,
      suspended = paused,
      disposed = false;
    function resize() {
      const { width, height } = canvas.getBoundingClientRect();
      if (!width || !height) return;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      halfHeight = Math.tan((Math.PI * camera.fov) / 360) * camera.position.z;
      halfWidth = halfHeight * camera.aspect;
      renderer.setSize(width, height, false);
      draw();
    }
    function draw() {
      balls.forEach((ball, index) => {
        transform.position.copy(ball.position);
        transform.scale.setScalar(ball.radius);
        transform.updateMatrix();
        mesh.setMatrixAt(index, transform.matrix);
      });
      mesh.instanceMatrix.needsUpdate = true;
      renderer.render(scene, camera);
    }
    function step() {
      const dt = 1 / 60;
      balls.forEach((ball, index) => {
        ball.velocity.y -= 8 * dt;
        ball.velocity.multiplyScalar(0.9975);
        ball.position.addScaledVector(ball.velocity, dt);
        for (let j = index + 1; j < count; j++) {
          const other = balls[j];
          difference.subVectors(ball.position, other.position);
          const distance = difference.length();
          const overlap = ball.radius + other.radius - distance;
          if (overlap > 0) {
            if (distance < 0.0001) difference.set(1, 0, 0);
            else difference.divideScalar(distance);
            ball.position.addScaledVector(difference, overlap * 0.5);
            other.position.addScaledVector(difference, -overlap * 0.5);
            const speed =
              ball.velocity.dot(difference) - other.velocity.dot(difference);
            if (speed < 0) {
              ball.velocity.addScaledVector(difference, -speed * 0.85);
              other.velocity.addScaledVector(difference, speed * 0.85);
            }
          }
        }
        if (pointerActive) {
          difference.subVectors(ball.position, pointer);
          const distance = difference.length();
          if (distance < ball.radius + 1.6 && distance > 0.001) {
            difference.divideScalar(distance);
            ball.velocity.addScaledVector(
              difference,
              (ball.radius + 1.6 - distance) * 1.3,
            );
          }
        }
        for (const [axis, bound] of [
          ["x", halfWidth],
          ["y", halfHeight],
          ["z", 2.5],
        ]) {
          const limit = Math.max(0.1, bound - ball.radius);
          if (Math.abs(ball.position[axis]) > limit) {
            ball.position[axis] = Math.sign(ball.position[axis]) * limit;
            ball.velocity[axis] *= -0.72;
          }
        }
        ball.velocity.clampLength(0, 16);
      });
    }
    function tick(time) {
      accumulator += Math.min((time - (previous || time)) / 1000, 0.05);
      previous = time;
      while (accumulator >= 1 / 60) {
        step();
        accumulator -= 1 / 60;
      }
      draw();
      frame = requestAnimationFrame(tick);
    }
    function sync() {
      cancelAnimationFrame(frame);
      previous = 0;
      accumulator = 0;
      if (!disposed && visible && !suspended && !document.hidden)
        frame = requestAnimationFrame(tick);
    }
    function move(event) {
      if (event.pointerType === "touch") return;
      const rect = canvas.getBoundingClientRect();
      pointer.set(
        (((event.clientX - rect.left) / rect.width) * 2 - 1) * halfWidth,
        (1 - ((event.clientY - rect.top) / rect.height) * 2) * halfHeight,
        0,
      );
      pointerActive = true;
    }
    function leave() {
      pointerActive = false;
    }
    function contextLost(event) {
      event.preventDefault();
      onUnavailable();
    }
    resize();
    balls.forEach((ball) =>
      ball.position.set(
        (Math.random() * 2 - 1) * halfWidth,
        (Math.random() * 1.5 - 0.5) * halfHeight,
        (Math.random() * 2 - 1) * 1.6,
      ),
    );
    draw();
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    });
    observer.observe(canvas);
    const sizeObserver = new ResizeObserver(resize);
    sizeObserver.observe(host);
    host.addEventListener("pointermove", move, { passive: true });
    host.addEventListener("pointerleave", leave);
    document.addEventListener("visibilitychange", sync);
    canvas.addEventListener("webglcontextlost", contextLost);
    controller.current = (value) => {
      suspended = value;
      sync();
    };
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
      sizeObserver.disconnect();
      host.removeEventListener("pointermove", move);
      host.removeEventListener("pointerleave", leave);
      document.removeEventListener("visibilitychange", sync);
      canvas.removeEventListener("webglcontextlost", contextLost);
      geometry.dispose();
      material.dispose();
      target.dispose();
      renderer.dispose();
      renderer.forceContextLoss();
      controller.current = null;
    };
  }, [onUnavailable]);
  useEffect(() => {
    controller.current?.(paused);
  }, [paused]);
  return (
    <canvas ref={canvasRef} className="ballpit-canvas" aria-hidden="true" />
  );
}
