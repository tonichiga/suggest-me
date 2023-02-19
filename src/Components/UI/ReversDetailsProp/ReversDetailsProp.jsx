import { Rate } from "../";
import style from "./ReversDetailsProp.module.scss";

const DetailsProps = ({ isRate, label, value }) => {
    return (
        <div className={style.detail_prop}>
            <span>{label}</span>
            {isRate ? <Rate rate={value} /> : <span className={style.second_span}>{value}</span>}
        </div>
    );
};

export default DetailsProps;