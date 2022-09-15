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
