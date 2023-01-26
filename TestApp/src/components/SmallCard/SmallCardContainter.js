import React from "react";
import classes from "./SmallCardContainter.module.css";

const SmallCardContainer = (props) => {
  return <div className={classes.smallcard}>{props.children}</div>;
};

export default SmallCardContainer;
