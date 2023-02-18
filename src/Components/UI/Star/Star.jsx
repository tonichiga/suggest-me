import s from "./Star.module.scss";
import star from "../../../assets/Icons/star.svg";

const Star = ({ rate }) => {
    return <div className={s.rate_block}>
        <img src={star} alt="rate" />
        <p>{rate}</p>
    </div>
}

export default Star;