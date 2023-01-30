import React from "react";
import classes from "./LongCardContainer.module.css";

const LongCardContainer = (props) => {
  return <div className={classes.longcard}>{props.children}</div>;
};

export default LongCardContainer;
