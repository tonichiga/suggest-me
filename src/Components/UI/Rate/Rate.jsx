import s from "./Rate.module.scss";
import icon from "../../../assets/icons/star.svg";

const Rate = ({ rate }) => {
  return (
    <div className={s.rate}>
      <img src={icon} alt="star" /> <span>{rate}</span>
    </div>
  );
};

export default Rate;
