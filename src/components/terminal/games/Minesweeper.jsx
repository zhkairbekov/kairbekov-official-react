import React, { useEffect, useState, useRef } from "react";

const ROWS = 10;
const COLS = 14;
const MINES = 18;
const CELL = 26;

function createBoard() {
  const board = Array.from({ length: ROWS }, (_, r) =>
    Array.from({ length: COLS }, (_, c) => ({
      r,
      c,
      mine: false,
      revealed: false,
      flagged: false,
      count: 0,
    })),
  );

  // Place mines
  let placed = 0;
  while (placed < MINES) {
    const r = Math.floor(Math.random() * ROWS);
    const c = Math.floor(Math.random() * COLS);
    if (!board[r][c].mine) {
      board[r][c].mine = true;
      placed++;
    }
  }

  // Count neighbors
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      if (board[r][c].mine) continue;
      let count = 0;
      for (let dr = -1; dr <= 1; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
          if (board[r + dr]?.[c + dc]?.mine) count++;
        }
      }
      board[r][c].count = count;
    }
  }
  return board;
}

function revealFlood(board, r, c) {
  const b = board.map((row) => row.map((cell) => ({ ...cell })));
  const stack = [[r, c]];
  while (stack.length) {
    const [cr, cc] = stack.pop();
    const cell = b[cr]?.[cc];
    if (!cell || cell.revealed || cell.flagged) continue;
    cell.revealed = true;
    if (cell.count === 0 && !cell.mine) {
      for (let dr = -1; dr <= 1; dr++)
        for (let dc = -1; dc <= 1; dc++)
          if (dr !== 0 || dc !== 0) stack.push([cr + dr, cc + dc]);
    }
  }
  return b;
}

const COUNT_COLORS = [
  "",
  "#4FC3F7",
  "#81C784",
  "#E57373",
  "#7986CB",
  "#FF8A65",
  "#4DD0E1",
  "#CE93D8",
  "#90A4AE",
];

export function MinesweeperGame({ onClose }) {
  const [board, setBoard] = useState(null);
  const [status, setStatus] = useState("idle"); // idle | playing | won | lost
  const [flags, setFlags] = useState(0);
  const [time, setTime] = useState(0);
  const longPressTimerRef = useRef(null);
  const touchStartPosRef = useRef(null);
  const longPressTriggeredRef = useRef(false);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  useEffect(() => {
    if (status !== "playing") return;
    const id = setInterval(() => setTime((t) => t + 1), 1000);
    return () => clearInterval(id);
  }, [status]);

  const startGame = () => {
    setBoard(createBoard());
    setStatus("playing");
    setFlags(0);
    setTime(0);
  };

  const handleClick = (r, c) => {
    if (longPressTriggeredRef.current) {
      longPressTriggeredRef.current = false;
      return;
    }
    if (status !== "playing") return;
    const cell = board[r][c];
    if (cell.revealed || cell.flagged) return;

    if (cell.mine) {
      // Reveal all mines
      const b = board.map((row) =>
        row.map((cell) => ({
          ...cell,
          revealed: cell.mine ? true : cell.revealed,
        })),
      );
      setBoard(b);
      setStatus("lost");
      return;
    }

    const newBoard = revealFlood(board, r, c);
    setBoard(newBoard);

    // Check win
    const unrevealed = newBoard
      .flat()
      .filter((cell) => !cell.revealed && !cell.mine);
    if (unrevealed.length === 0) setStatus("won");
  };

  const handleRightClick = (e, r, c) => {
    e.preventDefault();
    if (status !== "playing") return;
    const cell = board[r][c];
    if (cell.revealed) return;
    const newBoard = board.map((row) => row.map((cell) => ({ ...cell })));
    newBoard[r][c].flagged = !newBoard[r][c].flagged;
    setFlags((f) => f + (newBoard[r][c].flagged ? 1 : -1));
    setBoard(newBoard);
  };

  const handleTouchStart = (e, r, c) => {
    if (status !== "playing") return;
    const touch = e.touches[0];
    touchStartPosRef.current = { x: touch.clientX, y: touch.clientY };
    longPressTriggeredRef.current = false;
    longPressTimerRef.current = setTimeout(() => {
      const cell = board[r][c];
      if (!cell.revealed) {
        const newBoard = board.map((row) => row.map((cell) => ({ ...cell })));
        newBoard[r][c].flagged = !newBoard[r][c].flagged;
        setFlags((f) => f + (newBoard[r][c].flagged ? 1 : -1));
        setBoard(newBoard);
      }
      longPressTriggeredRef.current = true;
      longPressTimerRef.current = null;
    }, 500);
  };

  const handleTouchMove = (e) => {
    if (!longPressTimerRef.current) return;
    const touch = e.touches[0];
    const dx = Math.abs(touch.clientX - touchStartPosRef.current.x);
    const dy = Math.abs(touch.clientY - touchStartPosRef.current.y);
    if (dx > 10 || dy > 10) {
      clearTimeout(longPressTimerRef.current);
      longPressTimerRef.current = null;
    }
  };

  const handleTouchEnd = (e) => {
    if (longPressTimerRef.current) {
      clearTimeout(longPressTimerRef.current);
      longPressTimerRef.current = null;
    }
  };

  if (!board || status === "idle") {
    return (
      <div className="flex flex-col items-center gap-4 py-4">
        <span className="font-mono text-primary text-sm">💣 MINESWEEPER</span>
        <p className="font-mono text-xs text-primary/40">
          {COLS}×{ROWS} grid · {MINES} mines
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
    <div className="flex flex-col items-center gap-2 py-2">
      {/* Header */}
      <div className="flex items-center justify-between w-full px-1">
        <span className="font-mono text-xs text-primary/60">
          🚩 {MINES - flags}
        </span>
        <span
          className={`font-mono text-xs font-bold ${status === "won" ? "text-green-400" : status === "lost" ? "text-red-400" : "text-primary"}`}
        >
          {status === "won"
            ? "YOU WON! 🎉"
            : status === "lost"
              ? "BOOM 💥"
              : `⏱ ${time}s`}
        </span>
        <button
          onClick={onClose}
          className="font-mono text-xs text-primary/40 hover:text-primary"
        >
          [ESC]
        </button>
      </div>

      {/* Board */}
      <div
        className="border border-primary/20"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${COLS}, ${CELL}px)`,
        }}
        onContextMenu={(e) => e.preventDefault()}
      >
        {board.flat().map((cell) => {
          let bg = "bg-primary/5 hover:bg-primary/10";
          let content = "";
          let textColor = "";

          if (cell.flagged && !cell.revealed) {
            bg = "bg-primary/5";
            content = "🚩";
          } else if (!cell.revealed) {
            bg = "bg-white/5 hover:bg-white/10 border border-white/5";
          } else if (cell.mine) {
            bg = "bg-red-900/40";
            content = "💣";
          } else if (cell.count > 0) {
            bg = "bg-black/30";
            content = cell.count;
            textColor = COUNT_COLORS[cell.count];
          } else {
            bg = "bg-black/20";
          }

          return (
            <button
              key={`${cell.r}-${cell.c}`}
              className={`flex items-center justify-center text-[11px] font-bold font-mono border border-black/20 select-none ${bg}`}
              style={{ width: CELL, height: CELL, color: textColor }}
              onClick={() => handleClick(cell.r, cell.c)}
              onContextMenu={(e) => handleRightClick(e, cell.r, cell.c)}
              onTouchStart={(e) => handleTouchStart(e, cell.r, cell.c)}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {content}
            </button>
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
        Left click reveal · Right click or long-press flag
      </p>
    </div>
  );
}
