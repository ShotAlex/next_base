import React from 'react';
import Nav from "../components/Nav/Nav";
import Link from "next/link";

const Users = ({users}) => {

  const userList = users.map( (user) => (
      <li key={user.id}>
        <Link href={`/users/${user.id}`}>
          <a>User id: {user.id} | Name: {user.name}</a>
        </Link>
      </li>
    )
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

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await response.json()
  return {
    props: {users}, // will be passed to the page component as props
  }
}
