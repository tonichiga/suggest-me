import Star from '../../../assets/logos/Star.svg';
import style from './Rate.module.scss';

const Rate = ({ rate }) => {
    return (
        <div className={style.rate_main}>
            <img className={style.star} src={Star} alt="star"/>
            <span>{rate}</span>
        </div>
    );
};

export default Rate;