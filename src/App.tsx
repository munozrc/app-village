import { HashRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";
import { lightTheme, darkTheme } from "./styles/theme";

// Hooks
import useTheme from "./hooks/useTheme";

// Components
import Navigation from "./layouts/Navigation";

// Pages
import HomePage from "./pages/HomePage";
import ProgramPage from "./pages/ProgramPage";

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <Router>
        <GlobalStyles />
        <Navigation toggleTheme={toggleTheme} />
        <Route exact path={"/"} component={HomePage} />
        <Route exact path={"/programa/:path"} component={ProgramPage} />
      </Router>
    </ThemeProvider>
  );
}
