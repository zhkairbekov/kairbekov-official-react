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
      <motion.div
        style={{ width: "100%", height: "100%", display: "block", position: "relative", zIndex: 1 }}
        {...floatProps}
      >
        <img src="/favicon/favicon-white.svg" alt="Raccoon" className="hidden dark:block w-full h-full object-contain" />
        <img src="/favicon/favicon-black.svg" alt="Raccoon" className="block dark:hidden w-full h-full object-contain" />
      </motion.div>
    </div>
  );
}
