import React from "react";


import { makeStyles } from "@material-ui/core/styles";

import Images from "../../../images.json";
import Image from "../../atoms/_image/_image";
const useStyles = makeStyles((theme) => ({
  styleGalleryMainContent: {
    height: "auto",
    minHeight: "92.5vh",
    backgroundPosition: "center",
    backgroundRepeat: "noRepeat",
    backgroundSize: "cover",
    
  },
  styleGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
  },
}));

const GalleryMainContent = () => {
  const classes = useStyles();
  const images = Images.images.map((img, key) => (
    <Image key={img.id} image={img.url} />
  ));
  return (
    <div className={classes.styleGalleryMainContent} data-testid="galleryMain">
      <div className={classes.styleGrid}>{images}</div>
    </div>
  );
};

export default GalleryMainContent;
