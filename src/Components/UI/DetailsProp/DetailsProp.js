import React from 'react';
import Rate from '../Rate/Rate'
import s from './DetailsProp.module.scss'
function DetailsProp({isRate, label, value}) {
    if (!value) return null;
    return (
        <div className={s.detail_prop}>
            <span>{label}</span>
            {isRate ? <Rate rate={value}/> : <span>{value}</span>}
        </div>
    );
}

export default DetailsProp;