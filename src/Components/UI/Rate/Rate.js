import React from 'react';
import star from '../../../assets/images/star.svg'
import s from './Rate.module.css'
function Rate({rate}) {
    return (
        <div className={s.rate}>
            <img src={star} alt="star"/> <span>{rate}</span>
        </div>
    );
}

export default Rate;