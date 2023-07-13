import React from 'react'
import './expensesList.css'
import ExpenseItem from './expenseItem';

export default function ExpensesList(props) {
    const expenses =  props.expenses;

    const showExpenses = expenses.map((expense) => {
        
        return (  <ExpenseItem
          title = {expense.title}
          amount = {expense.amount}
          date = {expense.date}
          ></ExpenseItem>)

    })



  return (
    <ul className='expenses-list '>

    {showExpenses.length > 0 ? showExpenses 
        : <h2 className='expenses-list__fallback'>No expenses where registered</h2>}

    </ul>
  )
}
