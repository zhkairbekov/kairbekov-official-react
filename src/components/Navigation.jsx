import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useTheme } from "../lib/theme-provider";
import RaccoonLogo from "./RaccoonLogo";

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

// Bottom tab bar items (mobile only)
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

export default function Navigation() {
  const { t, i18n } = useTranslation();
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark"),
  );

  // Keep isDark in sync with DOM class changes
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

  // Scroll listener for desktop navbar
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Active section detection via IntersectionObserver
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

  // Lock body scroll when overlay open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const scroll = (id) => {
    setOpen(false);
    window.dispatchEvent(new CustomEvent("nav-scroll"));
    setTimeout(
      () => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }),
      340,
    );
  };

  const cycleLang = () => {
    const cur = i18n.language.toLowerCase();
    const i = LANGS.indexOf(cur);
    i18n.changeLanguage(LANGS[(i + 1) % LANGS.length]);
  };

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  // ─────────────────────────────────────────────
  // Shared icon components
  // ─────────────────────────────────────────────
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

  // ─────────────────────────────────────────────
  // Full-screen overlay (shared, direction differs per breakpoint)
  // ─────────────────────────────────────────────
  const Overlay = ({ isMobile }) => (
    <motion.div
      initial={
        isMobile
          ? { clipPath: "inset(100% 0 0 0)" }
          : { clipPath: "inset(0 0 100% 0)" }
      }
      animate={
        isMobile
          ? { clipPath: "inset(0% 0 0 0)" }
          : { clipPath: "inset(0 0 0% 0)" }
      }
      exit={
        isMobile
          ? { clipPath: "inset(100% 0 0 0)" }
          : { clipPath: "inset(0 0 100% 0)" }
      }
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-40 bg-background flex flex-col overflow-hidden"
    >
      {/* Amber accent line */}
      <div
        className={`absolute bg-primary ${isMobile ? "bottom-0 left-0 right-0 h-[3px]" : "left-0 top-0 bottom-0 w-[3px]"}`}
      />

      <div
        className={`flex-1 max-w-7xl mx-auto w-full px-6 md:px-14 flex flex-col justify-between overflow-y-auto ${isMobile ? "pt-16 pb-28" : "pt-20 pb-6"}`}
      >
        {/* Nav links */}
        <nav className="flex flex-col mt-0">
          {navIds.map((id, i) => (
            <motion.button
              key={id}
              initial={{ opacity: 0, x: -28 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{
                duration: 0.38,
                delay: 0.04 + i * 0.045,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={() => scroll(id)}
              className={`group flex items-center gap-4 py-2.5 md:py-3.5 border-b border-border/30 text-left hover:pl-2 transition-all duration-300 last:border-0 ${activeSection === id ? "pl-2" : ""}`}
            >
              <span className="font-mono-custom text-[9px] tracking-[0.3em] uppercase text-primary w-5 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className={`font-display font-black tracking-tight leading-tight transition-colors duration-300 ${activeSection === id ? "text-primary" : "text-foreground group-hover:text-primary"}`}
                style={{ fontSize: "clamp(1.15rem, 4vw, 3rem)" }}
              >
                {t(`nav.${id}`)}
              </span>
              {activeSection === id && (
                <motion.span
                  layoutId="activeIndicator"
                  className="ml-auto w-1.5 h-1.5 rounded-full bg-primary shrink-0"
                />
              )}
            </motion.button>
          ))}
        </nav>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.48, duration: 0.4 }}
          className="flex items-end justify-between gap-4 pt-4 mt-4 border-t border-border/20"
        >
          <div className="flex flex-col gap-1">
            <span className="font-mono-custom text-[9px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.22em] uppercase text-muted-foreground">
              kairbekov.official@gmail.com
            </span>
            <span className="font-mono-custom text-[9px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.22em] uppercase text-muted-foreground">
              Astana, KZ · {new Date().getFullYear()}
            </span>
            <div className="flex gap-3 mt-3">
              {["RU", "KK", "EN"].map((lang) => (
                <button
                  key={lang}
                  onClick={() => i18n.changeLanguage(lang.toLowerCase())}
                  className={`font-mono-custom text-[9px] tracking-[0.25em] uppercase px-2 py-1 border transition-colors ${
                    i18n.language.toUpperCase() === lang
                      ? "border-primary text-primary bg-primary/10"
                      : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>

          {/* Theme toggle inside overlay (mobile) */}
          {isMobile && (
            <button
              onClick={toggleTheme}
              className="w-9 h-9 flex items-center justify-center border border-border hover:border-primary text-muted-foreground hover:text-primary transition-colors"
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
          )}

          {!isMobile && <RaccoonLogo size={64} animated />}
        </motion.div>
      </div>
    </motion.div>
  );

  return (
    <>
      {/* ══════════════════════════════════════
          DESKTOP — top navigation bar (md+)
          ══════════════════════════════════════ */}
      <motion.nav
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 2, ease: [0.22, 1, 0.36, 1] }}
        className={`hidden md:flex fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10 h-16 flex items-center justify-between w-full">
          {/* Logo */}
          <button onClick={() => scroll("home")} className="flex items-center">
            <RaccoonLogo size={50} />
            <div className="flex flex-col leading-none">
              <span className="font-display font-black text-[12px] tracking-widest uppercase text-foreground">
                Zhanat
              </span>
              <span className="font-mono-custom text-[8.5px] tracking-[0.28em] uppercase text-primary">
                Kairbekov
              </span>
            </div>
          </button>

          {/* Right controls */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Lang */}
            <button
              onClick={cycleLang}
              className="font-mono-custom text-[9px] tracking-[0.22em] uppercase text-muted-foreground hover:text-primary border border-transparent hover:border-border transition-all px-2 py-1.5"
            >
              {i18n.language.toUpperCase()}
            </button>

            {/* Theme */}
            <button
              onClick={toggleTheme}
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

            {/* Burger */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="flex flex-col justify-center items-end gap-[5px] w-9 h-9 ml-1"
              aria-label="Menu"
            >
              <motion.span
                animate={{ rotate: open ? 45 : 0, y: open ? 7 : 0, width: 20 }}
                className="block h-[1.5px] bg-foreground origin-center"
                style={{ width: 20 }}
              />
              <motion.span
                animate={{ opacity: open ? 0 : 1, width: open ? 0 : 13 }}
                className="block h-[1.5px] bg-primary origin-center"
                style={{ width: 13 }}
              />
              <motion.span
                animate={{
                  rotate: open ? -45 : 0,
                  y: open ? -7 : 0,
                  width: 20,
                }}
                className="block h-[1.5px] bg-foreground origin-center"
                style={{ width: 20 }}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Desktop overlay */}
      <AnimatePresence>
        {open && (
          <div className="hidden md:block">
            <Overlay isMobile={false} />
          </div>
        )}
      </AnimatePresence>

      {/* ══════════════════════════════════════
          MOBILE — top bar (<md)
          ══════════════════════════════════════ */}
      <motion.div
        initial={{ y: -56, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 2, ease: [0.22, 1, 0.36, 1] }}
        className={`md:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="h-14 flex items-center justify-between px-4">
          {/* Logo */}
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

          {/* Right controls */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={cycleLang}
              className="font-mono-custom text-[9px] tracking-[0.22em] uppercase text-muted-foreground hover:text-primary border border-transparent hover:border-border transition-all px-2 py-1.5"
            >
              {i18n.language.toUpperCase()}
            </button>
            <button
              onClick={toggleTheme}
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

      {/* ══════════════════════════════════════
          MOBILE — bottom tab bar (<md)
          ══════════════════════════════════════ */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 2, ease: [0.22, 1, 0.36, 1] }}
        className="md:hidden fixed bottom-0 left-0 right-0 z-50"
      >
        {/* Glass bar — overflow-visible so the logo can protrude above */}
        <div className="bg-background/92 backdrop-blur-2xl border-t border-border/60 shadow-[0_-4px_32px_rgba(0,0,0,0.12)] overflow-visible">
          <div className="flex items-stretch h-[62px] overflow-visible relative">
            {/* ── LEFT tabs: services + sites ── */}
            {BOTTOM_TABS.slice(0, 2).map(({ id, icon }) => {
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

            {/* ── CENTER: protruding logo ── */}
            {/* Spacer keeps flex layout; button is absolutely lifted above the bar */}
            <div className="relative w-16 shrink-0 flex items-end justify-center">
              <motion.button
                onClick={() => scroll("home")}
                aria-label="Home"
                whileTap={{ scale: 0.92 }}
                className={`
                  absolute -top-5 w-14 h-14 rounded-full
                  flex items-center justify-center
                  bg-background
                  border-2 transition-colors duration-300
                  shadow-[0_-4px_20px_rgba(0,0,0,0.18)]
                  ${
                    activeSection === "home" && !open
                      ? "border-primary shadow-[0_-4px_20px_hsl(38_95%_60%_/_0.25)]"
                      : "border-border hover:border-primary"
                  }
                `}
              >
                <RaccoonLogo size={30} />
                {/* Amber pulse ring when home is active */}
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

            {/* ── RIGHT tab: contacts ── */}
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

            {/* ── RIGHT tab: Menu / Burger ── */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="flex-1 flex flex-col items-center justify-center gap-[3px] relative"
              aria-label="Menu"
            >
              {open && (
                <motion.span
                  layoutId="mobileActiveTab"
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-[2px] bg-primary rounded-b-full"
                />
              )}

              {/* Burger → X (y=5.5px is geometrically exact for this container) */}
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

          {/* iPhone safe area spacer */}
          <div
            className="h-safe-area-inset-bottom"
            style={{ height: "env(safe-area-inset-bottom)" }}
          />
        </div>
      </motion.div>

      {/* Mobile overlay (slides up from bottom) */}
      <AnimatePresence>
        {open && (
          <div className="md:hidden">
            <Overlay isMobile={true} />
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
