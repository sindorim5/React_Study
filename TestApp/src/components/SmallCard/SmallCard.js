import React from "react";
import classes from "./SmallCard.module.css";

const SmallCard = (props) => {
  return <span className={classes.smallcard}>{props.children}</span>;
};

export default SmallCard;
