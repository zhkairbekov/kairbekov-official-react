import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Terminal } from "lucide-react";
import { DesktopOnly } from "./components/Responsive";

import { useTerminal } from "./terminal/useTerminal";
import { TerminalHeader } from "./terminal/TerminalHeader";
import { TerminalLine } from "./terminal/TerminalLine";
import { TerminalInput } from "./terminal/TerminalInput";
import { GameRenderer } from "./terminal/GameRenderer";
import {
  MatrixEffect,
  HackEffect,
  DiscoEffect,
} from "./terminal/SpecialEffects";

export default function MiniTerminal() {
  const [open, setOpen] = React.useState(false);

  const {
    input,
    setInput,
    history,
    suggestions,
    suggestionIndex,
    setSuggestionIndex,
    activeGame,
    specialMode,
    inputRef,
    terminalBodyRef,
    focusInput,
    executeCommand,
    handleKeyDown,
    closeGame,
  } = useTerminal();

  // Global keyboard shortcut
  useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((p) => !p);
      }
      if (e.key === "Escape" && !activeGame) setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [activeGame]);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Focus input when opened
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 120);
  }, [open, inputRef]);

  const handleSuggestionClick = (cmd) => {
    setInput(cmd);
    setSuggestionIndex(-1);
    inputRef.current?.focus();
  };

  return (
    <DesktopOnly>
      <>
        {/* Floating button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          onClick={() => setOpen(true)}
          className="fixed right-6 bottom-6 z-[999] hidden xl:flex items-center justify-center w-14 h-14 rounded-2xl border border-primary/20 bg-black/70 backdrop-blur-xl text-primary hover:scale-105 hover:border-primary/40 transition-all duration-300 shadow-[0_0_30px_rgba(255,180,0,0.15)]"
          title="Open terminal (Ctrl+K)"
        >
          <Terminal size={20} />
        </motion.button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[998] hidden xl:block"
              onMouseDown={() => setOpen(false)}
            >
              {/* Backdrop */}
              <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />

              {/* Terminal Panel */}
              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 24, scale: 0.95 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                onMouseDown={(e) => e.stopPropagation()}
                onClick={focusInput}
                className="
                  fixed right-6 bottom-24 z-[999]
                  flex flex-col
                  w-[740px]
                  overflow-hidden
                  rounded-3xl
                  border border-primary/20
                  bg-black/92 backdrop-blur-2xl
                  shadow-[0_0_60px_rgba(255,180,0,0.10),0_24px_64px_rgba(0,0,0,0.6)]
                  cursor-default
                "
                style={{ maxHeight: "calc(100vh - 140px)" }}
              >
                {/* Special effects overlay */}
                <AnimatePresence>
                  {specialMode === "matrix" && <MatrixEffect />}
                  {specialMode === "hack" && <HackEffect />}
                  {specialMode === "disco" && <DiscoEffect />}
                </AnimatePresence>

                {/* Header */}
                <TerminalHeader onClose={() => setOpen(false)} />

                {/* History — only shown when no game active */}
                {!activeGame && (
                  <div
                    ref={terminalBodyRef}
                    onWheel={(e) => e.stopPropagation()}
                    onClick={focusInput}
                    className="flex-1 overflow-y-auto overscroll-contain px-5 py-4 font-mono text-[13px] leading-7 text-primary min-h-[200px]"
                    style={{ maxHeight: "360px" }}
                  >
                    {history.map((entry, i) => (
                      <TerminalLine key={i} entry={entry} index={i} />
                    ))}
                  </div>
                )}

                {/* Game area */}
                <GameRenderer activeGame={activeGame} onClose={closeGame} />

                {/* Input — hidden during active game */}
                {!activeGame && (
                  <TerminalInput
                    inputRef={inputRef}
                    input={input}
                    setInput={setInput}
                    onKeyDown={handleKeyDown}
                    suggestions={suggestions}
                    suggestionIndex={suggestionIndex}
                    setSuggestionIndex={setSuggestionIndex}
                    onSuggestionClick={handleSuggestionClick}
                  />
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    </DesktopOnly>
  );
}
