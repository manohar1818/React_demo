import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";
import red from "@material-ui/core/colors/red";

export const myTheme = createMuiTheme({
  palette: {
    primary: {
      //   main: purple[500],   Colors need to be imported
      main: green[500], // We can directly give colors in # without importing.
    },
    secondary: {
      main: red[500],
    },
    myColor: {
      redColor: "#f10e41",
      blackColor: "#000",
      greenColor: "#3bb7ab",
    },

    status: {
      danger: purple[500],
    },
    error: {
      main: "#000",
      light: "#000",
      dark: "#000",
      contrastText: "#000",
    },
    divider: "#000",
    action: {
      active: "#000",
      hover: "#000",
      selected: "#000",
      disabled: "#000",
      disabledBackground: "#000",
    },
    text: {
      primary: "#ffffff",
      secondary: "#ff9800",
      disabled: "#000",
      hint: "#000",
      icon: "#000",
    },
    common: {
      black: "#000000",
      white: "#ffffff",
    },
    background: {
      default: "rgb(240, 243, 243)",
      paper: "darkslategrey",
    },
  },
  typography: {
    h3: {
      fontSize: "20px",
      textAlign: "center",
      color: "#ffffff",
      fontStyle: "bold",
      fontFamily: "poppins",
      fontWeight: "10px",
    },
    h5: {
      fontSize: "22px",
      textAlign: "center",
      color: "#000000",
      fontStyle: "bold",
      fontFamily: "poppins",
      fontWeight: "10px",
    },
    body1: {
      fontSize: "17px",
      textAlign: "center",
      color: "#000000",
      fontStyle: "bold",
      fontFamily: "poppins",
    },
    body2: {
        fontSize: "17px",
        color: "#ffffff",
        lineHeight: "2",
        fontWeight: "600",
        fontFamily: "poppins",
      },
      subtitle1: {
        fontSize: "17px",
        color: "#ffffff",
        lineHeight: "1",
        fontWeight: "600",
        fontFamily: "poppins",
      },

    h2: {
      fontSize: "35px",
      textAlign: "center",
      color: "#00000",
      fontStyle: "bold",
      fontFamily: "poppins",
      fontWeight: "30px",
    },
    h4: {
        fontSize: "17px",
        textDecoration: "none",
        color: "#00000",
         fontFamily: "poppins",
      },
  },
});
