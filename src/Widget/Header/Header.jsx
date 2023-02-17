import styles from "./Header.module.scss";
import icon from "../../assets/images/icon.svg";
const Header = () => {
  return (

      <div  className={styles.header}>

          <img className={styles.svg} src={icon} alt="logo"/>

          <header className={styles.header}></header>

              <div className={styles.nav}>
                  <a className={styles.a}>Movies</a>
                  <a className={styles.a}>TV Shows</a>
                  <a className={styles.a}>Suggest me →</a>
              </div>


        </div>
  )
};

export default Header;
