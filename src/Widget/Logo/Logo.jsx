import s from "./Logo.module.scss";
import icon from "../../assets/styles/icons/icon.svg";

const Logo = () => {
  return (
    <div className={s.logo_container}>
      <img src={icon} alt="Logo" />
    </div>
  );
};

export default Logo;