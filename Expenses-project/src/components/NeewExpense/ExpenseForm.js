import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDATE] = useState("");
  //   const [userInput, setUserInput] = useState({
  //     entredTitle: "",
  //     entredAmount: "",
  //     enteredDate: "",
  //   });

  //   const titleChangeHandler = (event) => {
  //     setUserInput((prevState) => {
  //       return {
  //         ...prevState,
  //         entredTitle: event.target.value,
  //       };
  //     });
  //   };
  //   const amountChangeHandler = (event) => {
  //     setUserInput((prevState) => {
  //       return {
  //         ...prevState,
  //         entredAmount: event.target.value,
  //       };
  //     });
  //   };
  //   const dateChangeHandler = (event) => {
  //     setUserInput((prevState) => {
  //       return {
  //         ...prevState,
  //         enteredDate: event.target.value,
  //       };
  //     });
  //   };
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDATE(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredAmount('');
    setEnteredDATE('');
    setEnteredTitle('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expence__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
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
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
