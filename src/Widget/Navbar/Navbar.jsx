import { Link } from "react-router-dom";
import styles from "./Navbar.module.scss";
import arrowRight from "../../assets/logos/arrowRight.svg";

const Navbar = () => {
    return (
    <nav>
        <li><Link to="pixabay">Pixabay</Link></li>
        <li><a href="#">TV Shows</a></li>
        <li className={styles.suggest}><a href="#">Suggest me</a>
            <img className={styles.arrowRight} src={arrowRight} alt="arrowRight"/>
        </li>
    </nav>
    );
}

export default Navbar;