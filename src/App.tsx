import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";
import { lightTheme, darkTheme } from "./styles/theme";

import ParentContainer from "./layouts/ParentContainer";
import useTheme from "./hooks/useTheme";
import Header from "./layouts/Header";
import Home from "./pages/Home";
import Menu from "./layouts/Menu";
import ChildContainer from "./layouts/ChildContainer";

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <ParentContainer>
        <Header toggleTheme={toggleTheme} />
        <ChildContainer>
          <Menu />
          <Home />
        </ChildContainer>
      </ParentContainer>
    </ThemeProvider>
  );
}
