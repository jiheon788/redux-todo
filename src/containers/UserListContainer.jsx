import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import UserList from "../components/UserList";
import { getUsersPromise, getUsersThunk } from "../redux/modules/users";

const UserListContainer = () => {
  const users = useSelector(state => state.users.data);
  const dispatch = useDispatch();

  // Modify ActionCreatorFunc
  // const getUsers = useCallback(()=>{
  //   dispatch(getUsersStart());
  //   axios.get("https://api.github.com/users").then(res=>{
  //     dispatch(getUsersSuccess(res.data));
  //   }).catch(err=>{
  //     dispatch(getUsersFail(err));
  //   })
  // },[dispatch])

  const getUsers = useCallback(()=>{
    // dispatch(getUsersThunk());
    dispatch(getUsersPromise());
  },[dispatch])
  

  return <UserList users={users} getUsers={getUsers} />
}

export default UserListContainer;