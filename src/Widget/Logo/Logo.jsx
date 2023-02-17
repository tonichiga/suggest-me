import s from "./Logo.module.scss" ;
import icon from "../../assets/icons/favicon-16x16.svg" ;

const Logo = () => {
    return ( <div className={s.logo_main}>  
        <img src={icon} alt="logo"/>
       
    </div> );
}
 
export default Logo;