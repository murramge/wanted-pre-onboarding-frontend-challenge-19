import store from "../store";
import { useState } from "react";
import Button from "../common/Button";

const TodoInput = () => {
  const [todoContext, setTodoContext] = useState("");
  const [idnumber, setIdNumber] = useState(1);

  const todoChange = (e: any) => {
    setTodoContext(e.target.value);
  };

  const todoAddButton = () => {
    if (todoContext) {
      store.dispatch({
        type: "ADD_TODO",
        data: { id: idnumber, content: todoContext },
      });
      setIdNumber(idnumber + 1);
      setTodoContext("");
    }
  };

  return (
    <>
      <input
        value={todoContext}
        placeholder="할 일을 작성하세요"
        onChange={todoChange}></input>
      <Button text="Add" onClick={todoAddButton}></Button>
    </>
  );
};
export default TodoInput;
