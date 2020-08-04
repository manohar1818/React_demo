import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height:"50px",
    
  },
  text: {
    color: "#ffffff",
    
  },
  link: {
    color: "aqua",
  },
}));

export default function FooterContent(props) {
  const classes = useStyles();
  return (
    <div className={classes.content}>
      <div className={classes.text}>
        <Typography>
          2020 Copyright {"  :  "}
          <Link className={classes.link} href="https://github.com/manohar1818/">
            git-manohar
          </Link>
        </Typography>
      </div>
    </div>
  );
}
