import { useEffect } from "react";
import { seoConfig } from "../lib/seo.js";

export function useYandexMetrika() {
  useEffect(() => {
    const config = seoConfig.yandexMetrika;

    // Инициализируем ym глобально
    window.ym =
      window.ym ||
      function () {
        (window.ym.a = window.ym.a || []).push(arguments);
      };
    window.ym.l = 1 * new Date();

    // Загружаем скрипт
    const script = document.createElement("script");
    script.async = true;
    script.src = config.scriptUrl;
    script.onerror = () => {};

    document.head.appendChild(script);

    // Инициализируем метрику
    window.ym(config.id, "init", {
      ssr: true,
      webvisor: true,
      clickmap: true,
      ecommerce: "dataLayer",
      referrer: document.referrer,
      url: location.href,
      accurateTrackBounce: true,
      trackLinks: true,
    });
  }, []);
}
