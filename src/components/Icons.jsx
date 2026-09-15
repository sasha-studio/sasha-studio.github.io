import React from "react";
export function Spark({ className = "" }) {
  return (
    <svg
      className={`spark ${className}`}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M16 1c1.8 10.2 4.8 13.2 15 15-10.2 1.8-13.2 4.8-15 15C14.2 20.8 11.2 17.8 1 16 11.2 14.2 14.2 11.2 16 1Z"
        fill="currentColor"
      />
    </svg>
  );
}
export function Icon({ name = "arrow", className = "" }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={`icon ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {name === "arrow" && <path d="M10 24h28M27 13l11 11-11 11" />}
      {name === "diagonal" && <path d="M12 36 36 12M13 12h23v23" />}
      {name === "down" && <path d="M24 8v30M13 27l11 11 11-11" />}
      {name === "sun" && (
        <>
          <circle cx="24" cy="24" r="10" fill="currentColor" opacity=".2" />
          <circle cx="24" cy="24" r="8" />
          <path d="M24 3v5m0 32v5M3 24h5m32 0h5M9 9l4 4m22 22 4 4M9 39l4-4m22-22 4-4" />
        </>
      )}
      {name === "moon" && (
        <path
          d="M34 32A16 16 0 0 1 16 9a17 17 0 1 0 18 23Z"
          fill="currentColor"
          fillOpacity=".2"
        />
      )}
      {name === "key" && (
        <>
          <circle cx="18" cy="16" r="9" fill="currentColor" fillOpacity=".2" />
          <path d="m24 23 17 17m-7-7-5 5m0-10-5 5" />
        </>
      )}
      {name === "play" && <path d="m18 11 21 13-21 13Z" fill="currentColor" />}
      {name === "close" && <path d="m13 13 22 22m0-22L13 35" />}
      {name === "book" && (
        <>
          <path d="M24 39V12c-6-5-13-5-19-3v26c7-2 13-1 19 4Zm0 0V12c6-5 13-5 19-3v26c-7-2-13-1-19 4Z" />
        </>
      )}
      {name === "palette" && (
        <>
          <path d="M40 26c6-15-9-25-22-19C4 12 4 32 15 39c8 5 11-1 8-5-3-6 15 0 17-8Z" />
          <circle cx="15" cy="19" r="1.5" />
          <circle cx="23" cy="13" r="1.5" />
          <circle cx="33" cy="17" r="1.5" />
        </>
      )}
    </svg>
  );
}
