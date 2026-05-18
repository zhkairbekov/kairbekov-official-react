import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RaccoonLogo from "./RaccoonLogo";

export default function Preloader({ onComplete }) {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Check if preloader was already shown (only show once per session)
    const preloaderShown = sessionStorage.getItem("preloaderShown");
    if (preloaderShown) {
      setDone(true);
      onComplete();
      return;
    }

    let current = 0;
    const target = 100;
    const duration = 2000; // Further reduced for faster loading
    const interval = duration / target;

    const timer = setInterval(() => {
      current += 1;
      setCount(current);
      if (current >= target) {
        clearInterval(timer);
        setTimeout(() => {
          setDone(true);
          sessionStorage.setItem("preloaderShown", "true");
          setTimeout(onComplete, 600); // Reduced from 950ms
        }, 100);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done ? (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          style={{ backgroundColor: "hsl(220 16% 6%)" }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, hsl(38 95% 60% / 0.06) 0%, transparent 65%)",
            }}
          />

          <div className="relative flex flex-col items-center gap-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.7, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div
                className="absolute inset-0 rounded-full blur-3xl"
                style={{
                  background: "hsl(38 95% 60% / 0.15)",
                  transform: "scale(1.6)",
                }}
              />
              <RaccoonLogo size={110} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center gap-1"
            >
              <span className="font-display font-black text-white text-xl sm:text-2xl md:text-3xl tracking-[0.15em] sm:tracking-widest uppercase text-center">
                Zhanat Kairbekov
              </span>
              <span
                className="font-mono-custom text-[10px] tracking-[0.35em] uppercase"
                style={{ color: "hsl(38 95% 60%)" }}
              >
                Frontend Developer · Designer
              </span>
            </motion.div>

            <div className="flex flex-col items-center gap-3 w-56">
              <div
                className="relative w-full h-px overflow-hidden"
                style={{ background: "rgba(255,255,255,0.08)" }}
              >
                <motion.div
                  className="absolute inset-y-0 left-0"
                  style={{ width: `${count}%`, background: "hsl(38 95% 60%)" }}
                  transition={{ duration: 0 }}
                />
              </div>
              <div className="flex items-center justify-between w-full">
                <span
                  className="font-mono-custom text-[10px] tracking-[0.3em] uppercase"
                  style={{ color: "rgba(255,255,255,0.25)" }}
                >
                  Loading
                </span>
                <span
                  className="font-mono-custom text-[10px] tabular-nums font-bold"
                  style={{ color: "hsl(38 95% 60%)" }}
                >
                  {count}%
                </span>
              </div>
            </div>
          </div>

          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono-custom text-[9px] tracking-[0.45em] uppercase"
            style={{ color: "rgba(255,255,255,0.15)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            kairbekov.official
          </motion.div>
        </motion.div>
      ) : (
        <>
          <motion.div
            key="curtain-top"
            initial={{ y: 0 }}
            animate={{ y: "-100%" }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-x-0 top-0 h-1/2 z-[9999]"
            style={{ backgroundColor: "hsl(220 16% 6%)" }}
          />
          <motion.div
            key="curtain-bottom"
            initial={{ y: 0 }}
            animate={{ y: "100%" }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-x-0 bottom-0 h-1/2 z-[9999]"
            style={{ backgroundColor: "hsl(220 16% 6%)" }}
          />
        </>
      )}
    </AnimatePresence>
  );
}
