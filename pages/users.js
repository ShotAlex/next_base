import React from 'react';
import Link from "next/link";
import MainContainer from "../components/MainContainer/MainContainer";

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
    <MainContainer title='Users' >
      <h1>Users</h1>
      {userList}
    </MainContainer>
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
