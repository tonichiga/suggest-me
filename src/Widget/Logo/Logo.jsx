import s from "./Logo.module.scss" ;
import icon from "../../assets/icons/favicon-16x16.svg" ;
import { Link } from "react-router-dom";

const Logo = () => {
    return ( <div className={s.logo_main}>  
        <Link to="/">
            <img src={icon} alt="logo"/>
            </Link>
       
    </div> );
}
 
export default Logo;