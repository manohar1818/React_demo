import React from "react";
import { Typography } from "@material-ui/core";

export default function Label(props) {
  return (
    <div>
      <Typography variant="body2">{props.text}</Typography>
    </div>
  );
}
