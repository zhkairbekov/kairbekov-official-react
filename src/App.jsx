import React, { useState, useEffect } from "react";
import { ThemeProvider } from "./lib/theme-provider";
import "./lib/i18n";
import Preloader from "./components/Preloader";
import Cursor from "./components/Cursor";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Process from "./components/Process";
import Journey from "./components/Journey";
import Certificates from "./components/Certificates";
import Portfolio from "./components/Portfolio";
import Contacts from "./components/Contacts";

function AppContent() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const initLenis = async () => {
      try {
        const { default: Lenis } = await import("lenis");
        const lenis = new Lenis({
          duration: 1.35,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
        });
        window.lenis = lenis;

        let rafId;
        function raf(time) {
          lenis.raf(time);
          rafId = requestAnimationFrame(raf);
        }
        rafId = requestAnimationFrame(raf);

        return () => {
          cancelAnimationFrame(rafId);
          lenis.destroy();
        };
      } catch (err) {
        console.warn("Lenis initialization failed:", err);
      }
    };

    // Load Lenis after content is ready for better performance
    const timer = setTimeout(() => {
      initLenis();
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="relative w-full bg-background text-foreground min-h-screen">
      <Preloader onComplete={() => {
        console.log("[App] Preloader complete, setting ready=true");
        setReady(true);
      }} />
      <Cursor />

      <div
        style={{
          opacity: ready ? 1 : 0,
          transition: "opacity 0.6s ease 0.1s",
          pointerEvents: ready ? "auto" : "none",
        }}
      >
        <Navigation />
        <main className="relative z-10 w-full overflow-x-hidden">
          <Hero />
          <About />
          <Services />
          <Process />
          <Portfolio />
          <Journey />
          <Certificates />
          <Contacts />
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="theme">
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
