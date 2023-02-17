import style from "./Card.module.scss";
import star from "../../assets/images/star.svg";
import Rate from "../../Components/UI/Rate/Rate";
const Card = ({ data }) => {
  return (
      // <div className={style.card}>
      //
      // <img src={data.img} alt="poster" className={style.img} />
      //
      //            <span className={style.card_title}>{data.title}</span>
      //
      //       <div className={style.rate}>
      //            <Rate rate={data.rate} />
      //       </div>
      //
      // </div>

    <div className={style.card}>
        <img className={style.images} src={data.img} alt="poster" />
        <div className={style.card_footer}>
            <span className={style.card_title}>{data.title}</span>
        </div>

        <div className={style.rate_container}>
            <Rate rate={data.rate} />
        </div>
    </div>
  );
};

export default Card;
