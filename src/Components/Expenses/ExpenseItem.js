import React,{useState} from "react";
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card';
import "./ExpenseItem.css";
//import ExpenseDetails from "./ExpenseDetails";
const ExpenseItem=(props)=> {
  const[amount,newAmount]=useState(props.amount)
  const amtHandler=()=>{
    newAmount('100')
  }
  const[title,setTitle]=useState(props.title)
  const clickHandler=()=>{
    setTitle('updated');
  }
  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        {/* <ExpenseDetails title={props.title} amount={props.amount} location={props.location}></ExpenseDetails> */}
        <h2 className="expense-item h2">{props.title}</h2>
        <div className="expense-item__location">{props.location}</div>
        <div className="expense-item__price">Rs.{props.amount}/-</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
      <button onClick={amtHandler}>Edit Amount</button>
    </Card></li>
  );
}

export default ExpenseItem;
