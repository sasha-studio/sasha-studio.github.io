import React, { lazy, Suspense, useCallback, useEffect, useState } from "react";
const Ballpit = lazy(() => import("./react-bits/Ballpit"));

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
  const [paused, setPaused] = useState(false);
  const [unavailable, setUnavailable] = useState(false);
  const fail = useCallback(() => setUnavailable(true), []);
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const change = () => setReduced(query.matches);
    query.addEventListener("change", change);
    return () => query.removeEventListener("change", change);
  }, []);
  const staticMode = reduced || unavailable;
  return (
    <>
      <div
        className="game-background"
        data-state={staticMode ? "static" : paused ? "paused" : "running"}
      >
        <div className="ballpit-fallback" aria-hidden="true">
          {Array.from({ length: 9 }, (_, index) => (
            <i key={index} />
          ))}
        </div>
        {!staticMode && (
          <BackgroundBoundary onUnavailable={fail}>
            <Suspense fallback={null}>
              <Ballpit paused={paused} onUnavailable={fail} />
            </Suspense>
          </BackgroundBoundary>
        )}
      </div>
      <div className="game-controls">
        <span>
          {staticMode
            ? "A LITTLE PLAYFUL SPIRIT"
            : "A LITTLE PLAY / MOVE YOUR CURSOR"}
        </span>
        {!staticMode && (
          <button
            type="button"
            aria-pressed={paused}
            onClick={() => setPaused((value) => !value)}
          >
            {paused ? "Resume animation" : "Pause animation"}
          </button>
        )}
      </div>
    </>
  );
}
