import { useCallback, useState } from "react";

export default function useTheme() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = useCallback(() => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }, [theme]);

  return {
    theme,
    toggleTheme,
  };
}
