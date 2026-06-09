import React, { useCallback, useEffect, useRef, useState } from "react";
import { Leaderboard } from "../Leaderboard";
import { useSwipeGestures } from "./useSwipeGestures";

const COLS = 10;
const ROWS = 20;
const CELL = 18;

const PIECES = [
  { shape: [[1, 1, 1, 1]], color: "#00BFFF" }, // I
  {
    shape: [
      [1, 1],
      [1, 1],
    ],
    color: "#FFB400",
  }, // O
  {
    shape: [
      [0, 1, 0],
      [1, 1, 1],
    ],
    color: "#9B59B6",
  }, // T
  {
    shape: [
      [1, 0, 0],
      [1, 1, 1],
    ],
    color: "#FF6600",
  }, // L
  {
    shape: [
      [0, 0, 1],
      [1, 1, 1],
    ],
    color: "#0066FF",
  }, // J
  {
    shape: [
      [0, 1, 1],
      [1, 1, 0],
    ],
    color: "#00CC66",
  }, // S
  {
    shape: [
      [1, 1, 0],
      [0, 1, 1],
    ],
    color: "#FF0066",
  }, // Z
];

function randomPiece() {
  return PIECES[Math.floor(Math.random() * PIECES.length)];
}

function rotate(shape) {
  return shape[0].map((_, i) => shape.map((row) => row[i]).reverse());
}

function emptyBoard() {
  return Array.from({ length: ROWS }, () => Array(COLS).fill(null));
}

function isValid(board, shape, pos) {
  return shape.every((row, dy) =>
    row.every((cell, dx) => {
      if (!cell) return true;
      const nx = pos.x + dx;
      const ny = pos.y + dy;
      return nx >= 0 && nx < COLS && ny < ROWS && (ny < 0 || !board[ny]?.[nx]);
    }),
  );
}

export function TetrisGame({ onClose }) {
  const [board, setBoard] = useState(emptyBoard());
  const [piece, setPiece] = useState(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [score, setScore] = useState(0);
  const [lines, setLines] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [running, setRunning] = useState(false);
  const [showLeaderboard, setShowLeaderboard] = useState(false);

  const boardRef = useRef(board);
  boardRef.current = board;
  const pieceRef = useRef(piece);
  pieceRef.current = piece;
  const posRef = useRef(pos);
  posRef.current = pos;

  const containerRef = useRef(null);
  const swipeGestures = useSwipeGestures(containerRef);

  const spawnPiece = useCallback((b) => {
    const p = randomPiece();
    const startX = Math.floor((COLS - p.shape[0].length) / 2);
    if (!isValid(b, p.shape, { x: startX, y: 0 })) {
      setGameOver(true);
      setRunning(false);
      return false;
    }
    setPiece(p);
    setPos({ x: startX, y: 0 });
    return true;
  }, []);

  const lockPiece = useCallback((b, p, ps) => {
    const newBoard = b.map((row) => [...row]);
    p.shape.forEach((row, dy) =>
      row.forEach((cell, dx) => {
        if (cell && ps.y + dy >= 0) {
          newBoard[ps.y + dy][ps.x + dx] = p.color;
        }
      }),
    );
    // clear lines
    const cleared = newBoard.filter((row) => row.every(Boolean));
    const kept = newBoard.filter((row) => !row.every(Boolean));
    const empty = Array.from({ length: cleared.length }, () =>
      Array(COLS).fill(null),
    );
    const result = [...empty, ...kept];
    setBoard(result);
    setLines((l) => l + cleared.length);
    setScore((s) => s + cleared.length * 100);
    boardRef.current = result;
    return result;
  }, []);

  const drop = useCallback(() => {
    const p = pieceRef.current;
    const ps = posRef.current;
    if (!p) return;
    const newPos = { x: ps.x, y: ps.y + 1 };
    if (isValid(boardRef.current, p.shape, newPos)) {
      setPos(newPos);
    } else {
      const b = lockPiece(boardRef.current, p, ps);
      spawnPiece(b);
    }
  }, [lockPiece, spawnPiece]);

  const reset = useCallback(() => {
    const b = emptyBoard();
    setBoard(b);
    setScore(0);
    setLines(0);
    setGameOver(false);
    setRunning(true);
    spawnPiece(b);
  }, [spawnPiece]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (!running) return;
      const p = pieceRef.current;
      const ps = posRef.current;
      if (!p) return;

      // Смещение влево (ArrowLeft или A)
      if (
        e.key === "ArrowLeft" ||
        e.key === "a" ||
        e.key === "A" ||
        e.key === "ф" ||
        e.key === "Ф"
      ) {
        e.preventDefault();
        const np = { x: ps.x - 1, y: ps.y };
        if (isValid(boardRef.current, p.shape, np)) setPos(np);
      }

      // Смещение вправо (ArrowRight или D)
      if (
        e.key === "ArrowRight" ||
        e.key === "d" ||
        e.key === "D" ||
        e.key === "в" ||
        e.key === "В"
      ) {
        e.preventDefault();
        const np = { x: ps.x + 1, y: ps.y };
        if (isValid(boardRef.current, p.shape, np)) setPos(np);
      }

      // Падение вниз (ArrowDown или S)
      if (
        e.key === "ArrowDown" ||
        e.key === "s" ||
        e.key === "S" ||
        e.key === "ы" ||
        e.key === "Ы"
      ) {
        e.preventDefault();
        drop();
      }

      // Поворот (ArrowUp или W)
      if (
        e.key === "ArrowUp" ||
        e.key === "w" ||
        e.key === "W" ||
        e.key === "ц" ||
        e.key === "Ц"
      ) {
        e.preventDefault();
        const rotated = rotate(p.shape);
        if (isValid(boardRef.current, rotated, ps)) {
          setPiece({ ...p, shape: rotated });
        }
      }

      // Мгновенный сброс (Space)
      if (e.key === " ") {
        e.preventDefault();
        let ny = ps.y;
        while (isValid(boardRef.current, p.shape, { x: ps.x, y: ny + 1 })) ny++;
        const hardPos = { x: ps.x, y: ny };
        const b = lockPiece(boardRef.current, p, hardPos);
        spawnPiece(b);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [running, drop, lockPiece, spawnPiece, onClose]);

  useEffect(() => {
    if (!running) return;
    const speed = Math.max(100, 500 - Math.floor(lines / 10) * 50);
    const id = setInterval(drop, speed);
    return () => clearInterval(id);
  }, [running, drop, lines]);

  // Render board with current piece
  const displayBoard = board.map((row) => [...row]);
  if (piece && running) {
    piece.shape.forEach((row, dy) =>
      row.forEach((cell, dx) => {
        if (cell) {
          const ny = pos.y + dy;
          const nx = pos.x + dx;
          if (ny >= 0 && ny < ROWS && nx >= 0 && nx < COLS) {
            displayBoard[ny][nx] = piece.color;
          }
        }
      }),
    );
  }

  return (
    <>
      <div className="flex gap-4 py-2 justify-center">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs text-primary/60">🟦 TETRIS</span>
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
            {displayBoard.map((row, r) =>
              row.map((cell, c) => (
                <div
                  key={`${r}-${c}`}
                  className="absolute border border-black/20"
                  style={{
                    width: CELL,
                    height: CELL,
                    left: c * CELL,
                    top: r * CELL,
                    backgroundColor: cell || "transparent",
                    opacity: cell ? 1 : 0.02,
                  }}
                />
              )),
            )}

            {!running && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/85 gap-4 p-4 text-center w-100 h-100">
                <div className="space-y-2">
                  <p className="font-mono text-primary text-sm uppercase tracking-wider">
                    {gameOver ? "Game Over" : "🟦 Tetris"}
                  </p>

                  {gameOver && (
                    <div className="space-y-3">
                      <p className="font-mono text-primary font-bold text-base">
                        SCORE: {score}
                      </p>
                      <p className="font-mono text-[10px] text-primary/60 leading-relaxed max-w-[140px] mx-auto">
                        Take a screenshot and send it to me in telegram! I'll
                        add you to the{" "}
                        <span className="text-primary/90 underline">
                          leaderboard
                        </span>
                        .
                      </p>
                    </div>
                  )}
                </div>

                <button
                  onClick={reset}
                  className="font-mono text-xs border border-primary/30 px-4 py-2 text-primary hover:bg-primary/10 transition-colors mt-2"
                >
                  {gameOver ? "TRY AGAIN" : "START GAME"}
                </button>
              </div>
            )}
          </div>

          <p className="font-mono text-[10px] text-primary/30">
            WASD or Arrows move/rotate · Space hard drop
          </p>

          {/* Mobile Controls */}
          <div className="grid grid-cols-3 gap-1 w-full max-w-[120px] mx-auto md:hidden">
            <div />
            <button
              onMouseDown={() => {
                const evt = new KeyboardEvent("keydown", { key: "ArrowUp" });
                window.dispatchEvent(evt);
              }}
              onMouseUp={() => {
                const evt = new KeyboardEvent("keyup", { key: "ArrowUp" });
                window.dispatchEvent(evt);
              }}
              className="bg-primary/20 hover:bg-primary/30 text-primary text-xs font-bold py-2 border border-primary/30"
            >
              ↑
            </button>
            <div />
            <button
              onMouseDown={() => {
                const evt = new KeyboardEvent("keydown", { key: "ArrowLeft" });
                window.dispatchEvent(evt);
              }}
              onMouseUp={() => {
                const evt = new KeyboardEvent("keyup", { key: "ArrowLeft" });
                window.dispatchEvent(evt);
              }}
              className="bg-primary/20 hover:bg-primary/30 text-primary text-xs font-bold py-2 border border-primary/30"
            >
              ←
            </button>
            <button
              onMouseDown={() => {
                const evt = new KeyboardEvent("keydown", { key: "ArrowDown" });
                window.dispatchEvent(evt);
              }}
              onMouseUp={() => {
                const evt = new KeyboardEvent("keyup", { key: "ArrowDown" });
                window.dispatchEvent(evt);
              }}
              className="bg-primary/20 hover:bg-primary/30 text-primary text-xs font-bold py-2 border border-primary/30"
            >
              ↓
            </button>
            <button
              onMouseDown={() => {
                const evt = new KeyboardEvent("keydown", { key: "ArrowRight" });
                window.dispatchEvent(evt);
              }}
              onMouseUp={() => {
                const evt = new KeyboardEvent("keyup", { key: "ArrowRight" });
                window.dispatchEvent(evt);
              }}
              className="bg-primary/20 hover:bg-primary/30 text-primary text-xs font-bold py-2 border border-primary/30"
            >
              →
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-6 font-mono text-xs">
          <div className="border border-primary/15 p-3 min-w-[80px]">
            <div className="text-primary/40 mb-1">SCORE</div>
            <div className="text-primary font-bold text-sm">{score}</div>
          </div>
          <div className="border border-primary/15 p-3">
            <div className="text-primary/40 mb-1">LINES</div>
            <div className="text-primary font-bold text-sm">{lines}</div>
          </div>
          <div className="border border-primary/15 p-3">
            <div className="text-primary/40 mb-1">LEVEL</div>
            <div className="text-primary font-bold text-sm">
              {Math.floor(lines / 10) + 1}
            </div>
          </div>
        </div>
      </div>
      {showLeaderboard && (
        <Leaderboard game="tetris" onClose={() => setShowLeaderboard(false)} />
      )}
    </>
  );
}
