import { useEffect } from "react";

const UserList = ({users, getUsers}) => {

  useEffect(()=>{
    getUsers()
  },[getUsers])

  if(users.length === 0){
    return <p>현재 유저 정보 없음</p>
  }

  return (
    <ul>
      {
        users.map((user, index)=>(
          <li key={index}>{user.login}</li>
        ))
      }
    </ul>
  )
}

export default UserList;