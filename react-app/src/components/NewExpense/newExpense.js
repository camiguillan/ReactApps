import React from 'react';
import './newExpense.css'; 
import ExpenseForm from './expenseForm';
import { useState } from 'react';

export default function NewExpense(props) {
  const [showForm, setShowForm] = useState(false);
    
    function handleSaveData(expenseData){
        const data = {
            ...expenseData,
            id: Math.random.toString()
        };
        props.onAddExpense(data);
    }

    function show(){
      setShowForm(true);
    }

    function hide(){
      setShowForm(false)
    }


  return (
    <div className='new-expense'>
      {showForm &&
        <ExpenseForm  onSaveData={handleSaveData} hide = {hide} ></ExpenseForm>
      }
       
       {!showForm &&
        <button onClick={show} > Add New Expense </button>}
    </div>
  )
}
