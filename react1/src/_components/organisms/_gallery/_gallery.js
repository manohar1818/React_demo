import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageBox from "../../molecules/_image-box/_image-box";
import {myTheme} from "../../../theme";

const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: myTheme.palette.background.default,
  },
  allImages: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    justifyItems: "center",
    width: "60%",
    gridRowGap: "50px",
    gridColumnGap: "10px",
    margin: "auto",
    padding: "40px 0",
  },
}));

export default function Gallery(props) {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <div className={classes.allImages}>
        {props.allImages.map((img, key) => (
          <ImageBox key={img.id} img={img} />
        ))}
      </div>
    </div>
  );
}
