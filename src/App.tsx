import { HashRouter as Router, Route, Switch } from "react-router-dom";
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
        <Switch>
          <Route path={"/programs/:path"} component={ProgramPage} />
          <Route path={"/"} component={HomePage} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
