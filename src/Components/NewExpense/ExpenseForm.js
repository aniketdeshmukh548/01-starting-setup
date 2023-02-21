import React,{useState} from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const[enteredTitle,setenteredTitle]=useState('')
    const[enteredamt,setenteredamt]=useState('')
    const[enteredloc,setenteredloc]=useState('')
    const[entereddate,setentereddate]=useState('')
    // const [userInput,setUserInput]=useState({
    //     enteredTitle:'',enteredamt:'',enteredloc:'',entereddate:'',
    // })
    const titleChange=(event)=>{
        setenteredTitle(event.target.value)
        // setUserInput({
        //     ...userInput,enteredTitle:event.target.value
        // })
        // setUserInput((prevState=>{
        //     return {
        //         ...prevState,enteredTitle:event.target.value
        //     }
        // }))
    }
    const amtChange=(event)=>{
        setenteredamt(event.target.value)
        // console.log(event.target.value)
        // setUserInput({
        //     ...userInput,enteredamt:event.target.value
        // })
    }
    const locChange=(event)=>{
        setenteredloc(event.target.value)
        // console.log(event.target.value)
        // setUserInput({
        //     ...userInput,enteredloc:event.target.value
        // })
    }
    const dateChange=(event)=>{
        setentereddate(event.target.value)
        // console.log(event.target.value)
        // setUserInput({
        //     ...userInput,entereddate:event.target.value
        // })
    }
    const submitHandler=(event)=>{
        event.preventDefault();
        const expenseData ={
            title:enteredTitle,amount:+enteredamt,location:enteredloc,date:new Date(entereddate),
        }
        console.log(expenseData)
        props.onSaveExpenseData(expenseData);
        setenteredTitle('');setenteredamt('');setenteredloc('');setentereddate('')
    }
  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={enteredTitle} onChange={titleChange}/>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' value={enteredamt} min='0.01' step='0.01' onChange={amtChange}/>
        </div>
        <div className='new-expense__control'>
          <label>Location</label>
          <input type='text' value={enteredloc} onChange={locChange} />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date'value={entereddate} min='2019-01-01' max='2022-12-31'onChange={dateChange} />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='button' onClick={props.onCancel}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;