import Container from "./Container";
import styles from './assets/styles/global.scss'
import MainContainer from "./Widget/MainContainer/MainContainer";
function App() {
  return (
      <div className={styles.global}>
      <Container/>
      </div>
  );
}

export default App;
