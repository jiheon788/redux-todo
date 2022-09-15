import { ADD_TODO, COMPLETE_TODO } from "../action"

const initState = [];

const todos = (prevState = initState, action) => {
  if (action.type === ADD_TODO) {
    return [
      ...prevState, {text: action.text, done:false}
    ]
  }

  if (action.type === COMPLETE_TODO) {
    return prevState.map((todo, index)=>{
      if(index === action.index){
        return {...todo, done:true}
      }
      return todo;
    })
  }
  // 아무 변화x
  return prevState; 
}

export default todos;