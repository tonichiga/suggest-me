import s from "./Star.module.scss";
import star from "../../../assets/Icons/star.svg";

const Star = ({ rate }) => {
    return (
        <div className={s.rate}>
            <img src={star} alt="star" />
            <span className={s.rating}>{rate}</span>
        </div>
    );
}

export default Star;