import React from "react";
import "./styles.css";

const Flex = ({ children }) => {
  return <div className="flex">{children}</div>;
};

export const FlexItem = ({ children }) => {
  return <div className="flex-item">{children}</div>;
};

export default Flex;
