import TodoFormContainer from "./containers/TodoFormContainer";
import TodoListContainer from "./containers/TodoListContainer";
import UserListContainer from "./containers/UserListContainer";

const App = ()=>{

  return (
    <>
      <UserListContainer />
      <TodoListContainer />
      <TodoFormContainer />
    </>
  )
}

export default App;
