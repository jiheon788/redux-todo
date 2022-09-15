import { useCallback } from "react";
import { useDispatch } from "react-redux";
import TodoForm from "../components/TodoForm";
import { addTodo } from "../redux/action";

const TodoFormContainer = () => {
  const dispatch = useDispatch();

  // const add = (text) => {
  //   dispatch(addTodo(text))
  // }
  const add = useCallback((text)=>{
    dispatch(addTodo(text));
  }, [dispatch])

  return <TodoForm add={add} />
}
  

export default TodoFormContainer;