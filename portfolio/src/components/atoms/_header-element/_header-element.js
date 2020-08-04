import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { myTheme } from "../../../theme";
const useStyles = makeStyles((theme) => ({
  styleHeaderElement: {
    height: "20px",
    width: "70px",
    marginRight: "70px",
    marginTop: "20px",
    "&:hover": {
      color: myTheme.palette.myColor.blackColor,
    },
  },
}));

const HeaderElement = ({ text }) => {
  const classes = useStyles();
  console.log(text);
  return (
    <Typography
      variant="h3"
      className={classes.styleHeaderElement}
      data-testid="headerElement"
    >
      {text}
    </Typography>
  );
};

export default HeaderElement;
