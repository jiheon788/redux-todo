import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import UserList from "../components/UserList";
import { getUsersFail, getUsersStart, getUsersSuccess } from "../redux/action";

const UserListContainer = () => {
  const users = useSelector(state => state.users.data);
  const dispatch = useDispatch();

  const getUsers = useCallback(()=>{
    dispatch(getUsersStart());
    axios.get("https://api.github.com/users").then(res=>{
      dispatch(getUsersSuccess(res.data));
    }).catch(err=>{
      dispatch(getUsersFail(err));
    })
  },[dispatch])
  

  return <UserList users={users} getUsers={getUsers} />
}

export default UserListContainer;