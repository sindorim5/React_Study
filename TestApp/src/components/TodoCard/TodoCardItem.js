import React, { useState } from "react";
import classes from "./TodoCardItem.module.css";

const TodoCardItem = (props) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isDone, setIsDone] = useState(props.isDone);

  const onClickHandler = () => {
    setIsClicked((prevState) => !prevState);
  };

  const checkboxChangeHandler = () => {
    setIsDone((prevState) => !prevState);
  };

  return (
    <li>
      <div>
        <span>
          <button onClick={onClickHandler}>{!isClicked ? ">" : "V"}</button>
          {props.title}
          <input type="checkbox" defaultChecked={isDone} onChange={checkboxChangeHandler} />
        </span>
        {isClicked && (
          <div>
            {props.description} {props.dueDate}
          </div>
        )}
      </div>
    </li>
  );
};

export default TodoCardItem;
