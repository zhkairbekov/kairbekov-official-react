import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { SnakeGame } from "../terminal/games/Snake";
import { TetrisGame } from "../terminal/games/Tetris";
import { MinesweeperGame } from "../terminal/games/Minesweeper";
import { Game2048 } from "../terminal/games/Game2048";
import { BreakoutGame } from "../terminal/games/Breakout";

const GAME_MAP = {
  snake: { component: SnakeGame, label: "Snake" },
  tetris: { component: TetrisGame, label: "Tetris" },
  minesweeper: { component: MinesweeperGame, label: "Minesweeper" },
  2048: { component: Game2048, label: "2048" },
  breakout: { component: BreakoutGame, label: "Breakout" },
};

export function MobileGameModal({ gameId, onClose }) {
  const gameData = GAME_MAP[gameId];
  const GameComponent = gameData?.component;

  useEffect(() => {
    if (gameId) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [gameId]);

  const handleClose = () => {
    onClose();
  };

  return (
    <AnimatePresence>
      {gameId && GameComponent && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            onClick={handleClose}
          />

          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 md:hidden flex flex-col"
            style={{
              top: "56px",
              bottom: 0,
              paddingBottom: "env(safe-area-inset-bottom)",
            }}
          >
            {/* Header */}
            <div className="flex-shrink-0 bg-background/95 backdrop-blur border-b border-border/60 px-4 py-3 flex items-center justify-between">
              <h3 className="font-display font-black tracking-tight text-lg">
                {gameData.label}
              </h3>
              <button
                onClick={handleClose}
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-border hover:border-primary text-muted-foreground hover:text-primary transition-colors active:bg-primary/10"
                aria-label="Close game"
              >
                <X size={18} strokeWidth={2} />
              </button>
            </div>

            {/* Game Container */}
            <div className="flex-1 overflow-auto overscroll-contain bg-background flex items-center justify-center p-2">
              <div className="w-full h-full flex items-center justify-center">
                {/* Масштабирование для лучшей видимости на мобильных */}
                <div className="scale-75 sm:scale-90 origin-center">
                  <GameComponent onClose={handleClose} />
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
