import store from "../../store";
import { useSelector } from "react-redux";
import Todo from "./Todo";
const TodoList = () => {
  let todoInfo = store.getState().todo;
  todoInfo = useSelector((state: any) => state.todo);
  return (
    <ul>
      <div>
        {todoInfo.map((todo) => {
          return <Todo key={todo.id} todo={todo}></Todo>;
        })}
      </div>
    </ul>
  );
};
export default TodoList;
