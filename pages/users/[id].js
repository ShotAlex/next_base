import {useRouter} from "next/router";

export default ({user}) => {
  const {query} = useRouter()

  return (
    <>
      <div> User id: {query.id}</div>
      <div> Name: {user.name}</div>
    </>
  )
}

export async function getServerSideProps({params}) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
  const user = await response.json()
  return {
    props: {user},
  }
}