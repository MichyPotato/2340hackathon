import { useState, useEffect } from "react";

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button type="button" className="dark-toggle" onClick={() => setIsDark(!isDark)} aria-label="Toggle dark mode">
  {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}