import s from "./DetailsAbout.module.scss";
import Rate from "../../UI/Rate/Rate"

const DetailsAbout = ({ isRate, label, value }) => {
    return ( 
        <div className={s.detail}>
            <span>{label}</span>
            {isRate ? <Rate rate={value} /> : <span>{value}</span>}
         </div>
     );
}
 
export default DetailsAbout;