import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      {/* 괄호가 있으면 실행이 되어버림 */}
      {/* <button onClick={clickHandler()}>Change Title</button> */}
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  );
}

export default ExpenseItem;
