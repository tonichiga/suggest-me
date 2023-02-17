import style from "./Card.module.scss";
import star from "../../assets/images/star.svg";
import Rate from "../../Components/UI/Rate/Rate";
const Card = ({ data }) => {
  return (
      <div className={style.card}>
      <img src={star} alt="poster" className={style.img} />
    <span className={style.film_name}>{data.title}</span>
    <div className={style.rate}>
       <Rate rate={data.rate} />
    </div>
      </div>
  );
};

export default Card;
