import { useState } from 'react';
import styles from './App.module.css'
import ButtonsContainer from './components/ButtonsContainer';
import Dispaly from './components/Display';

function App() {

  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === 'AC') {
      setCalVal("")
    } else if (buttonText === '=') {
      const result = eval(calVal);
      setCalVal(result);
    } else if (buttonText === 'Del') {
      setCalVal(String(calVal).slice(0, -1));
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  }


  return (
    <div className={styles.calculator}>
      <h3>Calculator</h3>
      <Dispaly displayVal={calVal}></Dispaly>
      <ButtonsContainer onButtonClick={onButtonClick} />

    </div>
  );
}

export default App
