import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import HeaderElement from "../../atoms/_header-element/_header-element";
import * as Constants from "../../../constants";
import { Link } from "react-router-dom";
import { myTheme } from "../../../theme";


const useStyles = makeStyles((theme) => ({
  completeHeader: {
    outline: "none",
    display: "flex",
    justifyContent: "center",
    height: "80px",
    backgroundColor: myTheme.palette.primary.main,

  },
  link: {
    textDecoration: "none",
  },

}));

const Header = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.completeHeader} data-testid="header">
        <Link to="/home" className={classes.link}>
          <HeaderElement text={Constants.HOME}></HeaderElement>
        </Link>

      
        <Link to="/contact" className={classes.link}>
          <HeaderElement text={Constants.CONTACT}></HeaderElement>
        </Link>
        <Link to="/about" className={classes.link}>
          <HeaderElement text={Constants.ABOUT}></HeaderElement>
        </Link>

        <Link to="/gallery" className={classes.link}>
          <HeaderElement text={Constants.GALLERY}></HeaderElement>
        </Link>


        <Link to="/gallery-admin" className={classes.link}>
          <HeaderElement text={Constants.GALLERY_ADMIN}></HeaderElement>
        </Link>
      </div>
    </>
  );
};

export default Header;
