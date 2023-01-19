import React, { Fragment } from "react";
import classes from "./TodoCard.module.css";

const TodoCard = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.children}
    </div>
  );
};

export default TodoCard;
