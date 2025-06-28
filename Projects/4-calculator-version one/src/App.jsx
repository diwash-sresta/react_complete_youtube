
import styles from './App.module.css'
import ButtonsContainer from './components/ButtonsContainer';
import Dispaly from './components/Display';

function App() {


  return (
    <div className={styles.calculator}>
      <h3>Calculator</h3>
      <Dispaly></Dispaly>
      <ButtonsContainer />

    </div>
  );
}

export default App
