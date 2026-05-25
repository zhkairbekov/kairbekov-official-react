import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function TerminalInput({
  inputRef,
  input,
  setInput,
  onKeyDown,
  suggestions,
  suggestionIndex,
  setSuggestionIndex,
  onSuggestionClick,
}) {
  return (
    <div className="flex-shrink-0 border-t border-primary/10">
      {/* Suggestions */}
      <AnimatePresence>
        {suggestions.length > 0 && input && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            className="px-5 py-2 flex gap-1.5 flex-wrap border-b border-primary/5 bg-white/[0.01]"
          >
            {suggestions.map((item, i) => (
              <button
                key={item}
                onMouseDown={(e) => {
                  e.preventDefault();
                  onSuggestionClick(item);
                }}
                className={`px-2 py-0.5 text-[11px] rounded border font-mono transition-all ${
                  i === suggestionIndex
                    ? "border-primary/60 text-primary bg-primary/10"
                    : "border-primary/15 text-primary/50 hover:text-primary hover:border-primary/35"
                }`}
              >
                {item}
              </button>
            ))}
            <span className="text-[10px] text-primary/25 font-mono self-center ml-1">
              TAB to cycle
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Input row */}
      <div className="flex items-center gap-3 px-5 py-3.5 bg-white/[0.02] border-t border-primary/10">
        <span className="font-mono text-[13px] text-primary/40 whitespace-nowrap select-none">
          visitor@zhanat:~$
        </span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setSuggestionIndex(-1);
          }}
          onKeyDown={onKeyDown}
          autoComplete="off"
          autoCorrect="off"
          spellCheck={false}
          placeholder="type a command..."
          className="flex-1 bg-transparent outline-none text-primary placeholder:text-primary/20 font-mono text-[13px] caret-primary"
        />
        <span className="font-mono text-primary animate-pulse text-sm select-none">
          ▊
        </span>
      </div>
    </div>
  );
}
