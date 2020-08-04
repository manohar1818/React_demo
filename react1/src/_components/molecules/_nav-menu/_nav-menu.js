import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import NavItem from "../../atoms/_nav-option/_nav-option";
import { Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  menuBox: {
    width: "fit-content",
    display: "flex",
    justifyContent: "start",
    //backgroundColor:"#829eab"
    bgcolor:"info-main"
   
  },
  link :{
    textDecoration: "none",
  },
}));

export default function NavMenu(props) {
  const classes = useStyles();
  return (
    <div className={classes.menuBox}>
      <Link className={classes.link}  to="/">
        <NavItem title={"Home"} active={true} />
      </Link>

      <Link className={classes.link} to="/gallery" >
        <NavItem title={"Gallery"} active={props.active} />
      </Link>
      <Link className={classes.link} to="/gallery-admin" >
        <NavItem title={"Admin"} active={props.active} />
      </Link>
      <Link className={classes.link} to="/contact">
        <NavItem title={"Contact"} active={props.active} />
      </Link>
      <Link className={classes.link} to="/about">
        <NavItem title={"About"} active={props.active} />
      </Link>

    </div>
  );
}
NavMenu.defaultProps = {};
