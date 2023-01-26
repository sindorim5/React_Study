import classes from "./InputOneLine.module.css";

const InputOneLine = (props) => {
  return (
    <label htmlFor="inp" className={classes.inp}>
      <input
        type="text"
        id="inp"
        placeholder="&nbsp;"
        defaultValue={props.defaultValue || ""}
        onChange={props.onChange}
      />
      <span className={classes.label}>{props.label}</span>
      <span className={classes[`focus-bg`]}></span>
    </label>
  );
};

export default InputOneLine;
