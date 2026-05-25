import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Фильтруем ошибки блокировки ресурсов от ad-blockers в консоли
const originalError = console.error;
const originalWarn = console.warn;
console.error = function (...args) {
  const msg = String(args[0] || "");
  if (msg.includes("mc.yandex.ru") || msg.includes("ERR_BLOCKED_BY_CLIENT")) {
    return;
  }
  originalError.apply(console, args);
};

console.warn = function (...args) {
  const msg = String(args[0] || "");
  if (msg.includes("mc.yandex.ru")) {
    return;
  }
  originalWarn.apply(console, args);
};

createRoot(document.getElementById("root")).render(<App />);
