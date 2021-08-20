import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/theme";

// Components
import Navigation from "./layouts/Navigation";

// Pages
import ProgramPage from "./pages/ProgramPage";
import Home from "./pages/Home";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Router>
        <GlobalStyles />
        <Navigation />
        <Switch>
          <Route path={"/programs/:id"} component={ProgramPage} />
          <Route path={"/"} component={Home} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
