import s from "./Logo.module.scss";
import icon from "../../assets/icons/film.svg";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className={s.logo_container}>
      <Link to="/">
        <img src={icon} alt="logo" />
        <span className={s.text_logo}>Filmoteka</span>
      </Link>
    </div>
  );
};

export default Logo;
