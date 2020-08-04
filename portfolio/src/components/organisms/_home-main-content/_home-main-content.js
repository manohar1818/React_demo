import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import * as Constants from "../../../constants";
import Image from "../../atoms/_image/_image";
const useStyles = makeStyles((theme) => ({
  styleHeaderElement: {
    minHeight: "92.5vh",
    height: "auto",
    backgroundImage:
      "URL(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSyzZrLkcX3fagdv5Idw9mST_gmQWnNh-GIEA&usqp=CAU)",
    backgroundPosition: "center",
    backgroundRepeat: "noRepeat",
    backgroundSize: "cover",
    textAlign: "center",
  },
  picture: {
    borderRadius: "50%",
  },
  name: {
    paddingTop: "200px",
    paddingBottom: "10px",
  },
}));

const HomeMainContent = () => {
  const classes = useStyles();
  return (
    <div className={classes.styleHeaderElement} data-testid="home">
      <Typography variant="h2" className={classes.name}>
        {Constants.NAME}
      </Typography>

      <Typography variant="h4">{Constants.DESIGNATION}</Typography>

      <div className={classes.picture}>
        <Image
          image=""
          className={classes.picture}
        ></Image>
      </div>
    </div>
  );
};

export default HomeMainContent;
