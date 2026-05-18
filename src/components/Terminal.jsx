import React, { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Terminal, X } from "lucide-react";

const COMMANDS = {
  help: `Available commands:

help        show all commands
about       information about me
skills      my stack
projects    featured projects
journey     career timeline
contacts    social links
status      current availability
stack       tech stack
clear       clear terminal
whoami      short bio
`,

  about: `Zhanat Kairbekov
Frontend Developer & Graphic Designer
Astana, Kazakhstan

Student at Alem School (Astana Hub)
Graduate of OmAEiP — Information Systems & Programming

Building modern interfaces with React, Laravel and motion-driven UX.
`,

  whoami: `Frontend developer focused on performant UI,
animations and scalable frontend architecture.
`,

  skills: `HTML
CSS / SCSS
JavaScript
React
Tailwind
Framer Motion
PHP
Laravel
MySQL
REST API
Three.js
Canvas API
Go
Docker
Git
`,

  stack: `Frontend:
React, Vite, Tailwind, Framer Motion

Backend:
PHP, Laravel, MySQL, Go

Tools:
Git, Figma, Docker
`,

  projects: `1. Portfolio Website
2. Downtown Astana
3. Saukele Online Shop
4. Velobike Clone
5. Maze Escape BFS Visualizer
6. Product Catalog App
`,

  journey: `2020 → started web & design
2023 → first Laravel projects
2025 → Alem School
2025 → commercial development
2026 → open for opportunities
`,

  contacts: `Telegram:
t.me/kairbekoff

GitHub:
github.com/zhkairbekov

Portfolio:
kairbekov-official.netlify.app
`,

  status: `🟢 AVAILABLE FOR FREELANCE
🟢 OPEN TO REMOTE WORK
🟢 OPEN TO COLLABORATION
`,

  "sudo hire-me": `ACCESS GRANTED 🚀
Welcome aboard.
`,

  "rm -rf bugs": `Permission denied.
Bugs are protected species.
`,

  "go run main.go": `Compiling portfolio...

✔ React initialized
✔ Tailwind loaded
✔ Framer Motion enabled
✔ Deploying to Netlify...
`,

  "php artisan inspire": `"Code is poetry."
— Laravel Terminal
`,

  coffee: `Brewing coffee...
██████████ 100%
☕ ready
`,

  matrix: `Wake up, Neo...
The Matrix has you.
`,

  42: `The answer to life, the universe and everything.
`,
};

export default function MiniTerminal() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");

  const [history, setHistory] = useState([
    "ZhanatOS v2.6.0",
    "Type 'help' to get started.",
  ]);

  const [cmdHistory, setCmdHistory] = useState([]);
  const [cmdIndex, setCmdIndex] = useState(-1);

  const inputRef = useRef(null);
  const terminalBodyRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    const check = () => setIsDesktop(window.innerWidth >= 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((p) => !p);
      }

      if (e.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isDesktop]);

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    terminalBodyRef.current?.scrollTo({
      top: terminalBodyRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [history]);

  const suggestions = useMemo(() => {
    if (!input) return [];
    return Object.keys(COMMANDS).filter((cmd) =>
      cmd.toLowerCase().startsWith(input.toLowerCase()),
    );
  }, [input]);

  const executeCommand = () => {
    const cmd = input.trim();
    if (!cmd) return;

    if (cmd === "clear") {
      setHistory(["ZhanatOS v2.6.0", "Terminal cleared."]);
      setInput("");
      return;
    }

    if (cmd === "projects") {
      document.querySelector("#sites")?.scrollIntoView({
        behavior: "smooth",
      });
    }

    if (cmd === "about") {
      document.querySelector("#about")?.scrollIntoView({
        behavior: "smooth",
      });
    }

    const output = COMMANDS[cmd] || `Command not found: ${cmd}`;

    setHistory((prev) => [...prev, `visitor@zhanat:~$ ${cmd}`, output]);

    setCmdHistory((prev) => [...prev, cmd]);
    setCmdIndex(-1);

    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      executeCommand();
      return;
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (cmdHistory.length === 0) return;

      const newIndex =
        cmdIndex === -1 ? cmdHistory.length - 1 : Math.max(0, cmdIndex - 1);

      setCmdIndex(newIndex);
      setInput(cmdHistory[newIndex]);
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (cmdHistory.length === 0) return;

      if (cmdIndex === -1) return;

      const newIndex = cmdIndex + 1;

      if (newIndex >= cmdHistory.length) {
        setCmdIndex(-1);
        setInput("");
        return;
      }

      setCmdIndex(newIndex);
      setInput(cmdHistory[newIndex]);
    }
  };

  if (!isDesktop) return null;

  return (
    <>
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        onClick={() => setOpen(true)}
        className="
          fixed right-6 bottom-6 z-[999]
          hidden xl:flex
          items-center justify-center
          w-14 h-14
          rounded-2xl
          border border-primary/20
          bg-black/70 backdrop-blur-xl
          text-primary
          hover:scale-105
          hover:border-primary/40
          transition-all duration-300
          shadow-[0_0_30px_rgba(255,180,0,0.15)]
        "
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
            <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />

            <motion.div
              ref={panelRef}
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              onMouseDown={(e) => e.stopPropagation()}
              className="
                fixed right-6 bottom-24 z-[999]
                flex flex-col
                w-[720px] h-[520px]
                overflow-hidden
                rounded-3xl
                border border-primary/20
                bg-black/90 backdrop-blur-2xl
                shadow-[0_0_50px_rgba(255,180,0,0.12)]
              "
            >
              <div className="flex items-center justify-between px-5 py-4 border-b border-primary/10 bg-white/[0.02]">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500" />
                    <span className="w-3 h-3 rounded-full bg-green-500" />
                  </div>

                  <span className="text-xs uppercase tracking-[0.25em] text-primary/70 font-mono">
                    zhanat-terminal
                  </span>
                </div>

                <button
                  onClick={() => setOpen(false)}
                  className="text-primary/60 hover:text-primary transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              <div
                ref={terminalBodyRef}
                onWheel={(e) => e.stopPropagation()}
                className="
                  flex-1 overflow-y-auto overscroll-contain
                  px-5 py-5 font-mono text-[14px]
                  leading-7 text-primary
                "
              >
                {history.map((line, i) => (
                  <motion.pre
                    key={i}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="whitespace-pre-wrap"
                  >
                    {line}
                  </motion.pre>
                ))}
              </div>

              {suggestions.length > 0 && input && (
                <div className="px-5 py-2 border-t border-primary/10 flex gap-2 flex-wrap">
                  {suggestions.map((item) => (
                    <button
                      key={item}
                      onClick={() => setInput(item)}
                      className="px-2 py-1 text-xs rounded-md border border-primary/20 text-primary/70 hover:text-primary hover:border-primary/40 transition-all"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}

              <div className="flex items-center gap-3 px-5 py-4 border-t border-primary/10 bg-white/[0.02]">
                <span className="font-mono text-sm text-primary/70 whitespace-nowrap">
                  visitor@zhanat:~$
                </span>

                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  autoComplete="off"
                  spellCheck={false}
                  placeholder="type command..."
                  className="flex-1 bg-transparent outline-none text-primary placeholder:text-primary/30 font-mono"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
