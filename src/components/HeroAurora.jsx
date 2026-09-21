import React, { lazy, Suspense, useCallback, useState } from "react";
import { useReducedMotion } from "motion/react";

const Aurora = lazy(() => import("./react-bits/Aurora"));

class AuroraBoundary extends React.Component {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    return this.state.failed ? null : this.props.children;
  }
}

export default function HeroAurora() {
  const reducedMotion = useReducedMotion();
  const [failed, setFailed] = useState(false);
  const handleUnavailable = useCallback(() => setFailed(true), []);

  if (reducedMotion || failed) return null;

  return (
    <div className="hero-aurora" aria-hidden="true">
      <AuroraBoundary>
        <Suspense fallback={null}>
          <Aurora
            colorStops={["#4458a8", "#8064b4", "#c59451"]}
            amplitude={0.52}
            blend={0.72}
            speed={0.14}
            onUnavailable={handleUnavailable}
          />
        </Suspense>
      </AuroraBoundary>
    </div>
  );
}
