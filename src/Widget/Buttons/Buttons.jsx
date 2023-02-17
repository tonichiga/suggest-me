import React from 'react';
import s from './Inputs.module.scss'
function Buttons() {
    return (
        <div className={s.input_wrapper}>
            <div className={s.content}>
                <div className={s.input_container}>
                    <input name="category" defaultChecked id="any" type="radio" />
                    <label htmlFor="any">Any</label>
                </div>
                <div className={s.input_container}>
                    <input name="category" id="action" type="radio" />
                    <label htmlFor="action">Action</label>
                </div>
                <div className={s.input_container}>
                    <input name="category" id="horror" type="radio" />
                    <label htmlFor="horror">Horror</label>
                </div>
                <div className={s.input_container}>
                    <input name="category" id="drama" type="radio" />
                    <label htmlFor="drama">Drama</label>
                </div>
                <div className={s.input_container}>
                    <input name="category" id="comedy" type="radio" />
                    <label htmlFor="comedy">Comedy</label>
                </div>
            </div>
        </div>
    );
}

export default Buttons;