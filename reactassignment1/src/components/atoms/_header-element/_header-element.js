import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { myTheme } from "../../../theme";
const useStyles = makeStyles((theme) => ({
  eachHeaderElement: {
    width: "70px",
    marginRight: "40px",
    marginLeft: "40px",
    marginTop: "20px",
    "&:hover": {
      color: "#151717",
    },
  },
}));

const HeaderElement = ({ text }) => {
  const classes = useStyles();
  return (
    <Typography variant="h4" className={classes.eachHeaderElement} >
      {text}
    </Typography>
  );
};

export default HeaderElement;
