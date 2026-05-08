import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Code2, Palette, Cpu, Globe, Plus, Minus } from "lucide-react";

const ICONS = [
  <Code2 size={22} strokeWidth={1.5} />,
  <Palette size={22} strokeWidth={1.5} />,
  <Cpu size={22} strokeWidth={1.5} />,
  <Globe size={22} strokeWidth={1.5} />,
];

export default function Services() {
  const { t } = useTranslation();
  const services = t("services.items", { returnObjects: true });
  const [expanded, setExpanded] = useState(null);

  return (
    <section
      id="services"
      className="relative py-24 md:py-40 bg-secondary/20 overflow-hidden"
    >
      {/* Левый акцент */}
      <div className="absolute top-0 left-0 w-[3px] h-full bg-primary/25" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Заголовок */}
        <div className="flex items-center gap-4 mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[11px] font-mono-custom tracking-[0.3em] uppercase text-muted-foreground"
          >
            / {t("services.sectionLabel")}
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 h-px bg-border origin-left"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-20 items-start mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display font-black tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 7vw, 7rem)" }}
          >
            {t("services.title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-xs leading-relaxed text-sm mt-2 lg:mt-5"
          >
            {t("services.subtitle")}
          </motion.p>
        </div>

        {/* Аккордеон */}
        <div className="divide-y divide-border border-t border-border">
          {(Array.isArray(services) ? services : []).map((svc, i) => {
            const isOpen = expanded === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.55 }}
              >
                <motion.button
                  // Используем motion.button для поддержки whileHover
                  whileHover="hover"
                  onClick={() => setExpanded(isOpen ? null : i)}
                  className="service-dropdown-btn pr-2 pl-2 group relative w-full flex items-center justify-between gap-6 py-8 md:py-10 text-left overflow-hidden"
                >
                  {/* Фоновая заливка (Hover Fill) */}
                  <motion.div
                    className="absolute inset-0 bg-primary origin-left"
                    style={{ pointerEvents: "none" }} // Чтобы не перехватывал клики
                    initial={{ scaleX: 0 }}
                    // Если открыто — всегда 1, если закрыто — реагирует на hover родителя
                    animate={{ scaleX: isOpen ? 1 : 0 }}
                    variants={{
                      hover: { scaleX: 1 },
                    }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  />

                  {/* Контент слева */}
                  <div className="relative flex items-center gap-3 sm:gap-5 md:gap-8 z-10 min-w-0 pointer-events-none">
                    <span
                      className={`font-mono-custom text-xs transition-colors duration-300 shrink-0 ${
                        isOpen ? "text-primary-foreground" : "text-primary"
                      } group-hover:text-primary-foreground`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`hidden sm:block text-muted-foreground transition-colors duration-300 shrink-0 ${
                        isOpen ? "text-primary-foreground/70" : ""
                      } group-hover:text-primary-foreground/70`}
                    >
                      {ICONS[i] ?? ICONS[0]}
                    </span>
                    <span
                      className={`font-display font-black tracking-tight leading-tight transition-colors duration-300 ${
                        isOpen ? "text-primary-foreground" : "text-foreground"
                      } group-hover:text-primary-foreground`}
                      style={{ fontSize: "clamp(1.1rem, 3.5vw, 3rem)" }}
                    >
                      {svc.title}
                    </span>
                  </div>

                  {/* Иконка справа */}
                  <div
                    className={`relative z-10 shrink-0 transition-colors duration-300 ${
                      isOpen
                        ? "text-primary-foreground"
                        : "text-muted-foreground"
                    } group-hover:text-primary-foreground`}
                  >
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </motion.button>

                {/* Выпадающий контент */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pt-1 pl-4 sm:pl-[70px] md:pl-[96px] pr-4 sm:pr-8 pt-[16px]">
                        <p className="text-muted-foreground leading-relaxed mb-5 max-w-xl">
                          {svc.desc}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {(svc.tags || []).map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] font-mono-custom tracking-[0.18em] uppercase px-3 py-1.5 border border-border text-muted-foreground"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
