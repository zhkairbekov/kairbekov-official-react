import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useTheme } from "../lib/theme-provider";
import RaccoonLogo from "./RaccoonLogo";

const navIds = ["home", "about", "services", "process", "sites", "journey", "certs", "contacts"];
const LANGS = ["ru", "kk", "en"];

export default function Navigation() {
  const { t, i18n } = useTranslation();
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isDark = document.documentElement.classList.contains("dark");

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const scroll = (id) => {
    setOpen(false);
    window.dispatchEvent(new CustomEvent("nav-scroll"));
    setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 340);
  };

  const cycleLang = () => {
    const cur = i18n.language.toLowerCase();
    const i = LANGS.indexOf(cur);
    i18n.changeLanguage(LANGS[(i + 1) % LANGS.length]);
  };

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <>
      {/* ── Main bar ── */}
      <motion.nav
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 2, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-10 h-16 flex items-center justify-between">

          {/* Logo */}
          <button onClick={() => scroll("home")} className="flex items-center gap-2.5">
            <RaccoonLogo size={34} />
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
                  {isDark ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/>
                      <line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/>
                      <line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                    </svg>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                    </svg>
                  )}
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
                animate={{ rotate: open ? -45 : 0, y: open ? -7 : 0, width: 20 }}
                className="block h-[1.5px] bg-foreground origin-center"
                style={{ width: 20 }}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ── Full-screen overlay ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-background flex flex-col overflow-hidden"
          >
            {/* Amber accent line left */}
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-primary" />

            <div className="flex-1 max-w-7xl mx-auto w-full px-6 md:px-14 pt-20 pb-6 md:pb-10 flex flex-col justify-between overflow-y-auto">
              {/* Nav links */}
              <nav className="flex flex-col mt-0">
                {navIds.map((id, i) => (
                  <motion.button
                    key={id}
                    initial={{ opacity: 0, x: -28 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{ duration: 0.42, delay: 0.06 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                    onClick={() => scroll(id)}
                    className="group flex items-center gap-4 py-2.5 md:py-3.5 border-b border-border/30 text-left hover:pl-2 transition-all duration-300 last:border-0"
                  >
                    <span className="font-mono-custom text-[9px] tracking-[0.3em] uppercase text-primary w-5 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="font-display font-black tracking-tight leading-tight text-foreground group-hover:text-primary transition-colors duration-300"
                      style={{ fontSize: "clamp(1.15rem, 4vw, 3rem)" }}
                    >
                      {t(`nav.${id}`)}
                    </span>
                  </motion.button>
                ))}
              </nav>

              {/* Bottom row */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.4 }}
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
                <RaccoonLogo size={64} animated />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
