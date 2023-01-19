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
          <input type="checkbox" defaultChecked={props.isDone} onChange={checkboxChangeHandler} />
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

// {
//   todoId: "t2",
//   title: "모달폼 구성",
//   description: "모달폼을 구성해보자",
//   isDone: false,
//   dueDate: "2023-01-12",
// },
