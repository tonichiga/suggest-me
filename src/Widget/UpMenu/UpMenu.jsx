import s from "./UpMenu.module.scss";
 // import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <div className={s.navbar}>
            { /* <Link to="pixabay">Pixabay</Link> */}
            <a href="/">Movie</a>
            <a href="/">TV Show</a>
            <a href="/">Suggest me &rarr;</a>

        </div>
    );
};

export default Menu;