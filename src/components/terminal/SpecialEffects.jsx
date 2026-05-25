import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// Matrix rain canvas
export function MatrixEffect() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const cols = Math.floor(canvas.width / 14);
    const drops = Array(cols).fill(1);
    const chars = "アイウエオカキクケコ01アBCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()";

    const draw = () => {
      ctx.fillStyle = "rgba(0,0,0,0.06)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#FFB400";
      ctx.font = "13px monospace";
      drops.forEach((y, i) => {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillStyle = y * 14 < 30 ? "#fff" : "#FFB400";
        ctx.fillText(char, i * 14, y * 14);
        if (y * 14 > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      });
    };

    const id = setInterval(draw, 40);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 z-10 rounded-3xl overflow-hidden"
    >
      <canvas ref={canvasRef} className="w-full h-full" />
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="text-primary font-mono text-2xl font-bold tracking-widest text-shadow"
        >
          Wake up, Neo...
        </motion.p>
      </div>
    </motion.div>
  );
}

// Hack sequence
export function HackEffect() {
  const lines = [
    "Initializing breach protocol...",
    "Scanning target: kairbekov-official.netlify.app",
    "Bypassing firewall... ████████ DONE",
    "Cracking encryption: AES-256...",
    "░░░░░░░░░░░░░░░░░░░░ 0%",
    "████░░░░░░░░░░░░░░░░ 20%",
    "████████░░░░░░░░░░░░ 40%",
    "████████████░░░░░░░░ 60%",
    "████████████████░░░░ 80%",
    "████████████████████ 100%",
    "ACCESS GRANTED",
    "Welcome, Zhanat. 🚀",
  ];

  const [displayed, setDisplayed] = useState([]);

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      if (i < lines.length) {
        setDisplayed((prev) => [...prev, lines[i]]);
        i++;
      } else {
        clearInterval(id);
      }
    }, 300);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 z-10 rounded-3xl overflow-hidden bg-black/95 flex items-center justify-center p-8"
    >
      <div className="font-mono text-sm space-y-1 w-full max-w-md">
        {displayed.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className={
              line === "ACCESS GRANTED"
                ? "text-green-400 font-bold text-lg"
                : line.includes("Welcome")
                ? "text-primary font-bold"
                : "text-green-400/80"
            }
          >
            {line}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// Disco mode
export function DiscoEffect() {
  const colors = ["#FF0066", "#00FFCC", "#FFB400", "#FF6600", "#9B59B6", "#00BFFF"];
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setColorIndex((i) => (i + 1) % colors.length);
    }, 200);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 z-10 rounded-3xl overflow-hidden flex items-center justify-center"
      style={{ backgroundColor: colors[colorIndex] + "22" }}
    >
      <div className="text-center font-mono">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="text-6xl mb-4"
        >
          🪩
        </motion.div>
        <motion.p
          animate={{ color: colors[colorIndex] }}
          className="text-2xl font-bold tracking-widest"
        >
          DISCO MODE
        </motion.p>
        <p className="text-sm opacity-50 mt-2 font-mono">Ends in 5s...</p>
      </div>
    </motion.div>
  );
}