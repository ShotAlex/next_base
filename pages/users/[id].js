import {useRouter} from "next/router";
import MainContainer from "../../components/MainContainer/MainContainer";

export default function userPage({user}){
  const {query} = useRouter()

  return (
    <MainContainer>
      <div> User id: {query.id}</div>
      <div> Name: {user.name}</div>
    </MainContainer>
  )
}

export async function getServerSideProps({params}) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
  const user = await response.json()
  return {
    props: {user},
  }
}