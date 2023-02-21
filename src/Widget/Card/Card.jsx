import style from "./Card.module.scss";
import Rate from "../../Components/UI/Rate/Rate"

const Card = ({ data }) => {
  return (
      <div className={style.card}>
          <div>
            <img className={style.image} src={data.image} alt="img"/>
              <div className={style.rate_pos}>
                <Rate rate={data.rate} />
              </div>
          </div>
          <div>
            <span>{data.title}</span>
          </div>
      </div>
  );
};

export default Card;