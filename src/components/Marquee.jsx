import React from "react";

export default function Marquee({ children, ariaHidden = true }) {
  // Ensure children is an array
  const childArray = Array.isArray(children) ? children : [children];

  return (
    <div
      className="flex gap-8 animate-marquee whitespace-nowrap"
      aria-hidden={ariaHidden}
    >
      {[...childArray, ...childArray].map((item, i) => (
        <React.Fragment key={i}>{item}</React.Fragment>
      ))}
    </div>
  );
}
