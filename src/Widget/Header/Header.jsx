import styles from "./Header.module.scss";
import logo from "../../assets/logos/logo.png";
import Navbar from "../Navbar/Navbar";
const Header = () => {
    return (
       <header className={styles.header}>
           <div className={styles.container}>
               <img src={logo} alt="logo"/>
               <Navbar />
           </div>
       </header>
    );
};

export default Header;
