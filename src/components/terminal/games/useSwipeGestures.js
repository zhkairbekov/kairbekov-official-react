/**
 * Утилита для обработки свайп-жестов на мобильных устройствах
 * Эмулирует нажатия клавиш на основе направления свайпа
 */

export function useSwipeGestures(containerRef) {
  const touchStartX = { current: 0 };
  const touchStartY = { current: 0 };
  const SWIPE_THRESHOLD = 30; // Минимальное расстояние для свайпа (px)

  const simulateKeyPress = (key) => {
    window.dispatchEvent(
      new KeyboardEvent("keydown", {
        key,
        code: key,
        bubbles: true,
        cancelable: true,
      })
    );
    // Небольшая задержка перед отпусканием клавиши
    setTimeout(() => {
      window.dispatchEvent(
        new KeyboardEvent("keyup", {
          key,
          code: key,
          bubbles: true,
          cancelable: true,
        })
      );
    }, 50);
  };

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    touchStartX.current = touch.clientX;
    touchStartY.current = touch.clientY;
  };

  const handleTouchEnd = (e) => {
    const touch = e.changedTouches[0];
    const deltaX = touch.clientX - touchStartX.current;
    const deltaY = touch.clientY - touchStartY.current;

    // Определяем основное направление свайпа
    const absDeltaX = Math.abs(deltaX);
    const absDeltaY = Math.abs(deltaY);

    // Проверяем пороги свайпа
    if (absDeltaX > SWIPE_THRESHOLD && absDeltaX > absDeltaY) {
      // Горизонтальный свайп
      if (deltaX > 0) {
        simulateKeyPress("ArrowRight");
      } else {
        simulateKeyPress("ArrowLeft");
      }
    } else if (absDeltaY > SWIPE_THRESHOLD && absDeltaY > absDeltaX) {
      // Вертикальный свайп
      if (deltaY > 0) {
        simulateKeyPress("ArrowDown");
      } else {
        simulateKeyPress("ArrowUp");
      }
    }
  };

  return {
    onTouchStart: handleTouchStart,
    onTouchEnd: handleTouchEnd,
  };
}
