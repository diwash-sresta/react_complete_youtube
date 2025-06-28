import { useRef, useContext } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo() {
  const todoNameElement = useRef();
  const todoDateElement = useRef();
  const { addNewItem } = useContext(TodoItemsContext);

  const handleAddButtonClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDate = todoDateElement.current.value;
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
    if (typeof addNewItem === 'function') {
      addNewItem(todoName, dueDate);
    }
  }

  return (
    <div className="container">
      <form className="row item-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6"><input type='text' ref={todoNameElement} placeholder='Enter todo here'/></div>
        <div className="col-4"><input type='date' ref={todoDateElement} /></div>
        <div className="col-2">
          <button type="submit" className="btn btn-success action-buttons">
            <IoMdAddCircleOutline />Add
          </button></div>
      </form>
    </div>
  );
}
export default AddTodo;