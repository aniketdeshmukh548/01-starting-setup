import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
const ExpensesList = (props) => {
  if(props.items.length===0){
    return <h2 className="expenses-list__fallback">Found No Expenses</h2>
  }
  if(props.items.length===1){
    return <h2 className="expenses-list__fallback">Only Single Expense Here. Please add more!!</h2>
  }
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        location={expense.location}
        date={expense.date}
      />
      ))}
    </ul>
  );
};
export default ExpensesList;
