import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

const ExpensesList = (props) =>{
    let ExpensesContent = <p>No expenses found.</p>;
    if (props.items.length === 0){
      return <h2 className='expenses-list__fallback'>{ExpensesContent}</h2>       
    }
      return <ul className="expeses-list">
        {props.items.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
      ))}

      </ul>
  
}
export default ExpensesList;