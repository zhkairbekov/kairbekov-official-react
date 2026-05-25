import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import leaderboardData from "./leaderboard.json";

export function Leaderboard({ game, onClose }) {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const gameScores = leaderboardData[game] || [];
    setScores(gameScores.sort((a, b) => b.score - a.score));
  }, [game]);

  const medals = ["🥇", "🥈", "🥉"];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[1000] hidden xl:flex items-center justify-center bg-black/50 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.25 }}
          className="bg-black/95 border border-primary/30 rounded-2xl p-6 max-w-sm w-full mx-4 shadow-[0_0_60px_rgba(255,180,0,0.15)]"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-mono text-lg font-bold text-primary uppercase">
              {game} Leaderboard
            </h2>
            <button
              onClick={onClose}
              className="text-primary/50 hover:text-primary transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Scores */}
          <div className="space-y-2">
            {scores.length === 0 ? (
              <p className="font-mono text-primary/50 text-sm py-4 text-center">
                No scores yet. Be the first!
              </p>
            ) : (
              scores.map((entry, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className="flex items-center justify-between px-3 py-2 rounded border border-primary/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
                >
                  <div className="flex items-center gap-2 flex-1">
                    <span className="text-lg w-6">
                      {idx < 3 ? medals[idx] : `#${idx + 1}`}
                    </span>
                    <span className="font-mono text-primary/70 text-sm">
                      {entry.name}
                    </span>
                  </div>
                  <div className="flex flex-col items-end gap-0.5">
                    <span className="font-mono font-bold text-primary text-sm">
                      {entry.score}
                    </span>
                    <span className="font-mono text-primary/40 text-[10px]">
                      {entry.date}
                    </span>
                  </div>
                </motion.div>
              ))
            )}
          </div>

          {/* Submit hint */}
          <p className="font-mono text-[10px] text-primary/40 mt-4 pt-3 border-t border-primary/10 text-center">
            Send your score in Telegram to be added
          </p>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
