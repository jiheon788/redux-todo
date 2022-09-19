import { act } from "react-dom/test-utils";
import { GET_USERS_FAIL, GET_USERS_FULFILLED, GET_USERS_PENDING, GET_USERS_REJECTED, GET_USERS_START, GET_USERS_SUCCESS } from "../action";

const initState = {
  loading: false,
  data:[],
  error:null
};

const users = (state = initState, action) => {
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

export default users;