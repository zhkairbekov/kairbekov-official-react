import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Typewriter effect for output lines
function TypewriterText({ text, speed = 8 }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    setDisplayed("");
    if (!text) return;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return <span>{displayed}</span>;
}

// Countdown line
function CountdownLine({ seconds }) {
  const [remaining, setRemaining] = useState(seconds);

  useEffect(() => {
    if (remaining <= 0) return;
    const t = setTimeout(() => setRemaining((r) => r - 1), 1000);
    return () => clearTimeout(t);
  }, [remaining]);

  if (remaining <= 0) {
    return (
      <span className="text-green-400 font-bold">🚀 Countdown complete!</span>
    );
  }

  const pct = ((seconds - remaining) / seconds) * 100;
  const bar = Math.round(pct / 5);
  return (
    <span>
      {"["}
      <span className="text-primary">{"█".repeat(bar)}</span>
      <span className="opacity-20">{"░".repeat(20 - bar)}</span>
      {"] "}
      <span className="text-primary font-bold">{remaining}s</span>
    </span>
  );
}

export function TerminalLine({ entry, index }) {
  const delay = index * 0.04;

  if (entry.type === "system") {
    return (
      <motion.pre
        initial={{ opacity: 0, x: -8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay }}
        className="whitespace-pre-wrap text-primary/40 text-xs mb-2"
      >
        {entry.text}
      </motion.pre>
    );
  }

  if (entry.type === "prompt") {
    return (
      <motion.pre
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="whitespace-pre-wrap mb-1"
      >
        <span className="text-primary/40">visitor@zhanat:~$ </span>
        <span className="text-primary font-bold">{entry.text}</span>
      </motion.pre>
    );
  }

  if (entry.type === "countdown") {
    return (
      <motion.pre
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="whitespace-pre-wrap"
      >
        <CountdownLine seconds={entry.seconds} />
      </motion.pre>
    );
  }

  if (entry.type === "game") {
    return null; // game renders separately
  }

  // output — check if it's an error
  const isError =
    entry.text &&
    /error|not found|permission denied|invalid|cannot|failed/i.test(entry.text);
  const isShort = entry.text && entry.text.length < 200;

  return (
    <motion.pre
      initial={{ opacity: 0, y: 3 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className={`whitespace-pre-wrap mb-1 ${
        isError
          ? "text-red-400 font-semibold bg-red-950/20 px-2 py-1 rounded border border-red-900/30"
          : "text-primary/80"
      }`}
    >
      {isShort ? <TypewriterText text={entry.text} speed={6} /> : entry.text}
    </motion.pre>
  );
}
