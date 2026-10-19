import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Quote, ExternalLink, Star, CheckCircle2, Sparkles, Building2 } from "lucide-react";
import SectionHeader from "./components/SectionHeader";
import SectionTitle from "./components/SectionTitle";
import TagBadge from "./components/TagBadge";

export default function Testimonials() {
  const { t } = useTranslation();
  const items = t("testimonials.items", { returnObjects: true });

  if (!Array.isArray(items) || items.length === 0) return null;

  return (
    <section
      id="testimonials"
      className="relative py-24 md:py-32 overflow-hidden bg-secondary/15 border-t border-border/30"
    >
      {/* Decorative background watermark */}
      <div className="absolute top-10 right-6 font-display font-black text-[13vw] text-stroke-primary opacity-[0.03] select-none pointer-events-none leading-none">
        TRUST
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="flex items-center gap-4 mb-16 md:mb-20 justify-between">
          <SectionHeader label={t("testimonials.sectionLabel")} />
          <span className="font-mono-custom text-[10px] tracking-[0.2em] text-muted-foreground shrink-0 uppercase">
            {items.length} {t("testimonials.sectionLabel").toLowerCase()}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 lg:gap-16 items-start mb-14 md:mb-20">
          <div>
            <SectionTitle>{t("testimonials.title")}</SectionTitle>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="text-muted-foreground max-w-2xl text-sm md:text-base leading-relaxed mt-4"
            >
              {t("testimonials.subtitle")}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 px-4 py-2.5 bg-card/70 border border-border/60 self-start lg:self-center"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-primary text-primary" />
              ))}
            </div>
            <span className="font-mono-custom text-xs font-bold text-foreground">
              5.0
            </span>
            <span className="text-border">|</span>
            <span className="font-mono-custom text-[11px] text-muted-foreground tracking-wider uppercase">
              100% Recommended
            </span>
          </motion.div>
        </div>

        {/* Testimonials List */}
        <div className="space-y-12">
          {items.map((item, idx) => (
            <motion.div
              key={item.id || idx}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: idx * 0.1 }}
              className="relative bg-card/70 backdrop-blur-md border border-border/70 hover:border-primary/40 transition-colors duration-300 p-6 sm:p-10 md:p-14 overflow-hidden group shadow-lg"
            >
              {/* Top Accent Gradient Line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-primary/80 to-transparent" />

              {/* Decorative Background Quote Icon */}
              <div className="absolute -bottom-8 -right-8 text-foreground/[0.025] group-hover:text-primary/[0.05] transition-colors pointer-events-none select-none">
                <Quote size={240} />
              </div>

              {/* Card Header Row */}
              <div className="relative flex flex-wrap items-center justify-between gap-4 mb-8">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 border border-primary/25 text-primary text-xs font-mono-custom tracking-[0.15em] uppercase">
                    <CheckCircle2 size={13} className="text-primary" />
                    <span>{t("testimonials.verifiedBadge")}</span>
                  </div>
                  <span className="text-xs font-mono-custom text-muted-foreground">
                    {item.projectType} · {item.year}
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  {[...Array(item.rating || 5)].map((_, i) => (
                    <Star
                      key={i}
                      size={15}
                      className="fill-primary text-primary"
                    />
                  ))}
                </div>
              </div>

              {/* Quote Mark & Body Content */}
              <div className="relative z-10 mb-8">
                <div className="flex gap-4 sm:gap-6 items-start">
                  <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                    <Quote size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <div className="space-y-4 flex-1">
                    {Array.isArray(item.text) ? (
                      item.text.map((paragraph, pIdx) => (
                        <p
                          key={pIdx}
                          className="text-foreground/90 leading-relaxed text-sm sm:text-base font-sans"
                        >
                          {paragraph}
                        </p>
                      ))
                    ) : (
                      <p className="text-foreground/90 leading-relaxed text-sm sm:text-base font-sans">
                        {item.text}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Highlight Tags */}
              {Array.isArray(item.tags) && item.tags.length > 0 && (
                <div className="relative z-10 flex flex-wrap gap-2 mb-8 sm:pl-16 md:pl-[72px]">
                  {item.tags.map((tag, tIdx) => (
                    <TagBadge key={tIdx} variant="interactive">
                      {tag}
                    </TagBadge>
                  ))}
                </div>
              )}

              {/* Card Footer: Author & Project Link */}
              <div className="relative z-10 pt-6 border-t border-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-none bg-primary/15 border border-primary/30 flex items-center justify-center font-display font-black text-primary text-lg shrink-0">
                    <Building2 size={22} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-base sm:text-lg text-foreground">
                      {item.clientName}
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground font-mono-custom mt-0.5">
                      {item.clientRole} · {item.projectTitle}
                    </p>
                  </div>
                </div>

                {item.projectUrl && (
                  <a
                    href={item.projectUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 self-start sm:self-auto px-5 py-2.5 bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground border border-primary/30 transition-all duration-300 font-display font-bold text-xs tracking-[0.18em] uppercase shrink-0"
                  >
                    <ExternalLink size={14} />
                    <span>{t("testimonials.viewProject")}</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
