import s from "./Logo.module.scss";
import icon from "../../assets/icons/film.svg";

const Logo = () => {
  return (
    <div className={s.logo_container}>
      <img src={icon} alt="logo" />
      <span className={s.text_logo}>Filmoteka</span>
    </div>
  );
};

export default Logo;
