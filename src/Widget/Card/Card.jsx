import style from "./Card.module.scss";
import Rate from "../../Components/UI/Rate/Rate";
const Card = ({ data }) => {
  return (

    <div className={style.card}>
        <img className={style.image} src={data.poster} alt="poster" />
        <div className={style.card_footer}>
            <span className={style.card_title}>{data.title}</span>
        </div>

        <div className={style.rate_container}>
            <Rate rate={data.rating.toFixed(1)} />
        </div>
    </div>
  );
};

export default Card;
