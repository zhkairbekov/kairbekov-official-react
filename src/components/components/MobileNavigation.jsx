import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useDragControls } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../lib/theme-provider";
import RaccoonLogo from "../RaccoonLogo";
import { useHaptic } from "../../hooks/useHaptic";
import { useThemeTransition } from "../../hooks/useThemeTransition";
import { MobileGameModal } from "./MobileGameModal";

const navIds = [
  "home",
  "about",
  "services",
  "process",
  "sites",
  "journey",
  "certs",
  "contacts",
];
const LANGS = ["ru", "kk", "en"];

const BOTTOM_TABS = [
  {
    id: "services",
    icon: (active) => (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect
          x="2"
          y="3"
          width="8"
          height="8"
          rx="1"
          fill={active ? "currentColor" : "none"}
        />
        <rect
          x="14"
          y="3"
          width="8"
          height="8"
          rx="1"
          fill={active ? "currentColor" : "none"}
        />
        <rect
          x="2"
          y="13"
          width="8"
          height="8"
          rx="1"
          fill={active ? "currentColor" : "none"}
        />
        <rect
          x="14"
          y="13"
          width="8"
          height="8"
          rx="1"
          fill={active ? "currentColor" : "none"}
        />
      </svg>
    ),
  },
  {
    id: "sites",
    icon: (active) => (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect
          x="2"
          y="4"
          width="20"
          height="16"
          rx="2"
          fill={active ? "currentColor" : "none"}
        />
        <line x1="2" y1="9" x2="22" y2="9" />
        <circle cx="5.5" cy="6.5" r="0.8" fill="currentColor" />
        <circle cx="8.5" cy="6.5" r="0.8" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: "contacts",
    icon: (active) => (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill={active ? "currentColor" : "none"}
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
];

const SunIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
  >
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const GAMES = [
  { id: "snake", label: "Snake", icon: "🐍" },
  { id: "tetris", label: "Tetris", icon: "🎮" },
  { id: "minesweeper", label: "Minesweeper", icon: "💣" },
  { id: "2048", label: "2048", icon: "🔢" },
];

export default function MobileNavigation() {
  const { t, i18n } = useTranslation();
  const haptic = useHaptic();
  const toggleTheme = useThemeTransition();
  const btnRef = useRef(null);
  const topBtnRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [activeGame, setActiveGame] = useState(null);
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark"),
  );
  const dragControls = useDragControls();
  const sheetRef = useRef(null);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const observers = [];
    navIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.35 },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const scroll = (id) => {
    haptic("light");
    setOpen(false);
    window.dispatchEvent(new CustomEvent("nav-scroll"));
    setTimeout(
      () => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }),
      360,
    );
  };

  const cycleLang = () => {
    const cur = i18n.language.toLowerCase();
    const i = LANGS.indexOf(cur);
    i18n.changeLanguage(LANGS[(i + 1) % LANGS.length]);
  };

  return (
    <div className="md:hidden">
      <motion.div
        initial={{ y: -56, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 2, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="h-14 flex items-center justify-between px-4">
          <button
            onClick={() => scroll("home")}
            className="flex items-center gap-1.5"
          >
            <RaccoonLogo size={38} />
            <div className="flex flex-col leading-none">
              <span className="font-display font-black text-[11px] tracking-widest uppercase text-foreground">
                Zhanat
              </span>
              <span className="font-mono-custom text-[7.5px] tracking-[0.28em] uppercase text-primary">
                Kairbekov
              </span>
            </div>
          </button>

          <div className="flex items-center gap-1.5">
            <button
              onClick={cycleLang}
              className="font-mono-custom text-[9px] tracking-[0.22em] uppercase text-muted-foreground hover:text-primary border border-transparent hover:border-border transition-all px-2 py-1.5"
            >
              {i18n.language.toUpperCase()}
            </button>
            <button
              ref={topBtnRef}
              onClick={() => toggleTheme(topBtnRef.current)}
              className="w-8 h-8 flex items-center justify-center border border-border hover:border-primary text-muted-foreground hover:text-primary transition-colors"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={isDark ? "sun" : "moon"}
                  initial={{ rotate: -60, opacity: 0, scale: 0.7 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 60, opacity: 0, scale: 0.7 }}
                  transition={{ duration: 0.22 }}
                >
                  {isDark ? <SunIcon /> : <MoonIcon />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 2, ease: [0.22, 1, 0.36, 1] }}
        className="fixed bottom-0 left-0 right-0 z-50"
      >
        <div className="bg-background/92 backdrop-blur-2xl border-t border-border/60 shadow-[0_-4px_32px_rgba(0,0,0,0.12)] overflow-visible">
          <div className="flex items-stretch h-[62px] overflow-visible relative">
            {BOTTOM_TABS.slice(0, 2).map(({ id, icon }) => {
              const isActive = activeSection === id && !open;
              return (
                <button
                  key={id}
                  onClick={() => {
                    haptic("medium");
                    setOpen(false);
                    scroll(id);
                  }}
                  className="flex-1 flex flex-col items-center justify-center gap-[3px] relative transition-colors"
                  aria-label={t(`nav.${id}`)}
                >
                  {isActive && (
                    <motion.span
                      layoutId="mobileActiveTab"
                      className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-[2px] bg-primary rounded-b-full"
                    />
                  )}
                  <motion.span
                    animate={{
                      color: isActive
                        ? "hsl(var(--primary))"
                        : "hsl(var(--muted-foreground))",
                    }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center justify-center"
                  >
                    {icon(isActive)}
                  </motion.span>
                  <span
                    className="font-mono-custom text-[7.5px] tracking-[0.18em] uppercase transition-colors duration-200"
                    style={{
                      color: isActive
                        ? "hsl(var(--primary))"
                        : "hsl(var(--muted-foreground))",
                    }}
                  >
                    {t(`nav.${id}`)}
                  </span>
                </button>
              );
            })}

            <div className="relative w-16 shrink-0 flex items-end justify-center">
              <motion.button
                onClick={() => scroll("home")}
                aria-label="Home"
                whileTap={{ scale: 0.92 }}
                className={`
                  absolute -top-5 w-14 h-14 rounded-full flex items-center justify-center
                  bg-background border-2 transition-colors duration-300
                  shadow-[0_-4px_20px_rgba(0,0,0,0.18)]
                  ${
                    activeSection === "home" && !open
                      ? "border-primary shadow-[0_-4px_20px_hsl(38_95%_60%_/_0.25)]"
                      : "border-border hover:border-primary"
                  }
                `}
              >
                <RaccoonLogo size={30} />
                {activeSection === "home" && !open && (
                  <motion.span
                    className="absolute inset-0 rounded-full border border-primary"
                    initial={{ scale: 1, opacity: 0.6 }}
                    animate={{ scale: 1.35, opacity: 0 }}
                    transition={{
                      duration: 1.4,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                  />
                )}
              </motion.button>
            </div>

            {BOTTOM_TABS.slice(2).map(({ id, icon }) => {
              const isActive = activeSection === id && !open;
              return (
                <button
                  key={id}
                  onClick={() => {
                    setOpen(false);
                    scroll(id);
                  }}
                  className="flex-1 flex flex-col items-center justify-center gap-[3px] relative transition-colors"
                  aria-label={t(`nav.${id}`)}
                >
                  {isActive && (
                    <motion.span
                      layoutId="mobileActiveTab"
                      className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-[2px] bg-primary rounded-b-full"
                    />
                  )}
                  <motion.span
                    animate={{
                      color: isActive
                        ? "hsl(var(--primary))"
                        : "hsl(var(--muted-foreground))",
                    }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center justify-center"
                  >
                    {icon(isActive)}
                  </motion.span>
                  <span
                    className="font-mono-custom text-[7.5px] tracking-[0.18em] uppercase transition-colors duration-200"
                    style={{
                      color: isActive
                        ? "hsl(var(--primary))"
                        : "hsl(var(--muted-foreground))",
                    }}
                  >
                    {t(`nav.${id}`)}
                  </span>
                </button>
              );
            })}

            <button
              onClick={() => {
                setOpen((v) => !v);
                // Close game when opening menu
                if (!open) {
                  setActiveGame(null);
                }
              }}
              className="flex-1 flex flex-col items-center justify-center gap-[3px] relative"
              aria-label="Menu"
            >
              {open && (
                <motion.span
                  layoutId="mobileActiveTab"
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-[2px] bg-primary rounded-b-full"
                />
              )}
              <div className="flex flex-col gap-[4px] items-center justify-center w-6 h-[22px]">
                <motion.span
                  animate={{ rotate: open ? 45 : 0, y: open ? 5.5 : 0 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="block h-[1.5px] w-5 rounded-full origin-center"
                  style={{
                    background: open
                      ? "hsl(var(--primary))"
                      : "hsl(var(--muted-foreground))",
                  }}
                />
                <motion.span
                  animate={{ opacity: open ? 0 : 1, scaleX: open ? 0 : 1 }}
                  transition={{ duration: 0.18 }}
                  className="block h-[1.5px] w-3.5 rounded-full origin-center"
                  style={{ background: "hsl(var(--primary))" }}
                />
                <motion.span
                  animate={{ rotate: open ? -45 : 0, y: open ? -5.5 : 0 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="block h-[1.5px] w-5 rounded-full origin-center"
                  style={{
                    background: open
                      ? "hsl(var(--primary))"
                      : "hsl(var(--muted-foreground))",
                  }}
                />
              </div>
              <span
                className="font-mono-custom text-[7.5px] tracking-[0.18em] uppercase transition-colors duration-200"
                style={{
                  color: open
                    ? "hsl(var(--primary))"
                    : "hsl(var(--muted-foreground))",
                }}
              >
                {open ? t("nav.closeMenu") || "Close" : t("nav.menu") || "Menu"}
              </span>
            </button>
          </div>

          <div
            className="h-safe-area-inset-bottom"
            style={{ height: "env(safe-area-inset-bottom)" }}
          />
        </div>
      </motion.div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            <motion.div
              ref={sheetRef}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              drag="y"
              dragControls={dragControls}
              dragListener={false}
              dragConstraints={{ top: 0 }}
              dragElastic={{ top: 0, bottom: 0.3 }}
              onDragEnd={(_, info) => {
                if (info.offset.y > 120 || info.velocity.y > 500)
                  setOpen(false);
              }}
              className="fixed left-0 right-0 bottom-0 z-40 flex flex-col"
              style={{
                maxHeight: "82dvh",
                borderRadius: "20px 20px 0 0",
                background: "hsl(var(--background))",
                boxShadow: "0 -8px 48px rgba(0,0,0,0.22)",
                paddingBottom: "calc(100px + env(safe-area-inset-bottom))",
              }}
              data-lenis-prevent="true"
              className="fixed left-0 right-0 bottom-0 z-40 flex flex-col"
            >
              <div
                className="flex-shrink-0 flex flex-col items-center pt-3 pb-2 cursor-grab active:cursor-grabbing"
                onPointerDown={(e) => dragControls.start(e)}
              >
                <div className="w-10 h-1 rounded-full bg-border" />

                <div className="flex items-center justify-between w-full px-5 mt-3">
                  <span className="font-mono-custom text-[9px] tracking-[0.3em] uppercase text-primary">
                    {t("nav.menu") || "Menu"}
                  </span>
                  <button
                    onClick={() => setOpen(false)}
                    className="w-7 h-7 flex items-center justify-center rounded-full border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                    aria-label="Close"
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="h-px bg-border/40 mx-5 flex-shrink-0" />

              {/* Languages & Theme Section - MOVED TO TOP */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15, duration: 0.35 }}
                className="flex items-center justify-between px-5 py-3 border-b border-border/20 flex-shrink-0"
              >
                <div className="flex gap-1.5">
                  {["RU", "KK", "EN"].map((lang) => (
                    <button
                      key={lang}
                      onClick={() => i18n.changeLanguage(lang.toLowerCase())}
                      className={`font-mono-custom text-[8px] tracking-[0.2em] uppercase px-2 py-1 border transition-colors ${
                        i18n.language.toUpperCase() === lang
                          ? "border-primary text-primary bg-primary/10"
                          : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>

                <button
                  ref={btnRef}
                  onClick={() => toggleTheme(btnRef.current)}
                  className="w-8 h-8 flex items-center justify-center border border-border hover:border-primary text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Toggle theme"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={isDark ? "sun" : "moon"}
                      initial={{ rotate: -60, opacity: 0, scale: 0.7 }}
                      animate={{ rotate: 0, opacity: 1, scale: 1 }}
                      exit={{ rotate: 60, opacity: 0, scale: 0.7 }}
                      transition={{ duration: 0.22 }}
                    >
                      {isDark ? <SunIcon /> : <MoonIcon />}
                    </motion.span>
                  </AnimatePresence>
                </button>
              </motion.div>

              <div
                className="flex-1 overflow-y-auto overscroll-contain px-5"
                onWheel={(e) => e.stopPropagation()}
              >
                <nav className="flex flex-col py-1">
                  {navIds.map((id, i) => (
                    <motion.button
                      key={id}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.32,
                        delay: 0.05 + i * 0.04,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      onClick={() => scroll(id)}
                      className={`
                        group flex items-center gap-4 py-3.5
                        border-b border-border/25 last:border-0
                        text-left transition-all duration-200
                        active:bg-primary/5 rounded-lg
                        ${activeSection === id ? "pl-1" : ""}
                      `}
                    >
                      <span
                        className="w-[2px] h-6 rounded-full flex-shrink-0 transition-colors duration-200"
                        style={{
                          background:
                            activeSection === id
                              ? "hsl(var(--primary))"
                              : "transparent",
                        }}
                      />

                      <span className="font-mono-custom text-[9px] tracking-[0.28em] uppercase text-primary w-5 shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      <span
                        className={`font-display font-black tracking-tight leading-tight transition-colors duration-200 ${
                          activeSection === id
                            ? "text-primary"
                            : "text-foreground group-active:text-primary"
                        }`}
                        style={{ fontSize: "clamp(1rem, 5vw, 1.6rem)" }}
                      >
                        {t(`nav.${id}`)}
                      </span>

                      <motion.svg
                        className="ml-auto flex-shrink-0"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        animate={{
                          color:
                            activeSection === id
                              ? "hsl(var(--primary))"
                              : "hsl(var(--muted-foreground))",
                          x: activeSection === id ? 2 : 0,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <polyline points="9 18 15 12 9 6" />
                      </motion.svg>
                    </motion.button>
                  ))}

                  {/* Games Section */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: 0.3 + navIds.length * 0.04,
                      duration: 0.35,
                    }}
                    className="border-t border-border/20 mt-2 pt-2"
                  >
                    <div className="px-5 py-2 mb-1">
                      <span className="font-mono-custom text-[8px] tracking-[0.28em] uppercase text-muted-foreground">
                        {t("nav.games") || "Games"}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 px-1">
                      {GAMES.map((game, i) => (
                        <motion.button
                          key={game.id}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            delay: 0.35 + navIds.length * 0.04 + i * 0.05,
                            duration: 0.3,
                          }}
                          onClick={() => {
                            haptic("light");
                            setActiveGame(game.id);
                            setOpen(false);
                          }}
                          className="p-3 rounded-lg border border-border/40 hover:border-primary text-left transition-all duration-200 active:bg-primary/10 group"
                        >
                          <div className="text-2xl mb-1">{game.icon}</div>
                          <span className="font-display font-black text-sm group-hover:text-primary transition-colors">
                            {game.label}
                          </span>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <MobileGameModal
        gameId={activeGame}
        onClose={() => setActiveGame(null)}
      />
    </div>
  );
}
