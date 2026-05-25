import React from "react";
import { X, Minus, Square } from "lucide-react";

export function TerminalHeader({ onClose }) {
  return (
    <div className="flex items-center justify-between px-5 py-3 border-b border-primary/10 bg-white/[0.02] flex-shrink-0">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1.5">
          <button
            onClick={onClose}
            className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors flex items-center justify-center group"
          >
            <X size={7} className="opacity-0 group-hover:opacity-100 text-red-900 transition-opacity" />
          </button>
          <button className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 transition-colors flex items-center justify-center group">
            <Minus size={7} className="opacity-0 group-hover:opacity-100 text-yellow-900 transition-opacity" />
          </button>
          <button className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 transition-colors flex items-center justify-center group">
            <Square size={6} className="opacity-0 group-hover:opacity-100 text-green-900 transition-opacity" />
          </button>
        </div>

        <span className="text-[10px] uppercase tracking-[0.3em] text-primary/50 font-mono select-none">
          zhanat-terminal — bash
        </span>
      </div>

      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
        <span className="text-[10px] text-primary/30 font-mono">online</span>
      </div>
    </div>
  );
}