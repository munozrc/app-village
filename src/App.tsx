import { HashRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/theme";

// Components
import Navigation from "./layouts/Navigation";

// Pages
import HomePage from "./pages/HomePage";
import ProgramPage from "./pages/ProgramPage";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Router>
        <GlobalStyles />
        <Navigation />
        <Route exact path={"/"} component={HomePage} />
        <Route exact path={"/programa/:path"} component={ProgramPage} />
      </Router>
    </ThemeProvider>
  );
}
