import styles from "./Header.module.scss";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";


// весь верх начиная от логотипа до навбара


const Header = () => {
  return <header className={styles.header}>
    <Logo/>
    <Navbar/>
  </header>;
};

export default Header;
