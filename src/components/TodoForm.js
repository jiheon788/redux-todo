import { useRef } from "react";

const TodoForm = ({add}) => {
  const inputRef = useRef();

  const onClickButton = ()=>{
    add(inputRef.current.value)
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

export default TodoForm