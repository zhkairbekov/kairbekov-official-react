import React from "react";
import { motion } from "framer-motion";
import { vibrate } from "../../hooks/useHaptic";

/**
 * @param {object}  props
 * @param {"light"|"medium"|"heavy"|"double"|"success"} [props.haptic="medium"]
 * @param {string}  [props.href]          — если передан, рендерит <a>
 * @param {Function}[props.onClick]       — вызывается ПОСЛЕ вибрации
 * @param {number}  [props.delay=0]       — задержка перехода по href (мс)
 *                                          нужна, чтобы вибрация успела сработать
 * @param {React.ReactNode} props.children
 * @param {string}  [props.className]
 * @param rest — любые пропсы motion.a / motion.button
 */
export default function HapticLink({
  haptic = "medium",
  href,
  onClick,
  delay = 80,
  children,
  className,
  target,
  rel,
  ...rest
}) {
  const handleClick = (e) => {
    vibrate(haptic);

    if (onClick) {
      onClick(e);
    }

    // Если есть href и ссылка открывается в новой вкладке — всё ок без delay.
    // Если же переход в той же вкладке — даём вибрации 80 мс до навигации.
    if (href && target !== "_blank") {
      e.preventDefault();
      setTimeout(() => {
        window.location.href = href;
      }, delay);
    }
  };

  const Tag = href ? motion.a : motion.button;

  return (
    <Tag
      href={href}
      target={target}
      rel={rel}
      onClick={handleClick}
      className={className}
      {...rest}
    >
      {children}
    </Tag>
  );
}
