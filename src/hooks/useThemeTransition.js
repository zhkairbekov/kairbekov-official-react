import { useCallback, useRef } from "react";
import { useTheme } from "../lib/theme-provider";

export function useThemeTransition() {
  const { theme, setTheme } = useTheme();
  const animating = useRef(false);

  const toggle = useCallback(
    (triggerEl) => {
      if (animating.current) return;

      if (!document.startViewTransition || !triggerEl) {
        setTheme(theme === "dark" ? "light" : "dark");
        return;
      }

      animating.current = true;
      const rect = triggerEl.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const maxR = Math.hypot(
        Math.max(cx, window.innerWidth - cx),
        Math.max(cy, window.innerHeight - cy),
      );

      const nextDark = theme !== "dark";
      const clipFrom = `circle(0px at ${cx}px ${cy}px)`;
      const clipTo = `circle(${maxR}px at ${cx}px ${cy}px)`;

      const transition = document.startViewTransition(() => {
        setTheme(nextDark ? "dark" : "light");
      });

      transition.ready
        .then(() => {
          if (nextDark) {
            document.documentElement.animate(
              { clipPath: [clipFrom, clipTo] },
              {
                duration: 600,
                easing: "cubic-bezier(0.4,0,0.2,1)",
                pseudoElement: "::view-transition-new(root)",
              },
            );
          } else {
            document.documentElement.animate(
              { clipPath: [clipTo, clipFrom] },
              {
                duration: 600,
                easing: "cubic-bezier(0.4,0,0.2,1)",
                pseudoElement: "::view-transition-old(root)",
              },
            );
            document.documentElement.animate(
              { clipPath: [clipFrom, clipTo] },
              {
                duration: 600,
                easing: "cubic-bezier(0.4,0,0.2,1)",
                pseudoElement: "::view-transition-new(root)",
              },
            );
          }
          setTimeout(() => {
            animating.current = false;
          }, 650);
        })
        .catch(() => {
          animating.current = false;
        });
    },
    [theme, setTheme],
  );

  return toggle;
}
