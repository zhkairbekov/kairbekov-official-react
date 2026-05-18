import React from "react";

export default function TagBadge({ children, variant = "default" }) {
  const variants = {
    default:
      "text-[10px] font-mono-custom tracking-[0.15em] uppercase px-3 py-1.5 border border-border text-muted-foreground",
    sm: "text-[10px] font-mono-custom tracking-[0.15em] uppercase px-2 py-1 border border-border text-muted-foreground",
    interactive:
      "text-[10px] font-mono-custom tracking-[0.15em] uppercase px-2 py-1 border border-border text-muted-foreground group-hover:border-primary/40 transition-colors",
  };

  return <span className={variants[variant]}>{children}</span>;
}
