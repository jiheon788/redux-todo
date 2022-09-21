import axios from "axios";

export const GET_USERS_START = 'redux-start/users/GET_USERS_START';
export const GET_USERS_SUCCESS = 'redux-start/users/GET_USERS_SUCCESS';
export const GET_USERS_FAIL = 'redux-start/users/GET_USERS_FAIL';

export const GET_USERS = 'redux-start/users/GET_USERS';

export const GET_USERS_PENDING = 'redux-start/users/GET_USERS_PENDING';
export const GET_USERS_FULFILLED = 'redux-start/users/GET_USERS_FULFILLED';
export const GET_USERS_REJECTED = 'redux-start/users/GET_USERS_REJECTED';

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

const initState = {
  loading: false,
  data:[],
  error:null
};

const reducer = (state = initState, action) => {
  if(action.type === GET_USERS_START || action.type === GET_USERS_PENDING){
    return {
      ...state,
      loading:true,
      error:null
    }
  }

  if(action.type === GET_USERS_SUCCESS){
    return {
      ...state,
      loading:false,
      data:action.data
    }
  }

  if(action.type === GET_USERS_FULFILLED){
    return {
      ...state,
      loading:false,
      data:action.payload
    }
  }
  
  if(action.type === GET_USERS_FAIL){
    return {
      ...state,
      loading:false,
      error:action.error
    }
  }

  if(action.type === GET_USERS_REJECTED){
    return {
      ...state,
      loading:false,
      error:action.payload
    }
  }

  return state
}

export default reducer;

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

export const getUsersPromise = ()=>{
  return {
    type: GET_USERS,
    payload: async () => {
      const res = await axios.get("https://api.github.com/users");
      return res.data;
    }
  }
}