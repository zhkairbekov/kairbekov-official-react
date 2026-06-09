import React, { useRef, useEffect } from "react";
import {
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  RotateCw,
} from "lucide-react";

/**
 * Компонент сенсорных кнопок управления для мобильных игр
 * Эмулирует нажатия клавиш (стрелки и буквы)
 */
export function GameControlsPad({ gameType = "snake" }) {
  const pressRef = useRef({});

  const simulateKeyPress = (key, isDown) => {
    if (isDown) {
      pressRef.current[key] = true;
      window.dispatchEvent(
        new KeyboardEvent("keydown", {
          key,
          code: key,
          bubbles: true,
          cancelable: true,
        }),
      );
    } else {
      pressRef.current[key] = false;
      window.dispatchEvent(
        new KeyboardEvent("keyup", {
          key,
          code: key,
          bubbles: true,
          cancelable: true,
        }),
      );
    }
  };

  const handleButtonDown = (key) => {
    simulateKeyPress(key, true);
  };

  const handleButtonUp = (key) => {
    simulateKeyPress(key, false);
  };

  // Очищаем нажатия при размонтировании компонента
  useEffect(() => {
    return () => {
      Object.keys(pressRef.current).forEach((key) => {
        if (pressRef.current[key]) {
          simulateKeyPress(key, false);
        }
      });
    };
  }, []);

  if (gameType === "minesweeper") {
    // Minesweeper использует клики, не требует кнопок управления
    return null;
  }

  return (
    <div
      className="fixed bottom-20 left-0 right-0 flex justify-center pointer-events-none z-40 md:hidden"
      onTouchStart={(e) => e.preventDefault()}
    >
      <div className="pointer-events-auto flex justify-between items-end w-full max-w-sm px-4 gap-4">
        {/* D-Pad для управления направлением */}
        <div className="flex flex-col items-center gap-2 p-4">
          {/* Up */}
          <button
            onMouseDown={() => handleButtonDown("ArrowUp")}
            onMouseUp={() => handleButtonUp("ArrowUp")}
            onTouchStart={() => handleButtonDown("ArrowUp")}
            onTouchEnd={() => handleButtonUp("ArrowUp")}
            className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/20 border border-primary/40 hover:bg-primary/30 active:bg-primary/40 transition-all"
            aria-label="Up"
          >
            <ChevronUp size={24} strokeWidth={2.5} className="text-primary" />
          </button>

          <div className="flex gap-2 items-center">
            {/* Left */}
            <button
              onMouseDown={() => handleButtonDown("ArrowLeft")}
              onMouseUp={() => handleButtonUp("ArrowLeft")}
              onTouchStart={() => handleButtonDown("ArrowLeft")}
              onTouchEnd={() => handleButtonUp("ArrowLeft")}
              className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/20 border border-primary/40 hover:bg-primary/30 active:bg-primary/40 transition-all"
              aria-label="Left"
            >
              <ChevronLeft
                size={24}
                strokeWidth={2.5}
                className="text-primary"
              />
            </button>

            {/* Right */}
            <button
              onMouseDown={() => handleButtonDown("ArrowRight")}
              onMouseUp={() => handleButtonUp("ArrowRight")}
              onTouchStart={() => handleButtonDown("ArrowRight")}
              onTouchEnd={() => handleButtonUp("ArrowRight")}
              className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/20 border border-primary/40 hover:bg-primary/30 active:bg-primary/40 transition-all"
              aria-label="Right"
            >
              <ChevronRight
                size={24}
                strokeWidth={2.5}
                className="text-primary"
              />
            </button>
          </div>

          {/* Down */}
          <button
            onMouseDown={() => handleButtonDown("ArrowDown")}
            onMouseUp={() => handleButtonUp("ArrowDown")}
            onTouchStart={() => handleButtonDown("ArrowDown")}
            onTouchEnd={() => handleButtonUp("ArrowDown")}
            className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/20 border border-primary/40 hover:bg-primary/30 active:bg-primary/40 transition-all"
            aria-label="Down"
          >
            <ChevronDown size={24} strokeWidth={2.5} className="text-primary" />
          </button>
        </div>

        {/* Дополнительные кнопки для специфических игр */}
        {gameType === "tetris" && (
          <div className="flex flex-col gap-2 pb-1">
            {/* Rotate Button */}
            <button
              onMouseDown={() => handleButtonDown("ArrowUp")}
              onMouseUp={() => handleButtonUp("ArrowUp")}
              onTouchStart={() => handleButtonDown("ArrowUp")}
              onTouchEnd={() => handleButtonUp("ArrowUp")}
              className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/20 border border-primary/40 hover:bg-primary/30 active:bg-primary/40 transition-all"
              aria-label="Rotate"
              title="Поворот"
            >
              <RotateCw size={20} strokeWidth={2.5} className="text-primary" />
            </button>
          </div>
        )}

        {gameType === "2048" && (
          <div className="flex flex-col gap-2 pb-1">
            {/* Info */}
            <div className="text-[10px] text-muted-foreground text-center px-2 py-1 border border-border/40 rounded bg-primary/5">
              Свайп или
              <br />
              стрелки
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
