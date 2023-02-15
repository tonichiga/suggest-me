import Rate from "../../Components/UI/Rate/Rate";
import style from "./Card.module.scss";
import poster from "../../assets/images/poster.jpeg";

//  {
//     id: 1,
//     title: "GREYHOUND",
//     about: "Drama, Action | 2020",
//     rate: 4,
//   },

const Card = ({ data }) => {
  return (
    <div className={style.card}>
      <img className={style.image} src={poster} alt="poster" />
      <div className={style.card_footer}>
        <span className={style.card_title}>{data.title}</span>
        <span className={style.card_about}>{data.about}</span>
      </div>

      <div className={style.rate_container}>
        <Rate rate={data.rate} />
      </div>
    </div>
  );
};

export default Card;
