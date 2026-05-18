import React from "react";
import { motion } from "framer-motion";

export default function SectionHeader({ label, animated = true }) {
  return (
    <div className="flex items-center gap-4 mb-16 md:mb-20">
      <motion.p
        initial={animated ? { opacity: 0, x: -20 } : undefined}
        whileInView={animated ? { opacity: 1, x: 0 } : undefined}
        viewport={animated ? { once: true } : undefined}
        className="text-[11px] font-mono-custom tracking-[0.3em] uppercase text-muted-foreground"
      >
        / {label}
      </motion.p>
      <motion.div
        initial={animated ? { scaleX: 0 } : undefined}
        whileInView={animated ? { scaleX: 1 } : undefined}
        viewport={animated ? { once: true } : undefined}
        transition={animated ? { duration: 0.7, delay: 0.2 } : undefined}
        className="flex-1 h-px bg-border origin-left"
      />
    </div>
  );
}
