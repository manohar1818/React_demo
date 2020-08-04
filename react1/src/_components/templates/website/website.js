import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  template: {
    backgroundColor: "",
  },
}));

export default function Template(props) {
  const classes = useStyles();
  return (
    <div className={classes.template}>      
    {props.header}
    {props.main}
    </div>
  );
}
