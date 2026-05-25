import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SnakeGame } from "./games/Snake";
import { TetrisGame } from "./games/Tetris";
import { MinesweeperGame } from "./games/Minesweeper";
import { Game2048 } from "./games/Game2048";
import { BreakoutGame } from "./games/Breakout";

const GAME_MAP = {
  snake: SnakeGame,
  tetris: TetrisGame,
  minesweeper: MinesweeperGame,
  2048: Game2048,
  breakout: BreakoutGame,
};

export function GameRenderer({ activeGame, onClose }) {
  const GameComponent = activeGame ? GAME_MAP[activeGame] : null;

  return (
    <AnimatePresence>
      {GameComponent && (
        <motion.div
          key={activeGame}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="border-t border-primary/10 overflow-auto"
          style={{ maxHeight: "425px" }}
          onWheel={(e) => e.stopPropagation()}
        >
          <GameComponent onClose={onClose} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
