import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
} from "framer-motion";
import { useTranslation } from "react-i18next";
import HeroCanvas from "./HeroCanvas";
import RaccoonLogo from "./RaccoonLogo";

function useIsNarrow() {
  const [isNarrow, setIsNarrow] = useState(() => window.innerWidth < 768);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const handler = (e) => setIsNarrow(e.matches);
    mq.addEventListener("change", handler);
    setIsNarrow(mq.matches);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return isNarrow;
}

function useTypewriter(words) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  const wordsRef = useRef(words);
  wordsRef.current = words;

  useEffect(() => {
    const w = wordsRef.current[idx];
    let t;
    if (!del && text.length < w.length) {
      t = setTimeout(() => setText(w.slice(0, text.length + 1)), 72);
    } else if (!del) {
      t = setTimeout(() => setDel(true), 2600);
    } else if (del && text.length > 0) {
      t = setTimeout(() => setText(w.slice(0, text.length - 1)), 40);
    } else {
      setDel(false);
      setIdx((i) => (i + 1) % wordsRef.current.length);
    }
    return () => clearTimeout(t);
  }, [text, del, idx]);

  return text;
}

function MagBtn({ children, onClick }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 16 });
  const sy = useSpring(y, { stiffness: 220, damping: 16 });

  return (
    <motion.div
      ref={ref}
      style={{ x: sx, y: sy }}
      onMouseMove={(e) => {
        const r = ref.current.getBoundingClientRect();
        x.set((e.clientX - r.left - r.width / 2) * 0.38);
        y.set((e.clientY - r.top - r.height / 2) * 0.38);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      onClick={onClick}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  const { t } = useTranslation();
  const isNarrow = useIsNarrow();
  const roles = useMemo(
    () => [t("hero.role1"), t("hero.role2"), t("hero.role3")],
    [t],
  );
  const typed = useTypewriter(roles);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const sx = useSpring(rawX, { stiffness: 28, damping: 14 });
  const sy = useSpring(rawY, { stiffness: 28, damping: 14 });
  const raccX = useTransform(sx, (v) => v * -28);
  const raccY = useTransform(sy, (v) => v * -18);
  const txtX = useTransform(sx, (v) => v * 12);

  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);
  const yUp = useTransform(scrollY, [0, 600], [0, 100]);
  const [canvasReady, setCanvasReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setCanvasReady(true), 800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isNarrow) return; // Disable on mobile

    let timeout;
    const fn = (e) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        rawX.set((e.clientX - window.innerWidth / 2) / window.innerWidth);
        rawY.set((e.clientY - window.innerHeight / 2) / window.innerHeight);
      }, 16); // ~60fps throttling
    };

    window.addEventListener("mousemove", fn);
    return () => {
      window.removeEventListener("mousemove", fn);
      clearTimeout(timeout);
    };
  }, [rawX, rawY, isNarrow]);

  const LINE_DELAY = [0.15, 0.28, 0.41];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
    >
      {canvasReady && <HeroCanvas />}
      <div className="absolute inset-0 scanlines z-[1] pointer-events-none opacity-50" />

      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--border)/0.4) 1px,transparent 1px),linear-gradient(90deg,hsl(var(--border)/0.4) 1px,transparent 1px)",
          backgroundSize: "72px 72px",
          opacity: 0.3,
        }}
      />

      <motion.div
        style={{ opacity, y: yUp }}
        className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 md:px-10 pt-24 md:pt-28 pb-10 md:pb-16"
      >
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-6 items-center">
          <motion.div
            style={{ x: txtX }}
            className="flex-1 flex flex-col justify-center w-full"
          >
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="flex items-center gap-3 mb-5 md:mb-10"
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-[10px] font-mono-custom tracking-[0.15em] sm:tracking-[0.3em] uppercase text-muted-foreground truncate">
                {t("hero.available")} · {t("hero.location")}
              </span>
            </motion.div>

            {["FRONT", "END", "DEV"].map((word, i) => (
              <div key={word} className="overflow-hidden">
                <motion.div
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 1,
                    delay: LINE_DELAY[i],
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex items-center gap-4"
                >
                  {i === 1 ? (
                    <span
                      className="font-display font-black leading-[0.86] tracking-tighter text-stroke"
                      style={{ fontSize: "clamp(2.5rem, 15vw, 8rem)" }}
                    >
                      {word}
                    </span>
                  ) : (
                    <span
                      className="font-display font-black leading-[0.86] tracking-tighter text-foreground"
                      style={{ fontSize: "clamp(2.5rem, 15vw, 8rem)" }}
                    >
                      {word}
                    </span>
                  )}
                  {i === 1 && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{
                        delay: 0.85,
                        duration: 0.7,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="hidden md:block flex-1 h-1 bg-primary origin-left"
                    />
                  )}
                </motion.div>
              </div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.7 }}
              className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8"
            >
              <div>
                <p className="font-mono-custom text-xs tracking-[0.25em] uppercase text-muted-foreground mb-1.5">
                  Zhanat Kairbekov
                </p>
                <div className="flex items-center gap-1.5 h-7">
                  <span className="text-primary font-display font-bold text-base md:text-lg">
                    {typed}
                  </span>
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="text-primary font-display font-bold text-base md:text-lg"
                  >
                    _
                  </motion.span>
                </div>
              </div>
              <div className="hidden sm:block w-px h-10 bg-border" />
              <p className="text-muted-foreground text-sm max-w-[200px] leading-relaxed hidden sm:block">
                {t("hero.tagline")}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="mt-7 md:mt-10 flex flex-wrap items-center gap-3 sm:gap-5"
            >
              <MagBtn
                onClick={() =>
                  document
                    .getElementById("contacts")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <span className="block px-5 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground font-display font-bold text-xs sm:text-sm tracking-[0.18em] uppercase">
                  {t("hero.cta")} →
                </span>
              </MagBtn>
              <button
                onClick={() =>
                  document
                    .getElementById("sites")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group flex items-center gap-3 font-mono-custom text-[10px] tracking-[0.22em] uppercase text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="w-6 h-px bg-muted-foreground group-hover:w-10 group-hover:bg-foreground transition-all duration-300" />
                {t("portfolio.sectionLabel")}
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            style={{ x: raccX, y: raccY }}
            className="hidden lg:flex items-center justify-center w-[380px] xl:w-[440px] shrink-0"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.75, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 1.2,
                delay: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative"
            >
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at 50% 55%, hsl(38 95% 60% / 0.18) 0%, transparent 70%)",
                  transform: "scale(1.3)",
                  filter: "blur(20px)",
                }}
              />
              <motion.div
                className="absolute inset-[-24px] rounded-full border border-dashed"
                style={{ borderColor: "hsl(var(--primary) / 0.25)" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-[-52px] rounded-full border"
                style={{ borderColor: "hsl(var(--border))" }}
                animate={{ rotate: -360 }}
                transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
              />

              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <RaccoonLogo size={400} glowing animated />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.6, duration: 0.6 }}
                className="absolute -left-[72px] top-[38%] flex items-center gap-2 bg-card border border-border px-3 py-2 shadow-lg"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-[9px] font-mono-custom tracking-[0.2em] uppercase text-foreground whitespace-nowrap">
                  Open to work
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.9, duration: 0.6 }}
                className="absolute -right-[60px] bottom-[30%] bg-primary text-primary-foreground px-3 py-2"
              >
                <p className="text-[9px] font-mono-custom tracking-[0.2em] uppercase font-bold">
                  Astana, KZ
                </p>
                <p className="text-[9px] font-mono-custom opacity-70">
                  Since 2019
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 1 }}
        style={{ opacity }}
        className="absolute bottom-[100px] md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <button
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="flex flex-col items-center gap-2 group cursor-pointer"
          aria-label="Scroll to next section"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-12 bg-gradient-to-b from-primary to-transparent group-hover:from-primary/60 transition-opacity"
          />
          <span className="text-[9px] font-mono-custom tracking-[0.4em] uppercase text-muted-foreground group-hover:text-primary transition-colors duration-200">
            {t("hero.scrollLabel")}
          </span>
        </button>
      </motion.div>
    </section>
  );
}
