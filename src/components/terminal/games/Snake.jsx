import React, { useCallback, useEffect, useRef, useState } from "react";
import { Leaderboard } from "../Leaderboard";
import { useSwipeGestures } from "./useSwipeGestures";

const COLS = 20;
const ROWS = 16;
const CELL = 18;

const DIR = {
  ArrowUp: { x: 0, y: -1 },
  w: { x: 0, y: -1 },
  W: { x: 0, y: -1 },
  ц: { x: 0, y: -1 },
  Ц: { x: 0, y: -1 },

  ArrowDown: { x: 0, y: 1 },
  s: { x: 0, y: 1 },
  S: { x: 0, y: 1 },
  ы: { x: 0, y: 1 },
  Ы: { x: 0, y: 1 },

  ArrowLeft: { x: -1, y: 0 },
  a: { x: -1, y: 0 },
  A: { x: -1, y: 0 },
  ф: { x: -1, y: 0 },
  Ф: { x: -1, y: 0 },

  ArrowRight: { x: 1, y: 0 },
  d: { x: 1, y: 0 },
  D: { x: 1, y: 0 },
  в: { x: 1, y: 0 },
  В: { x: 1, y: 0 },
};

function randomFood(snake) {
  let pos;
  do {
    pos = {
      x: Math.floor(Math.random() * COLS),
      y: Math.floor(Math.random() * ROWS),
    };
  } while (snake.some((s) => s.x === pos.x && s.y === pos.y));
  return pos;
}

export function SnakeGame({ onClose }) {
  const [snake, setSnake] = useState([{ x: 10, y: 8 }]);
  const [dir, setDir] = useState({ x: 1, y: 0 });
  const [food, setFood] = useState({ x: 15, y: 8 });
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [running, setRunning] = useState(false);
  const [showLeaderboard, setShowLeaderboard] = useState(false);

  const dirRef = useRef(dir);
  dirRef.current = dir;

  const containerRef = useRef(null);
  const swipeGestures = useSwipeGestures(containerRef);

  const reset = useCallback(() => {
    const s = [{ x: 10, y: 8 }];
    setSnake(s);
    setDir({ x: 1, y: 0 });
    setFood(randomFood(s));
    setScore(0);
    setGameOver(false);
    setRunning(true);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
        e.preventDefault();
        const newDir = DIR[e.key];
        // prevent reversal
        if (newDir.x !== -dirRef.current.x || newDir.y !== -dirRef.current.y) {
          setDir(newDir);
        }
      }
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  useEffect(() => {
    if (!running || gameOver) return;
    const id = setInterval(() => {
      setSnake((prev) => {
        // 1. Вычисляем новую позицию головы с учетом "сквозного" прохода
        // Добавляем COLS/ROWS перед %, чтобы избежать проблем с отрицательными числами
        const head = {
          x: (prev[0].x + dirRef.current.x + COLS) % COLS,
          y: (prev[0].y + dirRef.current.y + ROWS) % ROWS,
        };

        // 2. Теперь проверяем ТОЛЬКО столкновение с самим собой
        if (prev.some((s) => s.x === head.x && s.y === head.y)) {
          setGameOver(true);
          setRunning(false);
          return prev;
        }

        let newSnake;
        if (head.x === food.x && head.y === food.y) {
          newSnake = [head, ...prev];
          setScore((s) => s + 10);
          setFood(randomFood(newSnake));
        } else {
          newSnake = [head, ...prev.slice(0, -1)];
        }
        return newSnake;
      });
    }, 180); // <--- УВЕЛИЧЕНО СО 120 ДО 180 (чем выше число, тем медленнее)

    return () => clearInterval(id);
  }, [running, gameOver, food]);

  useEffect(() => {
    const handler = (e) => {
      // Проверяем, есть ли нажатая клавиша в нашем списке управления
      const newDir = DIR[e.key];

      if (newDir) {
        e.preventDefault(); // Предотвращаем скролл страницы

        // Запрещаем разворот на 180 градусов (чтобы змея не ела себя)
        if (newDir.x !== -dirRef.current.x || newDir.y !== -dirRef.current.y) {
          setDir(newDir);
        }
      }

      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <>
      <div className="flex flex-col items-center gap-3 py-2">
        <div className="flex items-center justify-between w-full px-1">
          <span className="font-mono text-xs text-primary/60">🐍 SNAKE</span>
          <span className="font-mono text-xs text-primary">Score: {score}</span>
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
          ref={containerRef}
          className="relative border border-primary/20 bg-black/50 touch-none"
          style={{
            width: COLS * CELL,
            height: ROWS * CELL,
            touchAction: "none",
          }}
          {...swipeGestures}
        >
          {/* Grid dots */}
          {Array.from({ length: ROWS }).map((_, r) =>
            Array.from({ length: COLS }).map((_, c) => (
              <div
                key={`${r}-${c}`}
                className="absolute w-0.5 h-0.5 rounded-full bg-primary/5"
                style={{ left: c * CELL + CELL / 2, top: r * CELL + CELL / 2 }}
              />
            )),
          )}

          {/* Food */}
          <div
            className="absolute rounded-sm bg-red-500"
            style={{
              width: CELL - 4,
              height: CELL - 4,
              left: food.x * CELL + 2,
              top: food.y * CELL + 2,
            }}
          />

          {/* Snake */}
          {snake.map((seg, i) => (
            <div
              key={i}
              className="absolute rounded-sm"
              style={{
                width: CELL - 2,
                height: CELL - 2,
                left: seg.x * CELL + 1,
                top: seg.y * CELL + 1,
                backgroundColor:
                  i === 0 ? "var(--color-primary, #FFB400)" : "#FFB40088",
              }}
            />
          ))}

          {/* Overlay */}
          {!running && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/85 gap-3 p-4 text-center">
              <div className="space-y-1">
                <p className="font-mono text-primary text-sm">
                  {gameOver ? `FINAL SCORE: ${score}` : "🐍 READY?"}
                </p>

                {gameOver && (
                  <p className="font-mono text-[10px] text-primary/60 leading-tight">
                    Send me a screenshot of your result in telegram,
                    <br />
                    and I'll add you to the leaderboard!
                  </p>
                )}
              </div>

              <button
                onClick={reset}
                className="font-mono text-xs border border-primary/30 px-3 py-1 text-primary hover:bg-primary/10 transition-colors mt-2"
              >
                {gameOver ? "TRY AGAIN" : "START"}
              </button>
            </div>
          )}
        </div>

        <p className="font-mono text-[10px] text-primary/30">
          Arrow keys to move
        </p>
      </div>
      {showLeaderboard && (
        <Leaderboard game="snake" onClose={() => setShowLeaderboard(false)} />
      )}
    </>
  );
}
