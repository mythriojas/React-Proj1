import logo from './logo.svg';
import './App.css';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';
import React, { useState } from 'react';
function App() {
const [usersList,setUsersList] = useState([]);
const addUserHandler = (uName,uAge) =>{
  setUsersList((prevUsersList)=>{
    return [...prevUsersList,{name:uName,age:uAge,id:Math.random().toString()}]
  });
}
  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UserList  users={usersList}/>
    </div>
  );
}

export default App;
