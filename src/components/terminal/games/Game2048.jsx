import React, { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SIZE = 4;

const TILE_COLORS = {
  0: { bg: "rgba(255,255,255,0.04)", text: "transparent" },
  2: { bg: "#FFB40022", text: "#FFB400" },
  4: { bg: "#FFB40033", text: "#FFB400" },
  8: { bg: "#FF8C0044", text: "#FF8C00" },
  16: { bg: "#FF660055", text: "#FF6600" },
  32: { bg: "#FF440066", text: "#FF4400" },
  64: { bg: "#FF220077", text: "#FF2200" },
  128: { bg: "#00BFFF33", text: "#00BFFF" },
  256: { bg: "#00BFFF55", text: "#00BFFF" },
  512: { bg: "#9B59B655", text: "#CE93D8" },
  1024: { bg: "#9B59B677", text: "#CE93D8" },
  2048: { bg: "#FFB40099", text: "#fff" },
};

function emptyGrid() {
  return Array.from({ length: SIZE }, () => Array(SIZE).fill(0));
}

function addRandom(grid) {
  const empty = [];
  grid.forEach((row, r) =>
    row.forEach((v, c) => {
      if (!v) empty.push([r, c]);
    }),
  );
  if (!empty.length) return grid;
  const [r, c] = empty[Math.floor(Math.random() * empty.length)];
  const newGrid = grid.map((row) => [...row]);
  newGrid[r][c] = Math.random() < 0.9 ? 2 : 4;
  return newGrid;
}

function slideRow(row) {
  const nums = row.filter(Boolean);
  const merged = [];
  let i = 0;
  while (i < nums.length) {
    if (i + 1 < nums.length && nums[i] === nums[i + 1]) {
      merged.push(nums[i] * 2);
      i += 2;
    } else {
      merged.push(nums[i]);
      i++;
    }
  }
  while (merged.length < SIZE) merged.push(0);
  return merged;
}

function move(grid, dir) {
  let g = grid.map((r) => [...r]);
  let score = 0;

  const slideAndScore = (row) => {
    const slid = slideRow(row);
    slid.forEach((v, i) => {
      if (v > row.filter(Boolean)[i]) score += v;
    });
    return slid;
  };

  if (dir === "left") g = g.map((row) => slideRow(row));
  if (dir === "right")
    g = g.map((row) => slideRow([...row].reverse()).reverse());
  if (dir === "up") {
    for (let c = 0; c < SIZE; c++) {
      const col = g.map((row) => row[c]);
      const slid = slideRow(col);
      slid.forEach((v, r) => {
        g[r][c] = v;
      });
    }
  }
  if (dir === "down") {
    for (let c = 0; c < SIZE; c++) {
      const col = g.map((row) => row[c]).reverse();
      const slid = slideRow(col).reverse();
      slid.forEach((v, r) => {
        g[r][c] = v;
      });
    }
  }

  return { grid: g, score };
}

function hasWon(grid) {
  return grid.flat().includes(2048);
}

function hasMoves(grid) {
  if (grid.flat().includes(0)) return true;
  for (let r = 0; r < SIZE; r++)
    for (let c = 0; c < SIZE; c++) {
      if (c + 1 < SIZE && grid[r][c] === grid[r][c + 1]) return true;
      if (r + 1 < SIZE && grid[r][c] === grid[r + 1][c]) return true;
    }
  return false;
}

export function Game2048({ onClose }) {
  const [grid, setGrid] = useState(null);
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(0);
  const [status, setStatus] = useState("idle");

  const startGame = useCallback(() => {
    let g = emptyGrid();
    g = addRandom(g);
    g = addRandom(g);
    setGrid(g);
    setScore(0);
    setStatus("playing");
  }, []);

  const handleMove = useCallback(
    (dir) => {
      if (status !== "playing") return;
      setGrid((prev) => {
        const { grid: newGrid, score: gained } = move(prev, dir);
        const changed = JSON.stringify(newGrid) !== JSON.stringify(prev);
        if (!changed) return prev;

        const withRandom = addRandom(newGrid);
        setScore((s) => {
          const ns = s + gained;
          setBest((b) => Math.max(b, ns));
          return ns;
        });

        if (hasWon(withRandom)) setStatus("won");
        else if (!hasMoves(withRandom)) setStatus("lost");

        return withRandom;
      });
    },
    [status],
  );

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      const dirs = {
        ArrowLeft: "left",
        a: "left",
        A: "left",
        ф: "left",
        Ф: "left",
        ArrowRight: "right",
        d: "right",
        D: "right",
        в: "right",
        В: "right",
        ArrowUp: "up",
        w: "up",
        W: "up",
        ц: "up",
        Ц: "up",
        ArrowDown: "down",
        s: "down",
        S: "down",
        ы: "down",
        Ы: "down",
      };

      if (dirs[e.key]) {
        e.preventDefault();
        handleMove(dirs[e.key]);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [handleMove, onClose]);

  if (status === "idle") {
    return (
      <div className="flex flex-col items-center gap-4 py-4">
        <span className="font-mono text-primary text-lg font-bold">2048</span>
        <p className="font-mono text-xs text-primary/40">
          Merge tiles to reach 2048
        </p>
        <button
          onClick={startGame}
          className="font-mono text-xs border border-primary/30 px-4 py-1.5 text-primary hover:bg-primary/10 transition-colors"
        >
          Start Game
        </button>
        <button
          onClick={onClose}
          className="font-mono text-xs text-primary/30 hover:text-primary"
        >
          [ESC] exit
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-3 py-2">
      <div className="flex items-center justify-between w-full px-1">
        <span className="font-mono text-lg font-bold text-primary">2048</span>
        <div className="flex gap-3">
          <div className="font-mono text-xs text-center">
            <div className="text-primary/40">SCORE</div>
            <div className="text-primary font-bold">{score}</div>
          </div>
          <div className="font-mono text-xs text-center">
            <div className="text-primary/40">BEST</div>
            <div className="text-primary font-bold">{best}</div>
          </div>
        </div>
        <button
          onClick={onClose}
          className="font-mono text-xs text-primary/40 hover:text-primary"
        >
          [ESC]
        </button>
      </div>

      {(status === "won" || status === "lost") && (
        <div
          className={`font-mono text-sm font-bold ${status === "won" ? "text-yellow-400" : "text-red-400"}`}
        >
          {status === "won" ? "🎉 You reached 2048!" : "Game Over!"}
        </div>
      )}

      <div
        className="grid gap-1.5 p-2 bg-white/5 rounded-lg border border-primary/10"
        style={{ gridTemplateColumns: `repeat(${SIZE}, 64px)` }}
      >
        {grid?.flat().map((val, i) => {
          const colors = TILE_COLORS[val] || TILE_COLORS[2048];
          return (
            <div
              key={i}
              className="flex items-center justify-center rounded font-mono font-bold text-sm transition-all duration-100"
              style={{
                width: 64,
                height: 64,
                backgroundColor: colors.bg,
                color: colors.text,
                fontSize: val >= 1000 ? "11px" : val >= 100 ? "14px" : "18px",
              }}
            >
              {val || ""}
            </div>
          );
        })}
      </div>

      {(status === "won" || status === "lost") && (
        <button
          onClick={startGame}
          className="font-mono text-xs border border-primary/30 px-3 py-1 text-primary hover:bg-primary/10 transition-colors"
        >
          Play Again
        </button>
      )}

      <p className="font-mono text-[10px] text-primary/30">
        Arrow keys or WASD to move tiles
      </p>
    </div>
  );
}
