import React from 'react';
import './results.css';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
})


export default function Results(props) {

  const initialInvestment = props.initial;
    const data= props.results;
    let results = []
    if(data){
      
    results = data.map( (result, index) => {
      return (
      <tr key={index}>
          <td >{result.year}</td>
          <td>{formatter.format(result.savingsEndOfYear)}</td>
          <td>{formatter.format(result.yearlyInterest)}</td>
          <td>{formatter.format(result.savingsEndOfYear - initialInvestment - result.yearlyContribution*result.year)}</td>
          <td>{formatter.format(initialInvestment + result.yearlyContribution*result.year)}</td>
        </tr>
      )
  })
 }


 


    
  return (
    
    <div>
    {/* Todo: Show below table conditionally (only once result data is available) */}
    {/* Show fallback text if no data is available */}
 
        
        <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
    {results}
          
        </tbody>
      </table>
      
    </div>
  )
}
