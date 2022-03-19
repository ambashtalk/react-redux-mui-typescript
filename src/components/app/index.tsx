import React from "react";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { useSelector } from "react-redux";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import { getDarkMode } from "../../redux/selectors";
import Header from "../header";
import Counter from "../counter";
import ThunkComponent from "../thunkComponent";
import { RootWrapper } from "./index.styles";
import { CssBaseline } from "@mui/material";

const App: React.FC = () => {
  const darkMode = useSelector(getDarkMode);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <EmotionThemeProvider theme={theme}>
        <CssBaseline />
        <RootWrapper>
          <Header />
          <ThunkComponent />
          <Counter />
        </RootWrapper>
      </EmotionThemeProvider>
    </MuiThemeProvider>
  );
};

export default App;
