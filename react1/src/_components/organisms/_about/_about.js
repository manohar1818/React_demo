import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { myTheme } from "../../../theme";

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: "#1d4380",
    minHeight: "86.5vh",
  },
  personal: {
    backgroundColor: myTheme.palette.background.default,
    paddingBottom: "5px",
  },
  tech: {
    backgroundColor: "#e6e6e6",
    paddingBottom: "5px",
  },
  head: {
    //fontStyle: "bold",
    fontSize: "x-large",
    fontWeight: "bold",
    paddingTop: "15px",
  },
}));

export default function About(props) {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      {/* <Typography>{props.content || "About"}</Typography> */}

      <div className={classes.personal}>
        <Typography>
          <div className={classes.head}>About me</div>
          <br></br>
          Name :- Gangidi Manohar Reddy
          <br></br>
          Contact no : 7995520569
          <br></br>
          Email :-{" "}
          <Link href="manoharreddy1818@gmail.com">manoharreddy1818@gmail.com</Link>
          <br></br>
          Linkedin :-{" "}
          <Link href="https://github.com/manohar1818/"> manohar1818.</Link>
        </Typography>
      </div>
      <div className={classes.personal}>
        <Typography>
          <div className={classes.head}>Technical skills</div>
          <br></br>
          Programming languages : C, C++, Java,Python
          <br></br>
          Database : MySQL, MongoDb,Firebase
          <br></br>
          Front-end : HTML, CSS, bootstrap, javaScript, thymeleaf, react
        </Typography>
      </div>
   
      <div className={classes.personal}>
        <Typography>
          <div className={classes.head}>Personal details</div>
          <br></br>
          Date of Birth : 18 th June 1998.
          <br></br>
          Languages known : Telugu ,English, Hindi.
          <br></br>
          Hobbies and Interests : Badminton
          <br></br>
          Travelling and Exploring new places,
          <br></br>
          Cooking, Real Estate, Watching Web series.
          <br></br>
        </Typography>
      </div>
    </div>
  );
}
