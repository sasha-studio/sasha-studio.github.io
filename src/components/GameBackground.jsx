import React, {
  lazy,
  Suspense,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import ConstellationBackground from "./ConstellationBackground";

const Aurora = lazy(() => import("./react-bits/Aurora"));

class BackgroundBoundary extends React.Component {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  componentDidCatch() {
    this.props.onUnavailable();
  }
  render() {
    return this.state.failed ? null : this.props.children;
  }
}

export default function GameBackground() {
  const [reduced, setReduced] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [unavailable, setUnavailable] = useState(false);
  const auroraRef = useRef(null);
  const fail = useCallback(() => setUnavailable(true), []);
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const change = () => setReduced(query.matches);
    query.addEventListener("change", change);
    return () => query.removeEventListener("change", change);
  }, []);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      if (!auroraRef.current) return;
      const progress = Math.min(window.scrollY / Math.max(window.innerHeight * 0.72, 520), 1);
      auroraRef.current.style.opacity = String(0.72 * (1 - progress));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="game-background" data-state={reduced ? "static" : "running"}>
      <div ref={auroraRef} className="aurora-shell" aria-hidden="true">
        {!reduced && !unavailable && (
          <BackgroundBoundary onUnavailable={fail}>
            <Suspense fallback={null}>
              <Aurora
                colorStops={["#4458a8", "#8064b4", "#c59451"]}
                amplitude={0.58}
                blend={0.78}
                speed={0.18}
                onUnavailable={fail}
              />
            </Suspense>
          </BackgroundBoundary>
        )}
      </div>
      <ConstellationBackground reduced={reduced} />
      <div className="background-vignette" aria-hidden="true" />
    </div>
  );
}
