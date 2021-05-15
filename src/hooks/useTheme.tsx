import { useCallback, useEffect, useState } from "react";

export default function useTheme() {
  const [theme, setTheme] = useState("light");

  const setMode = useCallback((mode: string) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  }, []);

  const toggleTheme = useCallback(() => {
    theme === "light" ? setMode("dark") : setMode("light");
  }, [setMode, theme]);

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);

  return {
    theme,
    toggleTheme,
  };
}
