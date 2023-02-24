import styles from "./Header.module.scss";
import icon from "../../assets/images/icon.svg";
import {Link} from "react-router-dom";
const Header = () => {
  return (

      <div  className={styles.header}>

            <Link to={"/"}>
                <img className={styles.svg} src={icon} alt="logo"/>
            </Link>


          <header className={styles.header}></header>

              <div className={styles.nav}>
                  {/*<a className={styles.a}>Movies</a>*/}
                  <Link to="pixabay" className={styles.a}>Pixabay</Link>
                  <a className={styles.a}>TV Shows</a>
                  <a className={styles.a}>Suggest me →</a>
              </div>


        </div>
  )
};

export default Header;
