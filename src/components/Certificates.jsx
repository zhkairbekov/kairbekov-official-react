import React, { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { GraduationCap, Award, BookOpen, ExternalLink, X } from "lucide-react";

function getIcon(type) {
  const t = type.toLowerCase();
  if (t.includes("диплом") || t.includes("diploma")) return <GraduationCap size={22} strokeWidth={1.5} />;
  if (t.includes("обучен") || t.includes("study") || t.includes("оқу") || t.includes("intensiv")) return <BookOpen size={22} strokeWidth={1.5} />;
  return <Award size={22} strokeWidth={1.5} />;
}

export default function Certificates() {
  const { t } = useTranslation();
  const items = t("certs.items", { returnObjects: true });

  const [hovered, setHovered] = useState(null);
  const [selected, setSelected] = useState(null);
  const [imgPos, setImgPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const onMouseMove = useCallback((e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setImgPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, []);

  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

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

        <div ref={containerRef} onMouseMove={onMouseMove} className="relative">
          {/* Hover preview image */}
          <AnimatePresence>
            {hovered !== null && (
              <motion.div
                key={hovered}
                initial={{ opacity: 0, scale: 0.88, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.88, y: 8 }}
                transition={{ duration: 0.22 }}
                className="absolute pointer-events-none z-20 w-64 md:w-80 z-[99999] overflow-hidden shadow-2xl border border-border"
                style={{ left: imgPos.x + 24, top: imgPos.y - 90 }}
              >
                <img
                  src={items[hovered]?.media?.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/10" />
              </motion.div>
            )}
          </AnimatePresence>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {(Array.isArray(items) ? items : []).map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.09 }}
                onMouseEnter={() => item.media && setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => item.media && setSelected(item)}
                data-cursor-label={item.media ? "VIEW" : undefined}
                className={`group relative bg-background p-8 md:p-10 overflow-hidden ${item.media ? "cursor-pointer" : ""
                  }`}
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
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl overflow-y-auto"
            onClick={() => setSelected(null)}
            data-lenis-prevent="true"
          >
            <div className="flex min-h-full justify-center pt-[81px] pb-[16px] md:px-4">
              <motion.div
                initial={{ opacity: 0, y: 32, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 32, scale: 0.96 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                onClick={(e) => e.stopPropagation()}
                className="bg-card border border-border w-full max-w-4xl overflow-hidden relative h-full"
              >
                <div className="h-[3px] bg-primary" />

                <div className="relative aspect-[1.414/1] md:aspect-video overflow-hidden bg-muted">
                  <img
                    src={selected.media?.image}
                    alt={selected.title}
                    className="w-full h-full object-contain bg-muted"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-6 right-6 font-display font-black text-white text-xl md:text-3xl leading-tight drop-shadow-md">
                    {selected.title}
                  </div>
                </div>

                <div className="p-6 md:p-10">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <span className="inline-block text-[10px] font-mono-custom tracking-[0.18em] uppercase px-3 py-1.5 border border-border text-muted-foreground">
                      {selected.type}
                    </span>
                    <button
                      onClick={() => setSelected(null)}
                      className="p-2 border border-border hover:bg-secondary hover:border-primary transition-colors shrink-0"
                    >
                      <X size={16} />
                    </button>
                  </div>

                  <p className="text-sm font-mono-custom text-muted-foreground mb-8">
                    {selected.org} • {selected.year}
                  </p>

                  <div className="flex flex-wrap gap-3 mt-4">
                    {selected.media?.pdf && (
                      <a
                        href={selected.media.pdf}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-display font-bold text-xs tracking-[0.2em] uppercase hover:opacity-90 transition-opacity"
                      >
                        <ExternalLink size={14} />
                        {t("certs.viewPdf", "Открыть PDF")}
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
