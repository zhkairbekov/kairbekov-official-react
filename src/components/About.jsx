import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";
import RaccoonLogo from "./RaccoonLogo";

function CountUp({ value, inView }) {
  const num = parseInt(value);
  const suffix = value.replace(/^\d+/, "");
  const isNumeric = !isNaN(num);
  const [display, setDisplay] = React.useState(isNumeric ? 0 : value);

  React.useEffect(() => {
    if (!inView || !isNumeric) return;
    let start = 0;
    const duration = 1600;
    const step = duration / num;
    const t = setInterval(() => {
      start += 1;
      setDisplay(start);
      if (start >= num) clearInterval(t);
    }, step);
    return () => clearInterval(t);
  }, [inView, num, isNumeric]);

  if (!isNumeric) return <span>{value}</span>;
  return (
    <span>
      {display}
      {suffix}
    </span>
  );
}

const SKILLS = [
  "React",
  "TypeScript",
  "Next.js",
  "Node.js",
  "SCSS",
  "Tailwind",
  "Framer Motion",
  "Figma",
  "Git",
  "REST API",
  "Laravel",
  "PHP",
  "MySQL",
  "Vite",
  "i18n",
  "Canvas API",
  "Three.js",
  "GSAP",
];

export default function About() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const statsRef = useRef(null);
  const inView = useInView(statsRef, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const raccY = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const rawStats = t("about.stats", { returnObjects: true });
  const stats = Array.isArray(rawStats)
    ? rawStats
    : [
        { val: "2023", label: "Год старта" },
        { val: "6+", label: "Проектов" },
        { val: "3", label: "Языка" },
        { val: "∞", label: "Стремлений" },
      ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-24 md:py-40 overflow-hidden"
    >
      {/* Wavy amber glow bg */}
      <motion.div
        style={{
          y: bgY,
          background:
            "radial-gradient(circle, hsl(38 95% 60% / 0.07) 0%, transparent 65%)",
          filter: "blur(60px)",
        }}
        className="absolute -top-60 -right-40 w-[700px] h-[700px] rounded-full pointer-events-none"
        aria-hidden
      />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-mono-custom tracking-[0.3em] uppercase text-muted-foreground"
          >
            / {t("about.sectionLabel")}
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 h-px bg-border origin-left"
          />
        </div>

        {/* Main two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_440px] gap-16 lg:gap-24 items-center mb-24 md:mb-32">
          {/* Left: Text */}
          <div>
            <div className="overflow-hidden mb-2">
              <motion.h2
                initial={{ opacity: 0, y: 100, rotate: 2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="font-display font-black tracking-tight leading-[0.9]"
                style={{ fontSize: "clamp(3rem, 8vw, 8rem)" }}
              >
                {t("about.title")}
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-8 space-y-4 text-muted-foreground leading-relaxed text-base md:text-lg max-w-xl"
            >
              <p>{t("about.bio1")}</p>
              <p>{t("about.bio2")}</p>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="https://t.me/kairbekoff"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 sm:px-7 py-3 sm:py-3.5 bg-primary text-primary-foreground font-display font-bold text-xs tracking-[0.2em] uppercase hover:opacity-90 transition-opacity"
              >
                {t("contacts.cta")} →
              </a>
              <a
                href="https://github.com/zhkairbekov"
                target="_blank"
                rel="noreferrer"
                className="font-mono-custom text-[10px] tracking-[0.22em] uppercase text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
              >
                <span className="w-6 h-px bg-muted-foreground" /> GitHub
              </a>
            </motion.div>
          </div>

          {/* Right: Raccoon in frame */}
          <motion.div
            style={{ y: raccY }}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center"
          >
            <div className="relative">
              <div className="relative p-5 sm:p-8 border border-border bg-card/50 backdrop-blur-sm">
                {/* Corner accents */}
                {[
                  "top-0 left-0 border-t-2 border-l-2",
                  "top-0 right-0 border-t-2 border-r-2",
                  "bottom-0 left-0 border-b-2 border-l-2",
                  "bottom-0 right-0 border-b-2 border-r-2",
                ].map((cls, i) => (
                  <div
                    key={i}
                    className={`absolute w-5 h-5 border-primary ${cls}`}
                  />
                ))}

                <div
                  className="absolute inset-0 rounded-full pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle, hsl(38 95% 60% / 0.12) 0%, transparent 70%)",
                  }}
                />
                <RaccoonLogo size={180} glowing animated />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-5 py-2 whitespace-nowrap"
              >
                <span className="font-mono-custom text-[10px] tracking-[0.22em] uppercase font-bold">
                  3+ {t("about.yearsLabel")}
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border"
        >
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background p-8 md:p-10 flex flex-col gap-2"
            >
              <span
                className="font-display font-black text-primary leading-none"
                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
              >
                <CountUp value={s.val} inView={inView} />
              </span>
              <span className="font-mono-custom text-[10px] tracking-[0.22em] uppercase text-muted-foreground">
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Skills marquee */}
        <div className="mt-16 overflow-hidden border-t border-b border-border/50 py-4">
          <div
            className="flex gap-8 animate-marquee whitespace-nowrap"
            aria-hidden
          >
            {[...SKILLS, ...SKILLS].map((s, i) => (
              <span
                key={i}
                className="font-mono-custom text-[11px] tracking-[0.22em] uppercase text-muted-foreground flex items-center gap-8"
              >
                {s}
                <span className="w-1 h-1 rounded-full bg-primary inline-block" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
