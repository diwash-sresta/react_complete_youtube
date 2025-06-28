
import { useContext } from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoItem.module.css"
import { TodoItemsContext } from "../store/todo-items-store";

const TodoItems = () => {

  const { todoItems, } = useContext(TodoItemsContext);

  
  
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem key={item.name + item.dueDate} todoDate={item.dueDate} todoName={item.name}
          
        />
      ))}
    </div>
  );
};

export default TodoItems;