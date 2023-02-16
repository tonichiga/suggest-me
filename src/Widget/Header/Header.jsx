import styles from "./Header.module.scss";
import Logo from "../Logo/Logo";
import UpMenu from "../UpMenu/UpMenu";

const Header = () => {
    return <header className={styles.header}>
        <Logo />
        <UpMenu />
    </header>;

};

export default Header;
