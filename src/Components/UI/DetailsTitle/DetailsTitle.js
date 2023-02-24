import React from 'react';
import s from './DetailsTitle.module.css'
function DetailsTitle({backdrop, title,genres}) {
    return (
        <div className={s.all}>

           <div className={s.image} style={{ background: `linear-gradient(180deg, rgba(54, 44, 146, 0.4) 0%, rgba(18, 98, 151, 0.4) 100%), url(${backdrop})` }}>
           </div>

        <div className={s.title}>
            <div className={s.film_name}>
                <a>{genres}</a>
            </div>
            <div className={s.film_type}>{title}</div>
        </div>

        </div>
    );
}

export default DetailsTitle;