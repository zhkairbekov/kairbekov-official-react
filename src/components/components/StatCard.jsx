import React from "react";
import { motion } from "framer-motion";

/**
 * @param {React.ReactNode} value - Value to display (can be text, number, or component)
 * @param {string} label - Label for the stat
 * @param {number} index - Index for stagger animation
 */
export default function StatCard({ value, label, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-background p-8 md:p-10 flex flex-col gap-2"
    >
      <span
        className="font-display font-black text-primary leading-none"
        style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
      >
        {value}
      </span>
      <span className="font-mono-custom text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
        {label}
      </span>
    </motion.div>
  );
}
