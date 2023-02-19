import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card';
import "./ExpenseItem.css";
//import ExpenseDetails from "./ExpenseDetails";
const ExpenseItem=(props)=> {
  let title=props.title;
  let amount=props.amount
  const clickHandler=()=>{
    title='updated';
  }
  const deleteEvent=()=>{
    amount='deleted';
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        {/* <ExpenseDetails title={props.title} amount={props.amount} location={props.location}></ExpenseDetails> */}
        <h2 className="expense-item h2">{title}</h2>
        <div className="expense-item__location">{props.location}</div>
        <div className="expense-item__price">Rs.{amount}/-</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={deleteEvent}>Delete</button>
    </Card>
  );
}

export default ExpenseItem;
