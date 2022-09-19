import { act } from "react-dom/test-utils";
import { GET_USERS_FAIL, GET_USERS_START, GET_USERS_SUCCESS } from "../action";

const initState = {
  loading: false,
  data:[],
  error:null
};

const users = (state = initState, action) => {
  if(action.type === GET_USERS_START){
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

  if(action.type === GET_USERS_FAIL){
    return {
      ...state,
      loading:false,
      error:action.error
    }
  }

  return state
}

export default users;