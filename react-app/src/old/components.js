import React from 'react'
import './components-styles.css';
import { useState } from 'react';

export default function Components() {
  const [fruit, setFruit] = useState();


  function handleChange(event){
    setFruit(event.target.value);

  }

  return (
    <div className='cont'>
        <h1>An interesting app</h1>
        <div className='comps'> 
            <p>Hello </p>
            <p>World</p>
            <p>!</p>
        </div>   
        <div className='events'>
            <input className="red-input" value="I'll be red when focused." />
            
            <div className='select' >

              <select name="my-select" id="fruit"  onChange={handleChange}>
              <option value="Apples">Apples</option>
              <option value="Grapes">Grapes</option>
              <option value="Pears">Pears</option>
              </select>

              <p> {fruit} </p>

              </div>

            <div className='yes-no'>
              <input type="radio" name="my-input" id="yes" value="yes" />
              <label for="yes">Yes</label>

              <input type="radio" name="my-input" id="no" value="no" />
              <label for="no">No</label>
            </div>

            <div className='check'>
              <input type="checkbox" name="my-checkbox" id="opt-in" />
              <label for="opt-in">Check me!</label>
            </div>

            <button> Hover Me! </button>

          

        </div>         
    </div>
  )
}
