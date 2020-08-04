import React from "react";
import "./App.css";
import Homepage from "./pages/home/home";
import { myTheme } from "./theme";

import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";

function App() {
  return (
    <div>
      {/* <NavItem /> */}
      {/* <NavMenu /> */}
      {/* <Header /> */}
      {/* <Footer /> */}
      {/* <Main /> */}
      {/* <Template /> */}
      <BrowserRouter>
        <ThemeProvider theme={myTheme}>
          <Homepage />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
