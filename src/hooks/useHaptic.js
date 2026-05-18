// hooks/useHaptic.js
// Лёгкий хук для тактильной обратной связи через Web Vibration API.
// Безопасно деградирует на устройствах без поддержки.

/**
 * Паттерны вибрации:
 *   "light"   — 10ms  (почти неощутимо, для обычных нажатий)
 *   "medium"  — 20ms  (стандартный клик)
 *   "heavy"   — 40ms  (важное действие)
 *   "double"  — 10, 60, 10ms  (двойной тап, для соцсетей)
 *   "success" — 10, 40, 20ms  (подтверждение)
 */
const PATTERNS = {
  light: 10,
  medium: 20,
  heavy: 40,
  double: [10, 60, 10],
  success: [10, 40, 20],
};

/**
 * @param {"light"|"medium"|"heavy"|"double"|"success"} pattern
 */
export function vibrate(pattern = "light") {
  if (typeof window === "undefined") return;
  if (!("vibrate" in navigator)) return;
  try {
    navigator.vibrate(PATTERNS[pattern] ?? pattern);
  } catch {
    // silent fail
  }
}

/**
 * Хук — возвращает функцию haptic(pattern).
 * Использование:
 *   const haptic = useHaptic();
 *   <button onClick={() => { haptic("medium"); doSomething(); }}>...</button>
 */
export function useHaptic() {
  return vibrate;
}
