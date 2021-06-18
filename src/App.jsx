import React from "react";
import Navigation from "./components/navbar/Navigation";
import Animation from "./components/Animation/Animation"

import { ThemeProvider } from "@material-ui/core/styles";
import theme from './config/themeConfig';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navigation/>
      <Animation/>
    </ThemeProvider>
  );
}

export default App;
