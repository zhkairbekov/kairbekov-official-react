import React, { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ExternalLink, Github, X, ArrowUpRight } from "lucide-react";
import SectionHeader from "./components/SectionHeader";
import SectionTitle from "./components/SectionTitle";
import InfoBlock from "./components/InfoBlock";
import TagBadge from "./components/TagBadge";

// Добавь этот хук после импортов или прямо в компонент
const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(() => window.innerWidth >= 768);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)");
    const handler = (e) => setIsDesktop(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  return isDesktop;
};

const PROJECTS = [
  {
    id: 1,
    title: "Kairbekov Official",
    subtitle: "Personal portfolio website",
    image:
      "https://kairbekov-official.netlify.app/img/mockup/kairbekov-official.webp",
    github: "https://github.com/zhkairbekov/kairbekov-official-react",
    tags: ["React", "Vite", "i18n", "CSS3"],
    year: "2022",
  },
  {
    id: 2,
    title: "Downtown Astana",
    subtitle: "Business center website",
    image:
      "https://kairbekov-official.netlify.app/img/mockup/downtown_mockup.webp",
    site: "https://downtownastana.com/",
    tags: ["HTML5", "SCSS", "JavaScript"],
    year: "2026",
  },
  {
    id: 3,
    title: "Saukele.ru",
    subtitle: "National accessories online shop",
    image: "https://kairbekov-official.netlify.app/img/mockup/image78.webp",
    github: "https://github.com/zhkairbekov/saukele_online-shop",
    site: "https://www.kairbekoff.kz/saukele/",
    tags: ["Laravel", "PHP", "MySQL"],
    year: "2023",
  },
  {
    id: 4,
    title: "Velobike",
    subtitle: "Responsive site clone",
    image:
      "https://kairbekov-official.netlify.app/img/mockup/velobike_mockup.webp",
    github: "https://github.com/zhkairbekov/velobike",
    site: "https://kairbekov-velobike.netlify.app/",
    tags: ["HTML", "CSS", "JS"],
    year: "2025",
  },
  {
    id: 5,
    title: "Maze Escape Game",
    subtitle: "Browser-based maze game",
    image:
      "https://kairbekov-official.netlify.app/img/mockup/maze-escape-game_mockup.webp",
    github: "https://github.com/zhkairbekov/alem-project-js-1",
    site: "https://kairbekov-alem-js-1.netlify.app/",
    tags: ["JavaScript", "Canvas API"],
    year: "2025",
  },
  {
    id: 6,
    title: "Product Catalog",
    subtitle: "Product listing web app",
    image:
      "https://kairbekov-official.netlify.app/img/mockup/product-catalog_mockup.webp",
    github: "https://github.com/zhkairbekov/product-catalog",
    site: "https://kairbekov-product-catalog.netlify.app/",
    tags: ["React", "API"],
    year: "2025",
  },
];

function ProjectDescription({ projectId }) {
  const { t, i18n } = useTranslation();
  const key = `portfolio.projects.${projectId}`;

  if (!i18n.exists(`${key}.h2`)) return null;

  const features = t(`${key}.features`, { returnObjects: true });

  const infoBlocks = [
    { titleKey: "legalTitle", textKey: "legalText" },
    { titleKey: "disclaimerTitle", textKey: "disclaimerText" },
    { titleKey: "csTitle", textKey: "csText" },
    { titleKey: "uxTitle", textKey: "uxText" },
  ].filter((block) => i18n.exists(`${key}.${block.titleKey}`));

  return (
    <div className="border-t border-border/40 space-y-4">
      <h4 className="font-display font-bold text-base md:text-lg">
        {t(`${key}.h2`)}
      </h4>

      <p className="text-sm text-muted-foreground leading-relaxed">
        {t(`${key}.intro`)}
      </p>

      {Array.isArray(features) && features.length > 0 && (
        <div>
          <p className="text-xs font-mono-custom tracking-[0.15em] uppercase text-primary mb-3">
            {t(`${key}.featuresLabel`)}
          </p>
          <ul className="space-y-2">
            {features.map((feat, i) => (
              <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                <span className="text-primary shrink-0 mt-0.5">—</span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {i18n.exists(`${key}.note`) && (
        <InfoBlock text={t(`${key}.note`)} variant="border-left" />
      )}

      {infoBlocks.map((block) => (
        <InfoBlock
          key={block.titleKey}
          title={t(`${key}.${block.titleKey}`)}
          text={t(`${key}.${block.textKey}`)}
        />
      ))}
    </div>
  );
}

export default function Portfolio() {
  const { t } = useTranslation();
  const [hovered, setHovered] = useState(null);
  const [selected, setSelected] = useState(null);
  const [imgPos, setImgPos] = useState({ x: 0, y: 0 });
  const listRef = useRef(null);

  const onMouseMove = useCallback((e) => {
    if (!listRef.current || !isDesktop) return;
    const rect = listRef.current.getBoundingClientRect();
    setImgPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  }, [isDesktop]);

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

  useEffect(() => {
    const handleNavScroll = () => setSelected(null);
    window.addEventListener("nav-scroll", handleNavScroll);
    return () => window.removeEventListener("nav-scroll", handleNavScroll);
  }, []);

  const isDesktop = useIsDesktop();

  return (
    <section id="sites" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute top-10 right-6 font-display font-black text-[15vw] text-stroke-primary opacity-[0.03] select-none pointer-events-none leading-none">
        {PROJECTS.length}
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center gap-4 mb-16 md:mb-24 justify-between">
          <SectionHeader label={t("portfolio.sectionLabel")} />
          <span className="font-mono-custom text-[10px] tracking-[0.2em] text-muted-foreground shrink-0">
            {PROJECTS.length} {t("portfolio.sectionLabel").toLowerCase()}
          </span>
        </div>

        <SectionTitle>{t("portfolio.title")}</SectionTitle>
        <div className="mb-16 md:mb-24" />

        <div ref={listRef} className="relative" onMouseMove={onMouseMove}>
          <AnimatePresence>
            {hovered !== null && (
              <motion.div
                key={hovered}
                initial={{ opacity: 0, scale: 0.88, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.88, y: 8 }}
                transition={{ duration: 0.22 }}
                className="absolute pointer-events-none z-20 w-64 md:w-80 aspect-video overflow-hidden shadow-2xl border border-border"
                style={{ left: imgPos.x + 24, top: imgPos.y - 90 }}
              >
                <img
                  src={PROJECTS.find((p) => p.id === hovered)?.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/10" />
              </motion.div>
            )}
          </AnimatePresence>

          <div className="h-px bg-border" />

          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              onMouseEnter={() => isDesktop && setHovered(project.id)}
              onMouseLeave={() => isDesktop && setHovered(null)}
              onClick={() => setSelected(project)}
              data-cursor-label="VIEW"
              className="group relative flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-6 md:py-8 border-b border-border/50 last:border-0 hover:pl-4 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-primary/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              <div className="relative flex items-baseline gap-4 md:gap-6 z-10">
                <span className="font-mono-custom text-xs text-primary shrink-0 w-6 group-hover:text-primary transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display font-bold text-xl md:text-3xl group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
              </div>

              <div className="relative flex items-center gap-4 sm:gap-6 pl-10 sm:pl-0 z-10">
                <div className="hidden sm:flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <TagBadge key={tag} variant="interactive">
                      {tag}
                    </TagBadge>
                  ))}
                </div>
                <span className="text-xs font-mono-custom text-muted-foreground shrink-0">
                  {project.year}
                </span>
                <ArrowUpRight
                  size={18}
                  className="text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

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
            <div className="flex min-h-full justify-center pt-[81px] pb-[99px] md:px-4">
              <motion.div
                initial={{ opacity: 0, y: 32, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 32, scale: 0.96 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                onClick={(e) => e.stopPropagation()}
                className="bg-card border border-border w-full max-w-4xl overflow-hidden relative"
              >
                <div className="h-[3px] bg-primary" />

                <div className="relative aspect-video overflow-hidden bg-muted">
                  <img
                    src={selected.image}
                    alt={selected.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-6 font-display font-black text-white text-2xl md:text-4xl">
                    {selected.title}
                  </div>
                </div>

                <div className="p-6 md:p-10">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="flex flex-wrap gap-2">
                      {selected.tags.map((tag) => (
                        <TagBadge key={tag} variant="default">
                          {tag}
                        </TagBadge>
                      ))}
                    </div>
                    <button
                      onClick={() => setSelected(null)}
                      className="p-2 border border-border hover:bg-secondary hover:border-primary transition-colors shrink-0"
                    >
                      <X size={16} />
                    </button>
                  </div>

                  <ProjectDescription projectId={selected.id} />

                  <div className="flex flex-wrap gap-3 mt-8">
                    {selected.site && (
                      <a
                        href={selected.site}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-display font-bold text-xs tracking-[0.2em] uppercase hover:opacity-90 transition-opacity"
                      >
                        <ExternalLink size={14} />
                        {t("portfolio.viewSite")}
                      </a>
                    )}
                    {selected.github && (
                      <a
                        href={selected.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:bg-secondary font-display font-bold text-xs tracking-[0.2em] uppercase transition-colors"
                      >
                        <Github size={14} />
                        {t("portfolio.viewCode")}
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
