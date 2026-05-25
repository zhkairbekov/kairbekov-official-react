import React, { useEffect, useRef, useState } from "react";
import { Leaderboard } from "../Leaderboard";

const W = 360;
const H = 280;
const PAD_W = 60;
const PAD_H = 8;
const BALL_R = 6;
const BRICK_ROWS = 5;
const BRICK_COLS = 10;
const BRICK_W = W / BRICK_COLS;
const BRICK_H = 16;

const BRICK_COLORS = ["#FF0066", "#FF4400", "#FF8C00", "#FFB400", "#00CC66"];

function initState() {
  const bricks = [];
  for (let r = 0; r < BRICK_ROWS; r++)
    for (let c = 0; c < BRICK_COLS; c++) bricks.push({ r, c, alive: true });
  return {
    bricks,
    ball: { x: W / 2, y: H - 60, vx: 3, vy: -4 },
    pad: { x: W / 2 - PAD_W / 2 },
    score: 0,
    lives: 3,
    status: "playing",
  };
}

export function BreakoutGame({ onClose }) {
  const canvasRef = useRef(null);
  const stateRef = useRef(null);
  const animRef = useRef(null);
  const [displayScore, setDisplayScore] = useState(0);
  const [displayLives, setDisplayLives] = useState(3);
  const [status, setStatus] = useState("idle");
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const keysRef = useRef({});

  const startGame = () => {
    stateRef.current = initState();
    setDisplayScore(0);
    setDisplayLives(3);
    setStatus("playing");
  };

  useEffect(() => {
    const down = (e) => {
      keysRef.current[e.key] = true;
      if (["ArrowLeft", "ArrowRight", "a", "A", "d", "D"].includes(e.key))
        e.preventDefault();
      if (e.key === "Escape") onClose();
    };
    const up = (e) => {
      keysRef.current[e.key] = false;
    };
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    return () => {
      window.removeEventListener("keydown", down);
      window.removeEventListener("keyup", up);
    };
  }, [onClose]);

  useEffect(() => {
    if (status !== "playing") return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const loop = () => {
      const s = stateRef.current;
      if (!s || s.status !== "playing") return;

      // Move paddle
      const speed = 6;
      // Движение влево: ArrowLeft ИЛИ a ИЛИ A
      if (
        keysRef.current["ArrowLeft"] ||
        keysRef.current["a"] ||
        keysRef.current["A"] ||
        keysRef.current["ф"] ||
        keysRef.current["Ф"]
      ) {
        s.pad.x = Math.max(0, s.pad.x - speed);
      }
      // Движение вправо: ArrowRight ИЛИ d ИЛИ D
      if (
        keysRef.current["ArrowRight"] ||
        keysRef.current["d"] ||
        keysRef.current["D"] ||
        keysRef.current["в"] ||
        keysRef.current["В"]
      ) {
        s.pad.x = Math.min(W - PAD_W, s.pad.x + speed);
      }

      // Move ball
      s.ball.x += s.ball.vx;
      s.ball.y += s.ball.vy;

      // Wall bounce
      if (s.ball.x - BALL_R <= 0 || s.ball.x + BALL_R >= W) s.ball.vx *= -1;
      if (s.ball.y - BALL_R <= 0) s.ball.vy *= -1;

      // Paddle bounce
      if (
        s.ball.y + BALL_R >= H - PAD_H - 20 &&
        s.ball.y + BALL_R <= H - 20 + PAD_H &&
        s.ball.x >= s.pad.x &&
        s.ball.x <= s.pad.x + PAD_W
      ) {
        const offset = (s.ball.x - (s.pad.x + PAD_W / 2)) / (PAD_W / 2);
        s.ball.vx = offset * 5;
        s.ball.vy = -Math.abs(s.ball.vy);
      }

      // Brick collision
      for (const brick of s.bricks) {
        if (!brick.alive) continue;
        const bx = brick.c * BRICK_W;
        const by = brick.r * BRICK_H + 30;
        if (
          s.ball.x + BALL_R > bx &&
          s.ball.x - BALL_R < bx + BRICK_W &&
          s.ball.y + BALL_R > by &&
          s.ball.y - BALL_R < by + BRICK_H
        ) {
          brick.alive = false;
          s.ball.vy *= -1;
          s.score += 10;
          setDisplayScore(s.score);
          break;
        }
      }

      // Ball out
      if (s.ball.y > H) {
        s.lives--;
        setDisplayLives(s.lives);
        if (s.lives <= 0) {
          s.status = "lost";
          setStatus("lost");
          return;
        }
        s.ball = { x: W / 2, y: H - 80, vx: 3, vy: -4 };
      }

      // Win
      if (s.bricks.every((b) => !b.alive)) {
        s.status = "won";
        setStatus("won");
        return;
      }

      // Draw
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = "rgba(0,0,0,0.9)";
      ctx.fillRect(0, 0, W, H);

      // Bricks
      s.bricks.forEach((brick) => {
        if (!brick.alive) return;
        const bx = brick.c * BRICK_W;
        const by = brick.r * BRICK_H + 30;
        ctx.fillStyle = BRICK_COLORS[brick.r];
        ctx.fillRect(bx + 1, by + 1, BRICK_W - 2, BRICK_H - 2);
      });

      // Paddle
      ctx.fillStyle = "#FFB400";
      ctx.beginPath();
      ctx.roundRect(s.pad.x, H - PAD_H - 20, PAD_W, PAD_H, 4);
      ctx.fill();

      // Ball
      ctx.beginPath();
      ctx.arc(s.ball.x, s.ball.y, BALL_R, 0, Math.PI * 2);
      ctx.fillStyle = "#ffffff";
      ctx.fill();

      // Grid overlay
      ctx.strokeStyle = "rgba(255,180,0,0.03)";
      ctx.lineWidth = 1;
      for (let x = 0; x < W; x += 20) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, H);
        ctx.stroke();
      }
      for (let y = 0; y < H; y += 20) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(W, y);
        ctx.stroke();
      }

      animRef.current = requestAnimationFrame(loop);
    };

    animRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animRef.current);
  }, [status]);

  return (
    <>
      <div className="flex flex-col items-center gap-2 py-2">
        <div className="flex items-center justify-between w-full px-1">
          <span className="font-mono text-xs text-primary/60">🟡 BREAKOUT</span>
          <div className="flex gap-4 font-mono text-xs">
            <span className="text-primary">Score: {displayScore}</span>
            <span className="text-primary/60">
              Lives: {"❤️".repeat(Math.max(0, displayLives))}
            </span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setShowLeaderboard(true)}
              className="font-mono text-xs text-primary/40 hover:text-primary transition-colors"
            >
              [TOP]
            </button>
            <button
              onClick={onClose}
              className="font-mono text-xs text-primary/40 hover:text-primary transition-colors"
            >
              [ESC]
            </button>
          </div>
        </div>

        <div
          className="relative border border-primary/20 overflow-hidden"
          style={{ width: W, height: H }}
        >
          <canvas ref={canvasRef} width={W} height={H} className="block" />

          {status !== "playing" && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/90 gap-4 p-4 text-center">
              <div className="space-y-2">
                <p className="font-mono text-primary text-sm uppercase tracking-wider">
                  {status === "idle"
                    ? "🟡 Breakout"
                    : status === "won"
                      ? "🎉 Victory!"
                      : `Game Over! Score: ${displayScore}`}
                </p>

                {/* Текст про лидерборд показываем только после завершения игры */}
                {status !== "idle" && (
                  <p className="font-mono text-[10px] text-primary/60 leading-tight">
                    Send me a screenshot of your result in telegram,
                    <br />
                    and I'll add you to the{" "}
                    <span className="text-primary/90">leaderboard!</span>
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2 w-full max-w-[140px]">
                <button
                  onClick={startGame}
                  className="font-mono text-xs border border-primary/30 px-4 py-2 text-primary hover:bg-primary/10 transition-colors"
                >
                  {status === "idle" ? "START GAME" : "PLAY AGAIN"}
                </button>

                <button
                  onClick={onClose}
                  className="font-mono text-[10px] text-primary/30 hover:text-primary transition-colors"
                >
                  [ESC] exit
                </button>
              </div>
            </div>
          )}
        </div>

        <p className="font-mono text-[10px] text-primary/30">
          ← → or A D to move paddle
        </p>
      </div>
      {showLeaderboard && (
        <Leaderboard
          game="breakout"
          onClose={() => setShowLeaderboard(false)}
        />
      )}
    </>
  );
}
