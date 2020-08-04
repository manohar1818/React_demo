import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import NavMenu from "../../molecules/_nav-menu/_nav-menu";
import {myTheme} from "../../../theme";

const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: myTheme.palette.background.paper,
    // position: "fixed",
  },
}));

export default function Header(props) {
  const classes = useStyles();
  return (
    <div className={classes.header}>
     <NavMenu />
    </div>
  );
}
NavMenu.defaultProps = {};
