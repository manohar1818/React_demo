import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FooterContent from "../../molecules/_footer-content/_footer-content";
import {myTheme} from "../../../theme";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: myTheme.palette.background.paper,
    width:"100%",
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <FooterContent />
    </div>
  );
}
