import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import * as Constants from "../../../constants";
import Image from "../../atoms/_image/_image";
const useStyles = makeStyles((theme) => ({
  maincomponent: {
    minHeight: "79.5vh",
    height: "auto",
    backgroundPosition: "center",
    backgroundRepeat: "noRepeat",
    backgroundSize: "cover",
    textAlign: "center",
  },
  picture: {
    //borderRadius: "50%",
  },
  name: {
    paddingTop: "20px",
    color:"#2d3233"
    
  },
  designation: {
    paddingTop: "20px",
    color:"#2d3233"
    
  },
}));

const HomeMainContent = () => {
  const classes = useStyles();
  return (
    <div className={classes.maincomponent} data-testid="home">

<div className={classes.picture}>
        <Image
          image="https://i.ya-webdesign.com/images/man-png-icon-8.png"
          className={classes.picture}
        ></Image>
      </div>

      <Typography variant="h4" className={classes.name}>
        {Constants.NAME}
      </Typography>

      <Typography variant="h4" className={classes.designation}>{Constants.DESIGNATION}</Typography>

      
    </div>
  );
};

export default HomeMainContent;
