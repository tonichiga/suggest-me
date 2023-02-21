import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import logo from "../../assets/logos/logo.png";
import Navbar from "../Navbar/Navbar";
const Header = () => {
    return (
       <header className={styles.header}>
           <div className={styles.container}>
               <Link to="/">
                   <img src={logo} alt="logo"/>
               </Link>
               <Navbar />
           </div>
       </header>
    );
};

export default Header;
