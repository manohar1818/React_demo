import React from "react";
import { ThemeProvider } from "@material-ui/core";

import { action } from "@storybook/addon-actions";
import Image from "./_image";
import { myTheme } from "../../../theme";
import { withKnobs, boolean, text } from "@storybook/addon-knobs/react";
export default {
  component: Image,
  title: "Image",
  decorators: [withKnobs],
};

export const image = () => {
  const url = text(
    "image",
    "https://miro.medium.com/max/2628/1*8wU0hfUY3UK_D8Y7tbIyFQ.png"
  );
  return (
    <ThemeProvider theme={myTheme}>
      <Image image={url} />
    </ThemeProvider>
  );
};
