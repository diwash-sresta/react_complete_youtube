import { useContext } from "react";
import styles from "./Todoitem.module.css"
import { MdDeleteForever } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";


function TodoItem({ todoName, todoDate, onDeleteClick }) {
  const { deleteItem } = useContext(TodoItemsContext); 


  return (
    <div className="container">
      <div className=" row item-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2"><button type="button" className="btn btn-danger action-buttons"
          onClick={() => deleteItem(todoName)}
        ><MdDeleteForever /></button></div>
      </div>
    </div>
  );
}

export default TodoItem;