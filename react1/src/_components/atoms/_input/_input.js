import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Input} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
    input: {
        backgroundColor: "#ffffff",
        color: "#000000",
        padding: "5px",
        marginTop: "5px",
        borderRadius: "4px",
      },
}));

export default function InputBox(props) {
  const classes = useStyles();
  return (
    <div className={classes.form}>
     
      <Input
        required={props.required}
        className={classes.input}
        type={props.type}
        fullWidth
        placeholder={props.placeholder}
        onChange={props.onChange}
        defaultValue={props.defaultValue}
      />
    </div>
  );
}
