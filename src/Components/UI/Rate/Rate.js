import React from 'react';
import icon from '../../../assets/images/icon.svg'
import s from './Rate.module.css'
function Rate({rate}) {
    return (
        <div className={s.rate}>
            <img src={icon} alt="star"/> <span>{rate}</span>
        </div>
    );
}

export default Rate;