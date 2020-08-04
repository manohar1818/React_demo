import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Route, withRouter } from "react-router-dom";
import Contact from "../_contact/_contact";
import GalleryAdmin from "../_gallery-admin/_gallery-admin";
import Gallery from "../_gallery/_gallery";
import About from "../_about/_about";
import Home from "../_home/_home";
import ImagesJSON from "../../../images.json";
import {myTheme} from "../../../theme";
 
const useStyles = makeStyles((theme) => ({
  main: {
    backgroundColor: myTheme.palette.background.default,
    minHeight: "86.5vh",
  },
}));

export default function Main(props) {
  const [allImages, setAllImages] = useState([...ImagesJSON.images]);
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Route exact path="/" component={withRouter(Home)} />

      {/* <Route path="/gallery-admin" component={GalleryAdmin} /> */}

      {/* <Route path="/gallery" component={Gallery} /> */}
      <Route
        path="/home"
        render={(props) => <Gallery allImages={allImages} />}
      />

      <Route
        path="/home"
        render={(props) => (
          <GalleryAdmin allImages={allImages} setAllImages={setAllImages} />
        )}
      />
      <Route path="/Contact" component={withRouter(Contact)} />

      <Route path="/about" component={withRouter(About)} />

      <Route path="/gallery" component={withRouter(Gallery)} />

      <Route path="/gallery-admin" component={withRouter(GalleryAdmin)} />
    </div>
  );
}
