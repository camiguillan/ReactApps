import React from 'react';
import './investmentForm.css';
import { useState } from 'react';

export default function InvestmentForm(props) {
    const [currentSavings, setCurrentSavings] = useState(10000);
    const [yearlySaving, setearlySavings] = useState(1200);
    const [interest, setinterest] = useState(10);
    const [investment, setInvestment] = useState(7);

    function handleClick(e){
        e.preventDefault()
        const userInput = {
            currentSavings : currentSavings,
            yearlySavings : yearlySaving,
            interests : interest,
            investment : investment
        }
        props.calculate(userInput);
        reset();
    }

    function reset(){
        setCurrentSavings(10000);
        setInvestment(7);
        setearlySavings(1200);
        setinterest(10);
    }

    function handleCurrentSavings(e){
        setCurrentSavings(+e.target.value);
    }

    function handleYearlySavings(e){
        setearlySavings(+e.target.value);
    }

    function handleInterests(e){
        setinterest(+e.target.value)
    }

    function handleInvestment(e){
        setInvestment(+e.target.value);
    }

  return (
    <form className="form"  onSubmit={handleClick}>
    <div className="input-group">
      <p>
        <label htmlFor="current-savings">Current Savings ($)</label>
        <input type="number" value={currentSavings} id="current-savings"  onChange={handleCurrentSavings} />
      </p>
      <p>
        <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
        <input type="number" value={yearlySaving} id="yearly-contribution" onChange={handleYearlySavings} />
      </p>
    </div>

    <div className="input-group">
      <p>
        <label htmlFor="expected-return">
          Expected Interest (%, per year)
        </label>
        <input type="number" value={interest}  id="expected-return" onChange={handleInterests} />
      </p>
      <p>
        <label htmlFor="duration">Investment Duration (years)</label>
        <input type="number" value={investment} id="duration" onChange={handleInvestment} />
      </p>
    </div>

    <p className="actions">
      <button  onClick={reset} type="reset" className="buttonAlt">
        Reset
      </button>
      <button  type="submit" className="button">
        Calculate
      </button>
    </p>
  </form>
  )
}
