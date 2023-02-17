import styles from "./Rate.module.scss";
import StarImage from "../../assets/icons/Star.svg";

const Rate = ({rate}) => {
    return <div className={styles.rate_block}>
        <img src={StarImage} alt="rate" />
            <p>{rate}</p></div>
}

export default Rate;