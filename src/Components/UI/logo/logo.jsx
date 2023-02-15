import styles from "./Logo.module.scss";
import PurpleTriangle from "../../../assets/images/Vectorpurple_triangle.svg";
import BlueTriangle from "../../../assets/images/Vectorblue_triangle.svg";

const Logo = () => {
    return <div className={styles.logo_main}><a className={styles.logo_link}></a><img src={BlueTriangle} alt="logo" /><img src={PurpleTriangle} alt="logo" /></div>
}

export default Logo;