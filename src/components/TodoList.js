const TodoList = ({todos}) => {
  return (
    <>
      <ul>
        {
          todos.map((todo, index)=>{
            return <li key={index}>{todo.text}</li>
          })
        }
      </ul>
    </>
  )
}
export default TodoList;


