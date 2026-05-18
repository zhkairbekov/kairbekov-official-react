import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const DEV_TOOLS_THRESHOLD = 160;

function checkDevTools() {
  return (
    window.outerWidth - window.innerWidth > DEV_TOOLS_THRESHOLD ||
    window.outerHeight - window.innerHeight > DEV_TOOLS_THRESHOLD
  );
}

function useDevToolsOpen() {
  const [isOpen, setIsOpen] = useState(() => checkDevTools());

  useEffect(() => {
    const id = setInterval(() => {
      const open = checkDevTools();
      setIsOpen((prev) => {
        if (prev !== open) {
          document.body.classList.toggle("devtools-open", open);
        }
        return open;
      });
    }, 500);

    const open = checkDevTools();
    document.body.classList.toggle("devtools-open", open);

    return () => clearInterval(id);
  }, []);

  return isOpen;
}

/** True on any touch / coarse-pointer device (phones, tablets). */
function useIsTouch() {
  const [isTouch, setIsTouch] = useState(false);
  useEffect(() => {
    setIsTouch(window.matchMedia("(hover: none), (pointer: coarse)").matches);
  }, []);
  return isTouch;
}

/** True when the viewport is narrower than 768 px (Tailwind's `md` breakpoint).
 *  Updates live on resize so rotating a tablet also hides the cursor correctly. */
function useIsNarrow() {
  const [isNarrow, setIsNarrow] = useState(() => window.innerWidth < 768);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const handler = (e) => setIsNarrow(e.matches);
    mq.addEventListener("change", handler);
    setIsNarrow(mq.matches); // sync immediately
    return () => mq.removeEventListener("change", handler);
  }, []);
  return isNarrow;
}

export default function Cursor() {
  const isTouch = useIsTouch();
  const isNarrow = useIsNarrow();
  const devToolsOpen = useDevToolsOpen();

  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);
  const dotX = useMotionValue(-200);
  const dotY = useMotionValue(-200);

  const springCfg = { stiffness: 180, damping: 22, mass: 0.8 };
  const springX = useSpring(mouseX, springCfg);
  const springY = useSpring(mouseY, springCfg);

  const [isHovering, setIsHovering] = useState(false);
  const [isLink, setIsLink] = useState(false);
  const [label, setLabel] = useState("");
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const onOver = (e) => {
      const el = e.target;
      const link = el.closest("a");
      const btn = el.closest("button");
      const card = el.closest("[data-cursor-label]");

      if (card) {
        setLabel(card.dataset.cursorLabel || "VIEW");
        setIsHovering(true);
        setIsLink(false);
      } else if (link || btn) {
        setLabel("");
        setIsHovering(true);
        setIsLink(true);
      } else {
        setIsHovering(false);
        setIsLink(false);
        setLabel("");
      }
    };

    const onDown = () => setIsClicking(true);
    const onUp = () => setIsClicking(false);
    const onLeave = () => setIsVisible(false);
    const onEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.documentElement.addEventListener("mouseleave", onLeave);
    document.documentElement.addEventListener("mouseenter", onEnter);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      document.documentElement.removeEventListener("mouseenter", onEnter);
    };
  }, [mouseX, mouseY, dotX, dotY, isVisible]);

  // Hide on touch devices, narrow viewports (<768px), or when devtools are open.
  // Native cursor is restored by the CSS change (cursor:none only fires at >=768px).
  if (isTouch || isNarrow || devToolsOpen) return null;

  const size = isHovering ? (label ? 88 : 52) : 36;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] flex items-center justify-center overflow-hidden"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          mixBlendMode: isHovering && label ? "normal" : "difference",
          backgroundColor: isHovering && label ? "hsl(38 95% 60%)" : "white",
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          width: size,
          height: size,
          scale: isClicking ? 0.78 : 1,
        }}
        transition={{ type: "spring", stiffness: 280, damping: 26 }}
      >
        {isHovering && label && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="text-[9px] font-mono-custom font-bold tracking-widest text-black select-none whitespace-nowrap"
          >
            {label}
          </motion.span>
        )}
      </motion.div>

      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          width: 5,
          height: 5,
          backgroundColor: "hsl(38 95% 60%)",
          mixBlendMode: "normal",
          opacity: isVisible && !isHovering ? 1 : 0,
        }}
      />
    </>
  );
}
