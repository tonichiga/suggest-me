import s from "./Navbar.module.scss";
import { Link } from "react-router-dom";

// навбар который при наведении подсвечивается

const Navbar = () => {
    return <div className={s.link_block}>
        <Link to="pixabay">Pixabay</Link>
                <a href="/">Movies</a>
                <a href="/">TV Shows</a>
                <a href="/">Suggest me &rarr;</a>
           </div>
}

export default Navbar;