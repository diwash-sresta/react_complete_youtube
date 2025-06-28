import AppName from './components/AppName'
import AddTodo from './components/AddTodo'
import './App.css'
import TodoItems from './components/TodoItems';




function App() {

  const todoItems = [{
    name: 'Buy Milk',
    dueDate: '4/10/2024'
  },
  {
    name: 'Go to college',
    dueDate: '4/10/2024'
  },
  {
    name: 'Sleep',
    dueDate: '4/10/2024'
  }

  ];

  return <center className="todo-container">
    <AppName />
    <AddTodo />
    <TodoItems todoItems={todoItems}/>
    





  </center >

}

export default App
