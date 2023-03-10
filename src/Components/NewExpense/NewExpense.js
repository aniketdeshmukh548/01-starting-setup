import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const[isEditing,setEditing]=useState(false);
    const saveExpenseDataHandler=(enteredexpenseData)=>{
        const expenseData={
          id: Math.random().toLocaleString(),...enteredexpenseData
        }
        props.onaddExpense(expenseData)
        setEditing(false)
    };
    const startEditingHandler=()=>{
      setEditing(true)
    }
    const stopEditingHandler=()=>{
      setEditing(false)
    }
  return (
    <div className='new-expense'>
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing &&<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler}/>}
    </div>
  );
};

export default NewExpense;