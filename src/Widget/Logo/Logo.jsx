import s from "./Logo.module.scss";
import icon from "../../assets/Icons/Left_logo.svg";
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <div className={s.picture}>
            <Link to="/">
                <img src={icon} alt="logo" />
            </Link>
        </div>
    );
};

export default Logo;