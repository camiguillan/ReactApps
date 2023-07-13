import './App.css';
import AddUser from './components/addUser';
import { useState } from 'react';
import UsersList from './components/usersList';



function App() {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);
  console.log(users.length)

  function submitUser(userInput){
      setUsers((prev) => {
        if(prev.length === 0){
          return [userInput]
        }
        return [ ...prev, userInput];
      });
      setShow(true);
  }

  function handleDelete(index, user){
    const i = users.indexOf(user) ;
    const newUsersList = users
    newUsersList.splice(index,1);
    setUsers(newUsersList);
    console.log(users, index, i);
    if(users.length === 0){
      setShow(false);
    }
  }


  return (
    
    <div >
  
      <AddUser submit = {submitUser}   ></AddUser>
    <UsersList users = {users} delete = {handleDelete} show={show} ></UsersList>
    
      
   
    </div>
  );
}
//lets you mark the main function in a file so that you can later import it from other files
//their names must start with a capital letter or they won’t work!
export default App;


