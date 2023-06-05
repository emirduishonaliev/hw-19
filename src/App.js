import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./components/Login";
import { Todo } from "./pages/Todo";

// import { TodoForm } from "./components/TodoForm";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="*" element={<Navigate to={"/login"} />} />
      </Routes>
      {/* <TodoForm/>
      <Login/> */}
    </div>
  );
}

export default App;
