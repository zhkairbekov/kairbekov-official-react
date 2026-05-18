import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const LANG_MAP = {
  ru: "ru",
  kk: "kk",
  en: "en",
};

export function useHtmlLang() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const update = (lng) => {
      const lang = LANG_MAP[lng?.toLowerCase()] ?? "en";
      document.documentElement.lang = lang;
    };

    update(i18n.language);
    i18n.on("languageChanged", update);
    return () => i18n.off("languageChanged", update);
  }, [i18n]);
}
