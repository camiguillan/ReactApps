import React from 'react';
import './expenseItem.css';
import Date from '../UI/date';
import Card from '../UI/card';

export default function ExpenseItem(props) {

  return (
    <li>
    <Card className='expense-item'>
        <div>
            <h2> <Date date = {props.date} /> </h2>
        </div>
        <div className='expense-item__description '>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
        </div>    

    </Card>
    </li>
  )
}
