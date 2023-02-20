import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const saveExpenseDataHandler=(enteredexpenseData)=>{
        const expenseData={
            ...enteredexpenseData,id: Math.random().toLocaleString()
        }
        props.onaddExpense(expenseData)
    }
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;