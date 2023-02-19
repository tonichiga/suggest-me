import s from "./Card.module.scss";
import Rate from "../../Components/Rate/Rate";

const Card = ({data}) => {
    return <div className={s.card_block}>
        <img src={data.background} alt="Card_photo" />
        <p>{data.title}</p>
        <div className={s.rate_position}>
        <Rate rate={data.rate} />
        </div>
           </div>
}

export default Card;