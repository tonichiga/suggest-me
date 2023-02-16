import styles from "./Card.module.scss";
import WidowPhoto from "../../../assets/images/Black_widow.jpg";
import Rate from "../Rate/Rate";

const Card = ({data}) => {
    return <div className={styles.card_block}>
        <img src={WidowPhoto} alt="Card_photo" />
        <p>{data.title}</p>
        <Rate rate={data.rate} />
           </div>
}

export default Card;