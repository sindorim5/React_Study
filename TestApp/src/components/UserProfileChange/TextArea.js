import { Fragment, useState } from "react";
import classes from "./TextArea.module.css";

const TextArea = (props) => {
  const [count, setCount] = useState(props.description.length);

  const onChangeHandler = (text) => {
    console.log(text);
    setCount(text.target.value.length);
  };

  return (
    <Fragment>
      <label htmlFor="textArea" className={classes.textarea}>
        <textarea
          type="text"
          rows={5}
          maxLength={150}
          onChange={onChangeHandler}
          defaultValue={props.description}
        />
        <span className={classes.label}>{props.label}</span>
        <span className={classes[`focus-bg`]}></span>
      </label>
      <p>{count}/150</p>
    </Fragment>
  );
};

export default TextArea;
