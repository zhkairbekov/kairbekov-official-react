import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Search, Layers, Code2, Rocket } from "lucide-react";

const ICONS = [
  <Search size={28} strokeWidth={1.5} />,
  <Layers size={28} strokeWidth={1.5} />,
  <Code2 size={28} strokeWidth={1.5} />,
  <Rocket size={28} strokeWidth={1.5} />,
];

export default function Process() {
  const { t } = useTranslation();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineW = useTransform(scrollYProgress, [0.1, 0.8], ["0%", "100%"]);

  const steps = t("process.steps", { returnObjects: true });

  return (
    <section id="process" ref={ref} className="relative py-24 md:py-40 overflow-hidden">
      <div className="absolute top-0 right-0 w-1 h-full bg-primary/20" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center gap-4 mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-mono-custom tracking-[0.3em] uppercase text-muted-foreground"
          >
            / {t("process.sectionLabel")}
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 h-px bg-border origin-left"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-16 items-start mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display font-black tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 7vw, 7rem)" }}
          >
            {t("process.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-xs leading-relaxed mt-4 lg:mt-6"
          >
            {t("process.subtitle")}
          </motion.p>
        </div>

        <div className="relative hidden md:block h-px bg-border mb-0 mx-0">
          <motion.div className="absolute top-0 left-0 h-full bg-primary" style={{ width: lineW }} />
          {(Array.isArray(steps) ? steps : []).map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-border border-2 border-background"
              style={{ left: `${(i / (steps.length - 1)) * 100}%`, transform: "translate(-50%, -50%)" }}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {(Array.isArray(steps) ? steps : []).map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative border border-border bg-card hover:bg-secondary/30 transition-colors duration-300 p-8 md:p-10"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <div
                className="absolute bottom-4 right-5 font-display font-black select-none pointer-events-none leading-none text-foreground/[0.04]"
                style={{ fontSize: "clamp(4rem, 8vw, 6rem)" }}
              >
                {step.num}
              </div>

              <div className="relative z-10 flex flex-col gap-5">
                <div className="text-primary group-hover:scale-110 transition-transform duration-300 origin-left">
                  {ICONS[i]}
                </div>
                <div>
                  <span className="font-mono-custom text-[10px] tracking-[0.25em] uppercase text-primary mb-2 block">
                    {step.num}
                  </span>
                  <h3 className="font-display font-black text-xl md:text-2xl mb-3 group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
