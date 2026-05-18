import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Github, Instagram, Linkedin, Send, ArrowUpRight } from "lucide-react";

const socials = [
  {
    icon: <Github size={18} strokeWidth={1.5} />,
    label: "GitHub",
    handle: "@zhkairbekov",
    href: "https://github.com/zhkairbekov",
  },
  {
    icon: <Send size={18} strokeWidth={1.5} />,
    label: "Telegram",
    handle: "@kairbekoff",
    href: "https://t.me/kairbekoff",
  },
  {
    icon: <Instagram size={18} strokeWidth={1.5} />,
    label: "Instagram",
    handle: "@kairbekov.official",
    href: "https://www.instagram.com/kairbekov.official/",
  },
  {
    icon: <Linkedin size={18} strokeWidth={1.5} />,
    label: "LinkedIn",
    handle: "Zhanat Kairbekov",
    href: "https://www.linkedin.com/in/zhanat-kairbekov-963816372/",
  },
];

export default function Contacts() {
  const { t } = useTranslation();

  return (
    <section id="contacts" className="relative overflow-hidden">
      <div className="bg-primary text-primary-foreground py-3 overflow-hidden border-b border-primary/30">
        <div className="flex gap-0 animate-marquee whitespace-nowrap">
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="font-display font-black text-sm md:text-base tracking-[0.18em] uppercase px-8"
            >
              {t("contacts.title")} · LET&apos;S BUILD ·
            </span>
          ))}
        </div>
      </div>

      <div className="relative py-24 md:pt-40 pb-[40px]">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 20% 50%, hsl(38 95% 60% / 0.05) 0%, transparent 60%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-center gap-4 mb-16 md:mb-24">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[11px] font-mono-custom tracking-[0.3em] uppercase text-muted-foreground"
            >
              / {t("contacts.sectionLabel")}
            </motion.p>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1 h-px bg-border origin-left"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-start">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <h2
                  className="font-display font-black tracking-tight leading-none mb-6"
                  style={{ fontSize: "clamp(2.5rem, 6vw, 5.5rem)" }}
                >
                  {t("contacts.title")}
                </h2>
                <p className="text-muted-foreground text-base md:text-lg mb-10 max-w-md leading-relaxed">
                  {t("contacts.subtitle")}
                </p>

                <div className="flex items-center gap-3 mb-10">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                  </span>
                  <span className="text-[11px] font-mono-custom tracking-[0.25em] uppercase text-primary">
                    {t("contacts.availability")}
                  </span>
                </div>

                <div className="flex flex-wrap gap-3">
                  <motion.a
                    href="https://t.me/kairbekoff"
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 px-5 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground font-display font-bold text-xs tracking-[0.2em] uppercase"
                  >
                    <Send size={15} />
                    {t("contacts.cta")}
                  </motion.a>
                  <motion.a
                    href="https://github.com/zhkairbekov"
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-flex items-center gap-2 px-5 sm:px-8 py-3 sm:py-4 border border-foreground text-foreground font-display font-bold text-xs tracking-[0.2em] uppercase hover:bg-foreground hover:text-background transition-colors"
                  >
                    <Github size={15} />
                    {t("contacts.ctaEmail")}
                  </motion.a>
                </div>
              </motion.div>
            </div>

            <div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="divide-y divide-border/50"
              >
                {socials.map((social, i) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.25 + i * 0.08 }}
                    className="group flex items-center justify-between py-5 hover:pl-2 transition-all duration-300"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-muted-foreground group-hover:text-primary transition-colors">
                        {social.icon}
                      </span>
                      <div>
                        <p className="font-display font-bold text-base md:text-lg group-hover:text-primary transition-colors">
                          {social.label}
                        </p>
                        <p className="text-xs font-mono-custom text-muted-foreground">
                          {social.handle}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-24 md:mt-32 pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <p className="text-xs font-mono-custom text-muted-foreground">
              {t("contacts.footer")}{" "}
              <a
                href="https://www.instagram.com/kairbekov.official/"
                target="_blank"
                className="text-foreground transition-colors duration-300 hover:text-primary"
              >
                @kairbekov.official
              </a>
            </p>
            <p className="text-xs font-mono-custom text-muted-foreground">
              Astana, Kazakhstan — {new Date().getFullYear()}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
