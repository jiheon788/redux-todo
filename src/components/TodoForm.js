import { useRef } from "react";
import useReduxDispatch from "../hooks/useReduxDispatch";
import { addTodo } from "../redux/action";

const TodoForm = () => {
  const inputRef = useRef();
  const dispatch = useReduxDispatch();


  const onClickButton = ()=>{
    dispatch(addTodo(inputRef.current.value))
  }

  return (
    <>
      <div>
        <input ref={inputRef}/>
        <button onClick={()=>{
          onClickButton()
        }}>+</button>
      </div>
    </>
  )
}

export default TodoForm;