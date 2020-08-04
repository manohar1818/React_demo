import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputBox from "../../atoms/_input/_input";
import MyButton from "../../atoms/_button/_button";
import { Typography } from "@material-ui/core";
import {myTheme} from "../../../theme";

const useStyles = makeStyles((theme) => ({
  addImageBox: {
    backgroundColor: myTheme.palette.background.paper,
    padding: "20px 15px 15px 20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "auto",
    width: "300px",
    margin: "15px auto 0 auto",
  },
  bttn: {
    margin: "auto",
  },
  flexItem: {
    width: "inherit",
    margin: "0 0 10px 0",
  },
  error: {
    color: "red",
    textAlign: "initial",
  },
}));
 
export default function AddImageBox(props) {
  const classes = useStyles();

  return (
    <div className={classes.addImageBox}>
      <div className={classes.flexItem}>
        <Typography variant="h3">Enter image details</Typography>
      </div>
      <div className={classes.flexItem}>
        <InputBox
          type={"text"}
          placeholder={"Enter URL"}
          required={true}
          onChange={(e) => {
            props.setimageUrl(e.target.value);
          }}
        />
         <Typography className={classes.error}>
            {props.imageUrlError !== "" && props.imageUrlError}
          </Typography>
      </div>
      <div className={classes.flexItem}>
        <InputBox
          type={"text"}
          placeholder={"Enter title"}
          required={true}
          onChange={(e) => {
            props.setimageTitle(e.target.value);
          }}
        />
        <Typography className={classes.error}>
            {props.imageTitleError !== "" && props.imageTitleError}
          </Typography>
      </div>
      <MyButton
        className={classes.bttn}
        value={"Add"}
        color="primary"
        onClick={props.handleImageAdd}
      />
    </div>
  );
}
