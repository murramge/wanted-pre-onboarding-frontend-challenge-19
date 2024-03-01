import Button from "../../common/Button";
import store from "../../store";

const Todo = ({ todo }: any) => {
  const deleteButton = () => {
    store.dispatch({
      type: "DELETE_TODO",
      id: todo.id,
    });
  };
  return (
    <div className="todo">
      <img
        alt=""
        src={process.env.PUBLIC_URL + "block.png"}
        width={40}
        height={40}
      />
      <li key={todo.id}>{todo.content}</li>
      <Button text="Del" onClick={deleteButton}></Button>
    </div>
  );
};
export default Todo;
