/**
 * Утилита для обработки свайп-жестов на мобильных устройствах
 * Эмулирует нажатия клавиш на основе направления свайпа
 */
import { useEffect } from "react";

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
      }),
    );
    // Небольшая задержка перед отпусканием клавиши
    setTimeout(() => {
      window.dispatchEvent(
        new KeyboardEvent("keyup", {
          key,
          code: key,
          bubbles: true,
          cancelable: true,
        }),
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
      // Горизонтальный свайп - предотвращаем стандартное поведение
      e.preventDefault();
      if (deltaX > 0) {
        simulateKeyPress("ArrowRight");
      } else {
        simulateKeyPress("ArrowLeft");
      }
    } else if (absDeltaY > SWIPE_THRESHOLD && absDeltaY > absDeltaX) {
      // Вертикальный свайп - предотвращаем стандартное поведение
      e.preventDefault();
      if (deltaY > 0) {
        simulateKeyPress("ArrowDown");
      } else {
        simulateKeyPress("ArrowUp");
      }
    }
    // Если это не свайп (короткое нажатие), не предотвращаем default - позволяет кликам работать
  };

  const handleTouchMove = (e) => {
    // Предотвращаем скролл только если есть движение
    const touch = e.touches[0];
    const deltaX = Math.abs(touch.clientX - touchStartX.current);
    const deltaY = Math.abs(touch.clientY - touchStartY.current);

    // Если движение превышает небольшой порог, предотвращаем скролл
    if (deltaX > 5 || deltaY > 5) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    // Добавляем event listeners с { passive: false } чтобы можно было вызывать preventDefault
    element.addEventListener("touchstart", handleTouchStart, { passive: false });
    element.addEventListener("touchmove", handleTouchMove, { passive: false });
    element.addEventListener("touchend", handleTouchEnd, { passive: false });

    return () => {
      element.removeEventListener("touchstart", handleTouchStart);
      element.removeEventListener("touchmove", handleTouchMove);
      element.removeEventListener("touchend", handleTouchEnd);
    };
  }, [containerRef]);

  return {};
}
