import './App.css';
import Expenses from './components/Expenses/expenses';
import NewExpense from './components/NewExpense/newExpense';
import { useState } from 'react';

const initial_expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];


function App() {
  const [expenses, setExpenses] = useState(initial_expenses);

  function addExpense(expense){
    console.log(expense);
    setExpenses((prevExpenses) => 
      {return [expense, ...prevExpenses]}
    );

  }

  return (
    
    <div>
      <NewExpense  onAddExpense = {addExpense} ></NewExpense>
      <Expenses expenses = {expenses}></Expenses>
    </div>
   
  );
}

export default App;
