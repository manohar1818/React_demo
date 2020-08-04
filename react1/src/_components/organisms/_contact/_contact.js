import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Title from "../../atoms/_title/_title";
import ContactForm from "../_contact-form/_contact-form";
import {myTheme} from "../../../theme";

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: myTheme.palette.background.default,
    minHeight: "86.5vh",
  },
  form: {
    backgroundColor: myTheme.palette.background.paper,
       width: '40%',
      margin: "auto",
      //paddingBottom: "20px",
  }
}));

export default function Contact(props) {
  const classes = useStyles();
  return (
    <div className={classes.main}>
        
        <div className={classes.form}>
            <ContactForm />
        </div>
    </div>
  );
}
