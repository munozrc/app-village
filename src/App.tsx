import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme";

import Header from "./components/Header";

import Home from "./pages/Home";
import SingleProgram from "./pages/SingleProgram";

import "./App.css";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <main className="parent-container">
        <Router>
          <Header />
          <Switch>
            <Route path={"/programs/:id"} component={SingleProgram} />
            <Route path={"/"} component={Home} />
          </Switch>
        </Router>
      </main>
    </ThemeProvider>
  );
}
