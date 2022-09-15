import useReduxState from "../hooks/useReduxState";

const TodoList = () => {
  const state = useReduxState();
  return (
    <>
      <ul>
        {
          state.todos.map((todo)=>{
            return <li>{todo.text}</li>
          })
        }
      </ul>
    </>
  )
}

export default TodoList;