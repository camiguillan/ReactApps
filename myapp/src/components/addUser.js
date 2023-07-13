import React from 'react';
import './addUser.css';
import { useState } from 'react';
import Button from './button';
import Card from './card';
import ErrorModal from './errorModal';

export default function AddUser(props) {
  const [age, setAge] = useState('');
  const [name, setName] = useState('');
  const [invalid, setInvalid] = useState(false);
  const [error, setError] = useState({
    title: '',
    message: ''
  })

  function handleNameChange(e){
    setName(e.target.value);
    //console.log(name);
  }

  function handleAgeChange(e){
    setAge(+e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();

    if(age.toString().trim().length === 0 || name.trim().length === 0){
      setError({
        title: 'Emty Name or Age',
        message: 'You did not complete the name or age input, please do not leave empty values'
      })
      setInvalid(true);
      return;
    }
    if(+age < 1){
      setError({
        title: 'Age is negative',
        message: 'You entered an invalid value for an age, plese enter a valid age (> 0)'
      })
      setInvalid(true);
      return;
    }

    const userInfo = {
      userName: name,
      age: +age
    }
    
    props.submit(userInfo);
    setName('');
    setAge('');
  }

  function okay(){
    setInvalid(false);
  }

  return (
    <div>
     {invalid && <ErrorModal title={error.title} message={error.message} onClick ={okay} ></ErrorModal>}
    <Card className='input' >
    <form  onSubmit={handleSubmit}>
          <label htmlFor='userName'> UserName</label>
          <input type='text' onChange={handleNameChange} value={name} ></input>
          <label  htmlFor='age'>  Age (Years) </label>
          <input type='number' onChange={handleAgeChange} value={age} ></input>
    <Button type = {'submit'} > Add User</Button>
    </form>
    </Card>
    </div>
    )
}
