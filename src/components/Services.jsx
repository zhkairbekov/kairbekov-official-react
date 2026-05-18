import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Code2, Palette, Cpu, Globe, Plus, Minus } from "lucide-react";
import SectionHeader from "./components/SectionHeader";
import SectionTitle from "./components/SectionTitle";
import TagBadge from "./components/TagBadge";

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
      <div className="absolute top-0 left-0 w-[3px] h-full bg-primary/25" />

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <SectionHeader label={t("services.sectionLabel")} />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-20 items-start mb-16 md:mb-24">
          <SectionTitle>{t("services.title")}</SectionTitle>
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
                  whileHover="hover"
                  onClick={() => setExpanded(isOpen ? null : i)}
                  className="service-dropdown-btn pr-2 pl-2 group relative w-full flex items-center justify-between gap-6 py-8 md:py-10 text-left overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-primary origin-left"
                    style={{ pointerEvents: "none" }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isOpen ? 1 : 0 }}
                    variants={{
                      hover: { scaleX: 1 },
                    }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  />

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
                            <TagBadge key={tag} variant="default">
                              {tag}
                            </TagBadge>
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
