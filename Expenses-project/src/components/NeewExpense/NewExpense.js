import React ,{useState}from "react";
import "./Newexpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const [isEditing , setIsEditing]=useState(false);
  const saveExpenseDataHandler = (entredExpenseData) => {
  

    const expenseData = {
      ...entredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler=()=>{
    setIsEditing(true);
  };

  const stopEditinhHandler=()=>{
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing && <ExpenseForm 
      onSaveExpenseData={saveExpenseDataHandler}
      onCancel={stopEditinhHandler}
      />}
    </div>
  );
};
export default NewExpense;
