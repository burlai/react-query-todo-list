import "./App.css";
import { Header } from "./components/Header";
import { TodoList } from "./components/ToDoList";

function App() {
  return (
    <>
      <Header text="Треба зробити" />
      <TodoList />
    </>
  );
}

export default App;
