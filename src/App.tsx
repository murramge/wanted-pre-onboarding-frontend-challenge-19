import TodoInput from "./components/TodoInput";
import TodoList from "./components/list/TodoList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <TodoInput></TodoInput>
      <TodoList></TodoList>
    </div>
  );
}

export default App;
