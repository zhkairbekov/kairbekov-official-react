import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Journey() {
  const { t } = useTranslation();
  const items = t("journey.items", { returnObjects: true });
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineH = useTransform(scrollYProgress, [0.05, 0.9], ["0%", "100%"]);

  return (
    <section id="journey" ref={ref} className="relative py-24 md:py-40 overflow-hidden">
      <div className="absolute top-0 right-0 w-[3px] h-full bg-primary/20" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center gap-4 mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-mono-custom tracking-[0.3em] uppercase text-muted-foreground"
          >
            / {t("journey.sectionLabel")}
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 h-px bg-border origin-left"
          />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display font-black tracking-tight mb-20 md:mb-28"
          style={{ fontSize: "clamp(2.5rem, 7vw, 7rem)" }}
        >
          {t("journey.title")}
        </motion.h2>

        <div className="relative">
          <div className="absolute left-[11px] md:left-[190px] top-0 bottom-0 w-px bg-border overflow-hidden">
            <motion.div className="absolute top-0 w-full bg-primary" style={{ height: lineH }} />
          </div>

          {(Array.isArray(items) ? items : []).map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col md:flex-row gap-4 md:gap-0 py-7 md:py-8 border-b border-border/30 last:border-0"
            >
              <div className="md:w-[170px] md:shrink-0 flex items-baseline gap-3 md:block">
                <div className="w-[22px] h-[22px] shrink-0 flex items-center justify-center mt-0.5 md:hidden">
                  <div className="w-[9px] h-[9px] rounded-full border-2 border-primary bg-background group-hover:bg-primary transition-colors" />
                </div>
                <span className="font-mono-custom text-sm font-bold text-primary">{item.year}</span>
              </div>

              <div
                className="hidden md:flex absolute w-[22px] h-[22px] items-center justify-center"
                style={{ left: "calc(190px - 11px)", top: "50%", transform: "translate(0, -50%)" }}
              >
                <div className="w-[9px] h-[9px] rounded-full border-2 border-primary bg-background group-hover:bg-primary transition-colors duration-300" />
              </div>

              <div className="md:pl-12 pl-[34px]">
                <h3 className="font-display font-bold text-lg md:text-2xl mb-1.5 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-lg">{item.desc}</p>
              </div>

              <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 font-display font-black text-8xl text-foreground/[0.025] select-none pointer-events-none leading-none">
                {String(i + 1).padStart(2, "0")}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
