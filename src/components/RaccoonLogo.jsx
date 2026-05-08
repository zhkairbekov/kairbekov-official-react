import React from "react";
import { motion } from "framer-motion";

export default function RaccoonLogo({
  size = 48,
  className = "",
  animated = false,
  glowing = false,
}) {
  const floatProps = animated
    ? {
        animate: { y: [0, -5, 0], rotate: [-1, 1, -1] },
        transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
      }
    : {};

  return (
    <div
      className={`relative inline-block ${className}`}
      style={{ width: size, height: size }}
    >
      {glowing && (
        <div
          className="absolute inset-0 rounded-full blur-2xl opacity-40"
          style={{
            background: "radial-gradient(circle, hsl(38 95% 60%) 0%, transparent 70%)",
            transform: "scale(1.5)",
          }}
        />
      )}
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block", position: "relative", zIndex: 1 }}
        {...floatProps}
      >
        {/* Left ear */}
        <path d="M 20 38 Q 14 12 30 8 Q 42 6 40 28 Z" fill="currentColor" />
        <path d="M 24 36 Q 20 18 30 14 Q 38 12 36 28 Z" fill="hsl(38 95% 60%)" opacity="0.7" />

        {/* Right ear */}
        <path d="M 100 38 Q 106 12 90 8 Q 78 6 80 28 Z" fill="currentColor" />
        <path d="M 96 36 Q 100 18 90 14 Q 82 12 84 28 Z" fill="hsl(38 95% 60%)" opacity="0.7" />

        {/* Main face */}
        <ellipse cx="60" cy="68" rx="44" ry="42" fill="currentColor" />

        {/* Raccoon mask */}
        <ellipse cx="40" cy="62" rx="16" ry="11" fill="hsl(220 16% 10%)" opacity="0.75" />
        <ellipse cx="80" cy="62" rx="16" ry="11" fill="hsl(220 16% 10%)" opacity="0.75" />
        <rect x="52" y="57" width="16" height="10" fill="hsl(220 16% 10%)" opacity="0.55" rx="4" />

        {/* Eye whites */}
        <ellipse cx="40" cy="61" rx="8" ry="7" fill="white" />
        <ellipse cx="80" cy="61" rx="8" ry="7" fill="white" />

        {/* Irises */}
        <circle cx="41" cy="61" r="5" fill="hsl(38 95% 58%)" />
        <circle cx="81" cy="61" r="5" fill="hsl(38 95% 58%)" />

        {/* Pupils */}
        <ellipse cx="42" cy="61" rx="2.5" ry="3.5" fill="hsl(220 16% 6%)" />
        <ellipse cx="82" cy="61" rx="2.5" ry="3.5" fill="hsl(220 16% 6%)" />

        {/* Eye shines */}
        <circle cx="43.5" cy="58.5" r="1.5" fill="white" opacity="0.9" />
        <circle cx="83.5" cy="58.5" r="1.5" fill="white" opacity="0.9" />

        {/* Nose */}
        <ellipse cx="60" cy="74" rx="5" ry="4" fill="hsl(220 16% 14%)" opacity="0.8" />
        <circle cx="58.5" cy="72.5" r="1.4" fill="white" opacity="0.4" />

        {/* Philtrum */}
        <path d="M 60 78 L 56 83 M 60 78 L 64 83" stroke="hsl(220 16% 14%)" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />

        {/* Mouth */}
        <path d="M 51 84 Q 60 90 69 84" stroke="hsl(220 16% 14%)" strokeWidth="1.8" strokeLinecap="round" fill="none" opacity="0.5" />

        {/* Cheek tufts */}
        <ellipse cx="22" cy="74" rx="8" ry="5" fill="currentColor" opacity="0.4" />
        <ellipse cx="98" cy="74" rx="8" ry="5" fill="currentColor" opacity="0.4" />

        {/* Forehead stripe */}
        <path d="M 52 34 Q 60 29 68 34" stroke="hsl(220 16% 14%)" strokeWidth="2.5" strokeLinecap="round" opacity="0.2" fill="none" />
      </motion.svg>
    </div>
  );
}
