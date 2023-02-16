import style from "./Card.module.scss";
import Star from "../../Components/UI/Star/Star"

const Card = ({ data }) => {
    return (
        <div className={style.card}>
                <img className={style.image} src={data.image} alt="img" />
                <Star rate={data.rate} />
                <p>{data.title}</p>

        </div>
    );
};

export default Card;
