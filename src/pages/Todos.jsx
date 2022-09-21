import TodoFormContainer from "../containers/TodoFormContainer"
import TodoListContainer from "../containers/TodoListContainer"

const Todos = () => {
  return (
    <div>
      <TodoListContainer />
      <TodoFormContainer />
    </div>
  )
}

export default Todos