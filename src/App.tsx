import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./styles/global";
import { lightTheme, darkTheme } from "./styles/theme";

import ParentContainer from "./layouts/ParentContainer";
import useTheme from "./hooks/useTheme";
import Navigation from "./layouts/Navigation";
import LastAdded from "./components/LastAdded";

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <ParentContainer>
        <Navigation toggleTheme={toggleTheme} />
        <LastAdded />
      </ParentContainer>
    </ThemeProvider>
  );
}
