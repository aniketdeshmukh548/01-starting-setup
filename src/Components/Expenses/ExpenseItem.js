import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card';
import "./ExpenseItem.css";
//import ExpenseDetails from "./ExpenseDetails";
const ExpenseItem=(props)=> {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        {/* <ExpenseDetails title={props.title} amount={props.amount} location={props.location}></ExpenseDetails> */}
        <h2 className="expense-item h2">{props.title}</h2>
        <div className="expense-item__location">{props.location}</div>
        <div className="expense-item__price">Rs.{props.amount}/-</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
