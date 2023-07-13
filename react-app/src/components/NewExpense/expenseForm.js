import React from 'react';
import './expenseForm.css';
import { useState } from 'react';

export default function ExpenseForm(props) {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState('');

    function handleTitleChange(event){
        setTitle(event.target.value);
    }

    function handleAmountChange(event){
        setAmount(event.target.value);
    }

    function handleDateChange(event){
        setDate(event.target.value);
    }

    function submitHandler(event){
        event.preventDefault(); // prevent de disrequesting 
        const expenseData = {
            title: title,
            amount: amount,
            date: new Date(date)
        };

        props.onSaveData(expenseData);
        setTitle('');
        setAmount('');
        setDate('');
    }

    function handleHide(){
        props.hide();
    }


  return (
    <form onSubmit={submitHandler} >
        <div className='new-expense__controls'>
            <div className='new-expense__control' >
                <label>Title</label>
                <input type='text' value={title} onChange={handleTitleChange} ></input>
            </div>
            <div className='new-expense__control' >
                <label>Amount</label>
                <input type='number' value={amount} onChange={handleAmountChange} min={0.01} step={0.01}></input>
            </div>
            <div className='new-expense__control' >
                <label>Date</label>
                <input type='date' value={date} min='2019-01-01' max='2022-12-31'
                onChange={handleDateChange} ></input>
            </div>
        </div>
        <div className='new-expense__actions '>
            <button onClick={handleHide}> Cancel </button>
            <button onClick={handleHide} type='submit'  onChange={handleDateChange}> Add Expense</button>
           
        </div>
    </form>
  )
}
