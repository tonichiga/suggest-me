import s from "./DetailsAboutFilm.module.scss";
import Rate from "../../Rate/Rate";

const DetailsAboutFilm = ({ isRate, label, value }) => {
    return ( 
        <div className={s.detail}>
            <span>{label}</span>
            {isRate ? <Rate rate={value} /> : <span>{value}</span>}
         </div>
     );
}
 
export default DetailsAboutFilm;