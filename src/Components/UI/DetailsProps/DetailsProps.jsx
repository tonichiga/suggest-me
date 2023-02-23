import s from "./DetailsProps.module.scss";
import Star from "../Star/Star";

const DetailsProps = ({ isStar, label, value }) => {
    if (!value) return null;

    return (
        <div className={s.detail_prop}>
            <span>{label}</span>
            {isRate ? <Star rate={value} /> : <span>{value}</span>}
        </div>
    );
}

export default DetailsProps;