import {useRouter} from "next/router";

export default () => {
  const {query} = useRouter()

  return (
    <div> User id: {query.id}</div>
  )
}
