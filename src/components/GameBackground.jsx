import React, {
  lazy,
  Suspense,
  useCallback,
  useEffect,
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
  const fail = useCallback(() => setUnavailable(true), []);
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const change = () => setReduced(query.matches);
    query.addEventListener("change", change);
    return () => query.removeEventListener("change", change);
  }, []);
  return (
    <div className="game-background" data-state={reduced ? "static" : "running"}>
      <div className="aurora-shell" aria-hidden="true">
        {!reduced && !unavailable && (
          <BackgroundBoundary onUnavailable={fail}>
            <Suspense fallback={null}>
              <Aurora
                colorStops={["#4458a8", "#8064b4", "#c59451"]}
                amplitude={0.52}
                blend={0.72}
                speed={0.14}
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
