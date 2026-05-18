import { useState, useEffect } from "react";
import Navigation from "./components/Navigation";
import MobileNavigation from "./components/MobileNavigation";

const BREAKPOINT = 762;

export default function NavigationController() {
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth >= BREAKPOINT : true,
  );

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${BREAKPOINT}px)`);

    const handler = (e) => {
      setIsDesktop(e.matches);
    };

    mq.addEventListener("change", handler);

    handler(mq);

    return () => {
      mq.removeEventListener("change", handler);
      document.body.style.paddingBottom = "";
    };
  }, []);

  useEffect(() => {
    if (!isDesktop) {
      document.body.style.paddingBottom = "40";
    } else {
      document.body.style.paddingBottom = "";
    }
  }, [isDesktop]);

  return isDesktop ? <Navigation /> : <MobileNavigation />;
}
