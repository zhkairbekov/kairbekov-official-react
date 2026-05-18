import React from "react";
import { motion } from "framer-motion";

export default function SectionTitle({ children, size = "large" }) {
  const sizeClass =
    size === "large"
      ? "clamp(2.5rem, 7vw, 7rem)"
      : "clamp(2.5rem, 6vw, 5.5rem)";

  return (
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="font-display font-black tracking-tight"
      style={{ fontSize: sizeClass }}
    >
      {children}
    </motion.h2>
  );
}
