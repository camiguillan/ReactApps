
import Header from './components/header';
import InvestmentForm from './components/investmentForm';
import Results from './components/results';
import { useState } from 'react';

function App() {
  const [userInput, setUserInput] = useState(null);


  function calculateHandler(userInput){
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    setUserInput(userInput) 
  };
    
  const yearlyData = []; // per-year results
  if(userInput){

    let currentSavings = +userInput['currentSavings']; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput['yearlySavings']; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput['interests'] / 100;
    const duration = +userInput['investment'];
  
    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
  
    }
  }

    // do something with yearlyData ...
 

  return (
    <div>
     <Header></Header>
     <InvestmentForm  calculate = {calculateHandler} ></InvestmentForm>
     {userInput && <Results  results = {yearlyData} initial = {userInput.currentSavings} ></Results> }
     {!userInput && 
            <div className='resultInvalid'
            >NO DATA AVAILABLE</div>
      }
     
    </div>
  );
}

export default App;
