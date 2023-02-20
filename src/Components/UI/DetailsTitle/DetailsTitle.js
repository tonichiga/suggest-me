import React from 'react';
import s from './DetailsTitle.module.css'
function DetailsTitle(props) {
    return (
        <div className={s.all}>

           <div className={s.image}>
           </div>

        <div className={s.title}>
            <div className={s.film_name}>Action</div>
            <div className={s.film_type}>Avengers: Endgame</div>
        </div>

        </div>
    );
}

export default DetailsTitle;