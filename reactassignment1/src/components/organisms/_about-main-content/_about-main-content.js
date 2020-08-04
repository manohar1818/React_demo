import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider, Typography } from "@material-ui/core";
import * as Constants from "../../../constants";
import { myTheme } from "../../../theme";
import About from "../../molecules/_about-card/_about-card";
const useStyles = makeStyles((theme) => ({
  aboutMainContent: {
    height: "1000PX",
    
    backgroundPosition: "center",
    backgroundRepeat: "noRepeat",
    backgroundSize: "cover",
  },
  about: {
    color: myTheme.palette.myColor.blackColor,

    paddingTop: "40px",

    paddingLeft: "250px",
    paddingRight: "250px",
    fontSize: "25px",
  },
  skills: {
    paddingTop: "0px",
    height: "270px",
    width: "400px",
    border: "1px solid " + myTheme.palette.myColor.blackColor,
    margin: "70px",
    textAlign: "center",
  },
  list: {
    display: "flex",
    justifyContent: "center",
  },
  heading: {
    backgroundColor: myTheme.palette.primary.main,
    color: myTheme.palette.secondary.main,
    marginBottom: "10px",
  },
}));

const AboutMainContent = () => {
  const classes = useStyles();
  const personal = [
    Constants.MYNAME,
    Constants.CONTACTNO,
    Constants.EMAIL,
    Constants.DOB,
    Constants.LANGUAGES,
    Constants.HOBBIES,
  ];
  const technicalSkills = [
    Constants.NETWORKING,
    Constants.LINUX,
    Constants.HTML_CSS,
    Constants.REACT,
    Constants.DBMS,
    Constants.JAVA,
    Constants.SPRING,
    Constants.SPRING_BOOT,
    Constants.REST,
    
  ];
  const projects = [
    Constants.a,
    Constants.b,
    Constants.c,
    Constants.d,
  ];
  return (
    <div className={classes.aboutMainContent} data-testid="aboutMainContent">
      <div className={classes.list}>
        <About array={personal} heading={Constants.PERSONAL} />
        <About array={technicalSkills} heading={Constants.TECHNICAL_SKILLS} />
        <About array={projects} heading={Constants.PROJECTS} />
      </div>
    </div>
  );
};

export default AboutMainContent;
