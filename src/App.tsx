import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";
import { lightTheme, darkTheme } from "./styles/theme";

import Header from "./layouts/Header";
import ParentContainer from "./layouts/ParentContainer";
import Sidebar from "./layouts/Sidebar";
import Home from "./pages/Home";
import useTheme from "./hooks/useTheme";

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <ParentContainer>
        <Header toggleTheme={toggleTheme} />
        <Sidebar />
        <Home />
      </ParentContainer>
    </ThemeProvider>
  );
}
