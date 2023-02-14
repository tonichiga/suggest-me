import styles from "./Header.module.scss";
import logo from "../../assets/images/logo.png";
import arrowRight from "../../assets/images/arrowRight.svg";
const Header = () => {
    return (
       <header className={styles.header}>
           <div className={styles.container}>
               <img src={logo} alt="logo"/>
               <nav>
                   <li><a href="#">Movies</a></li>
                   <li><a href="#">TV Shows</a></li>
                   <li><a href="#">Suggest me</a>
                       <img className={styles.arrowRight} src={arrowRight} alt="arrowRight"/>
                   </li>
               </nav>
           </div>
       </header>
    );
};

export default Header;
