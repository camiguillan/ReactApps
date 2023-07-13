import React from 'react'
import './chart.css';
import ChartBar from './chartBar';

export default function Chart(props) {
    
    const data = props.data
    const values = data.map(val => val.value);
    const totalMax = Math.max(...values);

    const showData =   data.map((m) => {
     return ( <ChartBar value = {m.value} 
              maxValue = {totalMax} 
              label = {m.label}
              key = {m.label}>  </ChartBar>)
  } )

  return (
    <div className='chart'>
        {showData}

    </div>
  )
}
