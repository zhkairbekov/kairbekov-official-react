import { useCallback, useMemo, useRef, useState } from "react";
import { COMMANDS, ALL_COMMAND_KEYS } from "./commands";

const INITIAL_HISTORY = [
  { type: "system", text: "ZhanatOS v2.6.0 — Terminal initialized." },
  { type: "system", text: "Type 'help' to see available commands." },
];

export function useTerminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState(INITIAL_HISTORY);
  const [cmdHistory, setCmdHistory] = useState([]);
  const [cmdIndex, setCmdIndex] = useState(-1);
  const [activeGame, setActiveGame] = useState(null);
  const [suggestionIndex, setSuggestionIndex] = useState(-1);
  const [specialMode, setSpecialMode] = useState(null); // 'matrix' | 'disco' | 'hack'

  const inputRef = useRef(null);
  const terminalBodyRef = useRef(null);

  const focusInput = useCallback(() => {
    inputRef.current?.focus();
  }, []);

  const scrollToBottom = useCallback(() => {
    setTimeout(() => {
      terminalBodyRef.current?.scrollTo({
        top: terminalBodyRef.current.scrollHeight,
        behavior: "smooth",
      });
    }, 50);
  }, []);

  const addLine = useCallback((entries) => {
    setHistory((prev) => [...prev, ...entries]);
  }, []);

  const suggestions = useMemo(() => {
    if (!input) return [];
    return ALL_COMMAND_KEYS.filter((cmd) =>
      cmd.toLowerCase().startsWith(input.toLowerCase()),
    );
  }, [input]);

  const executeCommand = useCallback(
    (rawCmd) => {
      const cmd = (rawCmd ?? input).trim();
      if (!cmd) return;

      const promptEntry = { type: "prompt", text: cmd };

      if (cmd === "clear") {
        setHistory([
          { type: "system", text: "ZhanatOS v2.6.0 — Terminal cleared." },
          { type: "system", text: "Type 'help' to see available commands." },
        ]);
        setInput("");
        setCmdHistory((prev) => [...prev, cmd]);
        setCmdIndex(-1);
        return;
      }

      // Games
      if (
        ["snake", "tetris", "minesweeper", "2048", "breakout"].includes(cmd)
      ) {
        setActiveGame(cmd);
        addLine([promptEntry, { type: "game", text: cmd }]);
        setCmdHistory((prev) => [...prev, cmd]);
        setCmdIndex(-1);
        setInput("");
        scrollToBottom();
        return;
      }

      // Special modes
      if (cmd === "matrix") {
        setSpecialMode("matrix");
        addLine([promptEntry]);
        setCmdHistory((prev) => [...prev, cmd]);
        setCmdIndex(-1);
        setInput("");
        setTimeout(() => setSpecialMode(null), 5000);
        scrollToBottom();
        return;
      }
      if (cmd === "hack") {
        setSpecialMode("hack");
        addLine([promptEntry]);
        setCmdHistory((prev) => [...prev, cmd]);
        setCmdIndex(-1);
        setInput("");
        setTimeout(() => setSpecialMode(null), 4000);
        scrollToBottom();
        return;
      }
      if (cmd === "disco") {
        setSpecialMode("disco");
        addLine([promptEntry]);
        setCmdHistory((prev) => [...prev, cmd]);
        setCmdIndex(-1);
        setInput("");
        setTimeout(() => setSpecialMode(null), 5000);
        scrollToBottom();
        return;
      }

      // Scroll to section
      if (cmd === "projects") {
        document
          .querySelector("#sites")
          ?.scrollIntoView({ behavior: "smooth" });
      }
      if (cmd === "about") {
        document
          .querySelector("#about")
          ?.scrollIntoView({ behavior: "smooth" });
      }

      // Weather with city
      if (cmd.startsWith("weather ")) {
        const city = cmd.slice(8).trim();
        if (!city) {
          addLine([
            promptEntry,
            {
              type: "output",
              text: "Usage: weather [city]\nExample: weather London\n",
            },
          ]);
          setCmdHistory((prev) => [...prev, cmd]);
          setCmdIndex(-1);
          setInput("");
          scrollToBottom();
          return;
        }

        // Fetch weather data from wttr.in
        (async () => {
          try {
            const response = await fetch(
              `https://wttr.in/${encodeURIComponent(city)}?format=j1`,
            );

            if (!response.ok) {
              addLine([
                promptEntry,
                {
                  type: "output",
                  text: `Error: City "${city}" not found\n`,
                },
              ]);
              scrollToBottom();
              return;
            }

            const data = await response.json();
            const current = data.current_condition[0];
            const location = data.nearest_area[0];

            const countryName = location.country[0].value;
            const regionName = location.region?.[0]?.value || "";
            const areaName = location.areaName[0].value;
            const temp = current.temp_C;
            const humidity = current.humidity;
            const windKph = current.windspeedKmph;
            const description = current.weatherDesc[0].value;
            const feelsLike = current.FeelsLikeC;

            // Use region if available, otherwise use area name
            const displayName = regionName || areaName;

            const output = `📍 ${displayName}, ${countryName}
${description}
🌡  Temperature: ${temp}°C (feels like ${feelsLike}°C)
💨  Wind: ${windKph} km/h
💧  Humidity: ${humidity}%
`;
            addLine([promptEntry, { type: "output", text: output }]);
            scrollToBottom();
          } catch (err) {
            addLine([
              promptEntry,
              {
                type: "output",
                text: `Error: Failed to fetch weather data\n`,
              },
            ]);
            scrollToBottom();
          }
        })();

        setCmdHistory((prev) => [...prev, cmd]);
        setCmdIndex(-1);
        setInput("");
        return;
      }
      if (cmd.startsWith("calc ")) {
        const expr = cmd.slice(5);
        let result;
        try {
          // eslint-disable-next-line no-new-func
          result = Function(`"use strict"; return (${expr})`)();
          result = `${expr} = ${result}`;
        } catch {
          result = `Error: Invalid expression "${expr}"`;
        }
        addLine([promptEntry, { type: "output", text: result + "\n" }]);
        setCmdHistory((prev) => [...prev, cmd]);
        setCmdIndex(-1);
        setInput("");
        scrollToBottom();
        return;
      }

      // Encode
      if (cmd.startsWith("encode ")) {
        const text = cmd.slice(7);
        const encoded = btoa(unescape(encodeURIComponent(text)));
        addLine([
          promptEntry,
          { type: "output", text: `Encoded:\n${encoded}\n` },
        ]);
        setCmdHistory((prev) => [...prev, cmd]);
        setCmdIndex(-1);
        setInput("");
        scrollToBottom();
        return;
      }

      // Decode
      if (cmd.startsWith("decode ")) {
        const b64 = cmd.slice(7);
        let decoded;
        try {
          decoded = decodeURIComponent(escape(atob(b64)));
        } catch {
          decoded = "Error: Invalid base64 string";
        }
        addLine([
          promptEntry,
          { type: "output", text: `Decoded:\n${decoded}\n` },
        ]);
        setCmdHistory((prev) => [...prev, cmd]);
        setCmdIndex(-1);
        setInput("");
        scrollToBottom();
        return;
      }

      // Countdown
      if (cmd.startsWith("countdown ")) {
        const secs = parseInt(cmd.slice(10));
        if (isNaN(secs) || secs <= 0 || secs > 60) {
          addLine([
            promptEntry,
            { type: "output", text: "Usage: countdown <1-60>\n" },
          ]);
        } else {
          addLine([promptEntry, { type: "countdown", seconds: secs }]);
        }
        setCmdHistory((prev) => [...prev, cmd]);
        setCmdIndex(-1);
        setInput("");
        scrollToBottom();
        return;
      }

      const commandFn = COMMANDS[cmd];
      let output;
      if (typeof commandFn === "function") {
        output = commandFn();
      } else if (typeof commandFn === "string") {
        output = commandFn;
      } else {
        output = `Command not found: ${cmd}\nType 'help' for available commands.\n`;
      }

      addLine([promptEntry, { type: "output", text: output }]);
      setCmdHistory((prev) => [...prev, cmd]);
      setCmdIndex(-1);
      setInput("");
      scrollToBottom();
    },
    [input, addLine, scrollToBottom],
  );

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Enter") {
        executeCommand();
        setSuggestionIndex(-1);
        return;
      }

      if (e.key === "Tab") {
        e.preventDefault();
        if (suggestions.length === 0) return;
        const nextIdx = (suggestionIndex + 1) % suggestions.length;
        setSuggestionIndex(nextIdx);
        setInput(suggestions[nextIdx]);
        return;
      }

      if (e.key === "ArrowUp") {
        e.preventDefault();
        if (cmdHistory.length === 0) return;
        const newIndex =
          cmdIndex === -1 ? cmdHistory.length - 1 : Math.max(0, cmdIndex - 1);
        setCmdIndex(newIndex);
        setInput(cmdHistory[newIndex]);
        return;
      }

      if (e.key === "ArrowDown") {
        e.preventDefault();
        if (cmdIndex === -1) return;
        const newIndex = cmdIndex + 1;
        if (newIndex >= cmdHistory.length) {
          setCmdIndex(-1);
          setInput("");
          return;
        }
        setCmdIndex(newIndex);
        setInput(cmdHistory[newIndex]);
        return;
      }
    },
    [executeCommand, suggestions, suggestionIndex, cmdHistory, cmdIndex],
  );

  const closeGame = useCallback(() => {
    setActiveGame(null);
    focusInput();
  }, [focusInput]);

  return {
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
  };
}
