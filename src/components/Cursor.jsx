import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import devtools from "devtools-detect";

function useDevToolsOpen() {
  const [isOpen, setIsOpen] = useState(() => devtools.isOpen);

  useEffect(() => {
    const html = document.documentElement;

    const handler = (e) => {
      setIsOpen(e.detail.isOpen);
      html.classList.toggle("devtools-open", e.detail.isOpen);
    };

    html.classList.toggle("devtools-open", devtools.isOpen);
    window.addEventListener(devtools.eventName, handler);

    return () => {
      window.removeEventListener(devtools.eventName, handler);
      html.classList.remove("devtools-open");
    };
  }, []);

  return isOpen;
}

function useIsTouch() {
  const [isTouch, setIsTouch] = useState(false);
  useEffect(() => {
    setIsTouch(window.matchMedia("(hover: none), (pointer: coarse)").matches);
  }, []);
  return isTouch;
}

export default function Cursor() {
  const isTouch = useIsTouch();
  const devToolsOpen = useDevToolsOpen();

  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);
  const dotX = useMotionValue(-200);
  const dotY = useMotionValue(-200);

  const springCfg = { stiffness: 180, damping: 22, mass: 0.8 };
  const springX = useSpring(mouseX, springCfg);
  const springY = useSpring(mouseY, springCfg);

  const [isHovering, setIsHovering] = useState(false);
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
      const card = el.closest("[data-cursor-label]");
      const link = el.closest("a");
      const btn = el.closest("button");

      if (card) {
        setLabel(card.dataset.cursorLabel || "VIEW");
        setIsHovering(true);
      } else if (link || btn) {
        setLabel("");
        setIsHovering(true);
      } else {
        setIsHovering(false);
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

  if (isTouch) return null;

  const cursorVisible = isVisible && !devToolsOpen;
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
        }}
        animate={{
          width: size,
          height: size,
          scale: isClicking ? 0.78 : 1,
          opacity: cursorVisible ? 1 : 0,
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
        }}
        animate={{
          opacity: cursorVisible && !isHovering ? 1 : 0,
        }}
        transition={{ duration: 0.15 }}
      />
    </>
  );
}