import React, {
  useEffect,
  useState,
} from "react";
import ConstellationBackground from "./ConstellationBackground";

export default function GameBackground() {
  const [reduced, setReduced] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const change = () => setReduced(query.matches);
    query.addEventListener("change", change);
    return () => query.removeEventListener("change", change);
  }, []);
  return (
    <div className="game-background" data-state={reduced ? "static" : "running"}>
      <ConstellationBackground reduced={reduced} />
    </div>
  );
}
