import React from 'react'
import './usersList.css';
//import User from './user';
import Card from './card';
import Button from './button';
import { useState } from 'react';


export default function UsersList(props) {
  //const [users,setUsers] = useState([props.users])
  const show = props.show;
  const users = props.users;
  let showUsers = []
  if(show){
    showUsers = users.map( (user, index) => {
      if( user.userName && user.age){
        return( 
          <li key={index}> Name: {user.userName} 
            <br></br>
             Age: {user.age} 
             <br></br>
             <Button  onClick={() => props.delete(index, user)}  >Delete User</Button>
             {console.log(user, index)}
          </li>
        )
  
      }
    })  
  }

  return (
    <div >
        {   ( show && showUsers.length > 0 ?
        <Card className = 'users'>
        <ul>
        {showUsers }
        </ul>
        </Card>
        :
        <p className='unavailable'> THERE IS NO USER DATA AVAILABLE </p>)}
          {console.log(showUsers)}
        
    </div>
  )
}
