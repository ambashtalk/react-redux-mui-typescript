import React from "react";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";
import { useSelector } from "react-redux";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import { getDarkMode } from "../../redux/selectors";
import { RootWrapper } from "./index.styles";
import { CssBaseline } from "@mui/material";
import { AppRouter } from "src/routes/router";

const App: React.FC = () => {
  const darkMode = useSelector(getDarkMode);

  const theme = createTheme({
    breakpoints: {
      values: {
        mobile: 425,
        tablet: 768,
        laptop: 1024,
        desktop: 1200,
        xlarge: 1440,
      },
    },
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <EmotionThemeProvider theme={theme}>
        <CssBaseline />
        <RootWrapper>
          <AppRouter />
        </RootWrapper>
      </EmotionThemeProvider>
    </MuiThemeProvider>
  );
};

export default App;
