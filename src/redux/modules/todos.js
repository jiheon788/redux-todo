export const ADD_TODO = "redux-start/todos/ADD_TODO";
export const COMPLETE_TODO = 'redux-start/todos/COMPLETE_TODO';

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

const initState = [];

const reducer = (prevState = initState, action) => {
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

export default reducer;