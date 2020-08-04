import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  itemBox: {
    cursor: "pointer",  
    backgroundColor: "white",
    display: "flex",
    width: "260px ",
    height: "60px",
    justifyContent: "center",
    alignItems: "center", 

    color: "#0a638a",
    

    
    '&:hover':{
        backgroundColor: "#829eab",
        color: "#829eab",
    },
text: {
    fontSize: "100px",
    color: "red",
    textDecoration:"none",
    fontWeight: "900"
},
active: {
  backgroundColor: "white",
  color: "#ffffff",
}
    
  },
}));

export default function NavItem(props) {
  const classes = useStyles();
  return (
    <div className={(props.active===true && classes.active) + " " +classes.itemBox}>
      <Typography variant="h5" className={classes.text}>{props.title}</Typography>
    </div>
  );
}
NavItem.defaultProps = {
  title: "Name",
  active: false,
};
