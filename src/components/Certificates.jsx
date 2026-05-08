import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { GraduationCap, Award, BookOpen } from "lucide-react";

function getIcon(type) {
  const t = type.toLowerCase();
  if (t.includes("диплом") || t.includes("diploma")) return <GraduationCap size={22} strokeWidth={1.5} />;
  if (t.includes("обучен") || t.includes("study") || t.includes("оқу") || t.includes("intensiv")) return <BookOpen size={22} strokeWidth={1.5} />;
  return <Award size={22} strokeWidth={1.5} />;
}

export default function Certificates() {
  const { t } = useTranslation();
  const items = t("certs.items", { returnObjects: true });

  return (
    <section id="certs" className="relative py-24 md:py-40 overflow-hidden bg-secondary/20">
      {/* Watermark */}
      <div className="absolute top-0 right-0 pointer-events-none select-none">
        <span
          className="font-display font-black text-stroke opacity-[0.025] leading-none whitespace-nowrap"
          style={{ fontSize: "clamp(8rem, 20vw, 18rem)" }}
        >
          EDU
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center gap-4 mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-mono-custom tracking-[0.3em] uppercase text-muted-foreground"
          >
            / {t("certs.sectionLabel")}
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
          className="font-display font-black tracking-tight mb-16 md:mb-24"
          style={{ fontSize: "clamp(2.5rem, 7vw, 7rem)" }}
        >
          {t("certs.title")}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {(Array.isArray(items) ? items : []).map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.09 }}
              className="group relative bg-background p-8 md:p-10 overflow-hidden"
            >
              {/* Hover fill */}
              <motion.div
                className="absolute inset-0 bg-primary/6"
                initial={false}
                whileHover={{ opacity: 1 }}
                style={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="p-3 border border-border text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300">
                    {getIcon(item.type)}
                  </div>
                  <span className="font-mono-custom text-xs text-muted-foreground">{item.year}</span>
                </div>

                <span className="inline-block text-[9px] font-mono-custom tracking-[0.22em] uppercase px-2 py-1 bg-primary/10 text-primary mb-4">
                  {item.type}
                </span>

                <h3 className="font-display font-bold text-lg md:text-xl leading-snug mb-2 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-sm font-mono-custom text-muted-foreground">{item.org}</p>
              </div>

              {/* Large background number */}
              <div className="absolute bottom-3 right-5 font-display font-black text-8xl text-foreground/[0.03] select-none pointer-events-none leading-none">
                {String(i + 1).padStart(2, "0")}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
