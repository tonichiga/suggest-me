import { Link } from "react-router-dom";
import s from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={`${s.navbar} ${s.navbar_2}`}>
      <Link to="pixabay">Pixabay</Link>
      <a href="/">Movie</a>
      <a href="/">TV Show</a>
    </div>
  );
};

export default Navbar;
