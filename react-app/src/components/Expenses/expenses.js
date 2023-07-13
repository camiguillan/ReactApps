import React from 'react'
import './expenses.css';
import Card from '../UI/card';
import FilterExpense from './filterExpense';
import { useState } from 'react';
import ExpensesList from './expensesList';
import ExpensesChart from './expensesChart';



export default function Expenses(props) {
      const [filteredDate, setFilteredDate] = useState('2022');
      const expenses = props.expenses;
      //const [showExpenses, setShowexpenses] = useState(mapExpenses());

      const filterExpenses = expenses.filter(expense =>{
        return expense.date.getFullYear().toString() === filteredDate
        } )
                 
      function setFilter(filter){
        setFilteredDate(filter);
        //console.log(filteredDate);
        //console.log(filter);
      }
      return (
        <div>
             
      <Card className='expenses' >
        <FilterExpense 
          onFilterDate = {setFilter} 
          selectedYear = {filteredDate}></FilterExpense>
        <ExpensesChart expenses = {filterExpenses} ></ExpensesChart>   
          <ExpensesList expenses = {filterExpenses}></ExpensesList>

    
      </Card>
      </div>
    );
}
