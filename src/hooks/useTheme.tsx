import { useCallback, useState } from "react";

export default function useTheme() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = useCallback(() => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }, [theme]);

  return {
    theme,
    toggleTheme,
  };
}
