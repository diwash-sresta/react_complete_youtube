import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import FoodItems from './components/FoodItems';
import ErrorMessage from './components/ErrorMessage';
import Container from './components/Container';
import FoodInput from './components/FoodInput';
import { useState } from 'react';


// React Fragments
// function App() {


//   return (
//     //React Fragments allow you to group a list of children without adding extra nodes to the DOM.
//     <> 
//       <h1>Healthy Foods</h1>
//       <ul class="list-group">
//         <li class="list-group-item">Dal</li>
//         <li class="list-group-item">Green Vegetables</li>
//         <li class="list-group-item">Rice</li>
//         <li class="list-group-item">Roti</li>
//         <li class="list-group-item">Milk</li>
//       </ul>
//     </>
//   )
// }

// export default App


// Map Method



function App() {
  let [foodItems, setFoodItems] = useState([]);

  const onKeyDown = (event) => { 
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
  };

  return (
    <>
      <Container>
        <h1 className='food-heading'>Healthy Foods</h1>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodItems items={foodItems}></FoodItems>
      </Container>
    </>
  );
}

export default App;
