import AppName from './components/AppName'
import AddTodo from './components/AddTodo'
import './App.css'
import TodoItems from './components/TodoItems';
import { useReducer } from 'react';
import WelcomeMessage from './components/WelcomeMessage';
import TodoItemsContextProvider, { TodoItemsContext } from './store/todo-items-store';



function App() {
  return (
   <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName />
        <AddTodo  />
        <WelcomeMessage/>
        <TodoItems />
    
      </center >
  </TodoItemsContextProvider>
  );
}



export default App
