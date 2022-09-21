import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Todos from "./pages/Todos";
import Users from "./pages/Users";
const App = ()=>{

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/todos' element={<Todos />} />
        <Route path='/users' element={<Users />} />
      </Routes>
        
    </BrowserRouter>
  )
}

export default App;
