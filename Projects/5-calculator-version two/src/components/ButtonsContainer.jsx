import styles from './ButtonsContainer.module.css'

const ButtonsContainer = ({ onButtonClick }) => {

  const buttonNames = ['AC', 'Del', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '00', '.', '=',]

  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map((buttonName =>
        <button className={styles.button} onClick={() => onButtonClick(buttonName)}>
          {buttonName}
        </button>
      ))}

    </div>
  );
};

export default ButtonsContainer;