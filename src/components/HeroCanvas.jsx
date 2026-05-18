import React, { useEffect, useRef } from "react";

export default function HeroCanvas() {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: -999, y: -999 });
  const raf = useRef();

  useEffect(() => {
    const el = canvasRef.current;
    if (!el) return;
    const ctx = el.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      el.width = window.innerWidth;
      el.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    let lastUpdateTime = 0;
    const throttleDelay = 16; // ~60fps
    const onMove = (e) => {
      const now = Date.now();
      if (now - lastUpdateTime > throttleDelay) {
        mouse.current = { x: e.clientX, y: e.clientY };
        lastUpdateTime = now;
      }
    };
    window.addEventListener("mousemove", onMove);

    const dark = document.documentElement.classList.contains("dark");

    const orbs = [
      {
        x: el.width * 0.12,
        y: el.height * 0.3,
        vx: 0.16,
        vy: 0.11,
        r: 340,
        h: 38,
        s: 95,
        l: dark ? 58 : 38,
        a: dark ? 0.14 : 0.1,
      },
      {
        x: el.width * 0.72,
        y: el.height * 0.18,
        vx: -0.13,
        vy: 0.15,
        r: 300,
        h: 220,
        s: 60,
        l: dark ? 55 : 35,
        a: dark ? 0.09 : 0.07,
      },
      {
        x: el.width * 0.48,
        y: el.height * 0.72,
        vx: 0.1,
        vy: -0.12,
        r: 380,
        h: 38,
        s: 80,
        l: dark ? 48 : 32,
        a: dark ? 0.08 : 0.06,
      },
      {
        x: el.width * 0.88,
        y: el.height * 0.62,
        vx: -0.08,
        vy: -0.1,
        r: 220,
        h: 28,
        s: 90,
        l: dark ? 60 : 40,
        a: dark ? 0.11 : 0.08,
      },
    ];

    const draw = () => {
      ctx.clearRect(0, 0, el.width, el.height);
      const { x: mx, y: my } = mouse.current;

      orbs.forEach((o) => {
        o.x += o.vx;
        o.y += o.vy;
        if (mx > 0) {
          const dx = mx - o.x;
          const dy = my - o.y;
          const d = Math.hypot(dx, dy);
          if (d < 700) {
            o.x += dx * 0.00013;
            o.y += dy * 0.00013;
          }
        }
        if (o.x < -o.r) o.x = el.width + o.r;
        if (o.x > el.width + o.r) o.x = -o.r;
        if (o.y < -o.r) o.y = el.height + o.r;
        if (o.y > el.height + o.r) o.y = -o.r;

        const g = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, o.r);
        g.addColorStop(0, `hsla(${o.h},${o.s}%,${o.l}%,${o.a})`);
        g.addColorStop(0.5, `hsla(${o.h},${o.s}%,${o.l}%,${o.a * 0.35})`);
        g.addColorStop(1, `hsla(${o.h},${o.s}%,${o.l}%,0)`);
        ctx.beginPath();
        ctx.arc(o.x, o.y, o.r, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
      });

      if (mx > 0) {
        const mg = ctx.createRadialGradient(mx, my, 0, mx, my, 130);
        mg.addColorStop(0, `hsla(38,95%,60%,${dark ? 0.07 : 0.05})`);
        mg.addColorStop(1, "hsla(38,95%,60%,0)");
        ctx.beginPath();
        ctx.arc(mx, my, 130, 0, Math.PI * 2);
        ctx.fillStyle = mg;
        ctx.fill();
      }

      raf.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.9 }}
    />
  );
}
