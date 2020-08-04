import React,{useContext} from "react";
import "./App.css";
import HomePage from "../src/pages/home-page/home-page";
import { myTheme } from "../src/theme";
import { ThemeProvider } from "@material-ui/core";
import { BrowserRouter } from "react-router-dom";




const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={myTheme}>
         <HomePage></HomePage> 
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
