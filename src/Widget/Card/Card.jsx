import style from "./Card.module.scss";
import Rate from "../../Components/UI/Rate/Rate"

const Card = ({ data }) => {
  return (
      <div className={style.card}>
          <div>
            <img className={style.image} src={data.poster} alt="poster"/>
              <div className={style.rate_pos}>
                <Rate rate={data.rating.toFixed(1)} />
              </div>
          </div>
          <div>
            <span>{data.title}</span>
          </div>
      </div>
  );
};

export default Card;