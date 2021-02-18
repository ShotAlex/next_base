import React, {useState, useEffect} from 'react';
import Nav from "../components/Nav/Nav";

const Users = () => {
  const [users, setUsers] = useState([
    { id:1, name:'' },
  ])

  useEffect(async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    setUsers(data)
  }, [])

  const userList = users.map( (user) =>
    <li key={user.id}>User id: {user.id} | Name: {user.name}</li>
  )

  return (
    <>
      <Nav />
      <h1>Users</h1>
      {userList}
    </>
  );
};

export default Users;