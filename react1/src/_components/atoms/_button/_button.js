import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  bttn: {
    textTransform: "none",
   
   // marginRight: "2em",
    "&:hover": {
      backgroundColor: "#ffffff",
      color: "#000000",
    },
  },
}));

export default function MyButton(props) {
    const classes = useStyles();
  return (
    <Button color={props.color} variant="contained" onClick={props.onClick} className={classes.bttn}
    >
      {props.value}
    </Button>
  );
}
