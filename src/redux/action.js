import axios from "axios";
export const ADD_TODO = "ADD_TODO";
export const COMPLETE_TODO = 'COMPLETE_TODO';

// {type: ADD_TODO, text: todo}
export const addTodo = (text)=>{
  return {
    type: ADD_TODO,
    text,
  };
}

// {type: COMPLETE_TODO, index: 3}
export const completeTodo = (index)=>{
  return {
    type: COMPLETE_TODO,
    index
  };
}

export const SHOW_ALL = 'SHOW_ALL';
export const SHOW_COMPLETE = 'SHOW_COMPLETE';

export const showAll = ()=>{
  return {type: SHOW_ALL}
}

export const showComplete = ()=>{
  return {type: SHOW_COMPLETE}
}

//users
export const GET_USERS_START = 'GET_USERS_START';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAIL = 'GET_USERS_FAIL';

export const getUsersStart = ()=>{
  return {
    type: GET_USERS_START
  }
}

export const getUsersSuccess = (data)=>{
  return {
    type: GET_USERS_SUCCESS,
    data,
  }
}

export const getUsersFail = (error)=>{
  return {
    type: GET_USERS_FAIL,
    error
  }
}

export const getUsersThunk = () => {
  return (dispatch)=>{
    dispatch(getUsersStart());
    axios.get("https://api.github.com/users").then(res=>{
      dispatch(getUsersSuccess(res.data));
    }).catch(err=>{
      dispatch(getUsersFail(err));
    })
  }
}

export const GET_USERS = 'GET_USERS';

export const GET_USERS_PENDING = 'GET_USERS_PENDING';
export const GET_USERS_FULFILLED = 'GET_USERS_FULFILLED';
export const GET_USERS_REJECTED = 'GET_USERS_REJECTED';


export const getUsersPromise = ()=>{
  return {
    type: GET_USERS,
    payload: async () => {
      const res = await axios.get("https://api.github.com/users");
      return res.data;
    }
  }
}
