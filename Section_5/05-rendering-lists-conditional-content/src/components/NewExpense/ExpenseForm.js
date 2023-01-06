import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // useState를 각각 만들어서 관리하기
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // useState를 객체로 만들어서 관리하기
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   // userInput을 복사하고 enteredTitle을 대체, 객체로 움직이기 때문에
    //   // enteredTitle만 수정하면 enteredAmount와 enteredDate가 없어짐
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    // 하지만 위와 같은 방법이 안 먹힐 때가 있다.
    // 리액트는 내부에 업데이트 스케쥴이 있기 때문에 이미 지나간 state를 복사해올 수 있다.
    // 아래와 같은 방법은 최신 스냅삿임을 보장한다. 좀 더 안전한 방법.
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   // userInput을 복사하고 enteredTitle을 대체
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   // userInput을 복사하고 enteredTitle을 대체
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    // 이벤트가 명시적으로 처리되지 않은 경우,
    // 해당 이벤트에 대한 동작을 수행하지 않음
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    // 제출 시 초기화
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
