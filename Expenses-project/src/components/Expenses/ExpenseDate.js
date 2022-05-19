import './expenseDate.css'
import React from 'react';

const ExpenseDate=(props) =>{
  const month = props.date.toLocaleString("en-Us", { month: "short" });
  const year = props.date.getFullYear();
  const day = props.date.toLocaleString("en-Us", { day: "2-digit" });

  return (
    <div className="expense-date">
      <div className="expense__month">{month}</div>
      <div className="expence__year">{year}</div>
      <div className="expense__day">{day}</div>
    </div>
  );
}
export default ExpenseDate;
