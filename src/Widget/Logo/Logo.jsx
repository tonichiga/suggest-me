import s from "./Logo.module.scss";
import icon from "../../assets/Icons/Left_logo.svg";

const Logo = () => {
    return (
        <div className={s.picture}>
            <img src={icon} alt="logo" />
        </div>
    );
};

export default Logo;