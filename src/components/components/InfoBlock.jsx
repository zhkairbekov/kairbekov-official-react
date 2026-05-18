import React from "react";

/**
 * Универсальный компонент для информационных блоков (с border-left или border)
 * @param {React.ReactNode} title - Заголовок
 * @param {React.ReactNode} text - Текст
 * @param {string} variant - 'border-left' или 'border' (по умолчанию 'border')
 */
export default function InfoBlock({ title, text, variant = "border" }) {
  const borderClass =
    variant === "border-left"
      ? "border-l-2 border-primary/30 pl-3"
      : "border border-border/50 px-3 py-2";

  return (
    <div className={`text-xs text-muted-foreground/70 ${borderClass}`}>
      {title && (
        <span className="font-semibold text-foreground/60">{title} </span>
      )}
      {text}
    </div>
  );
}
