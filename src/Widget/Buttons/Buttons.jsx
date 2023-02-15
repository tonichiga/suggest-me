import React from 'react';
import styles from './Buttons.module.css'
function Buttons() {
    return (
        <div className={styles.position}>
            <div className={styles.button}>
                <button>Any</button>
                <button>Action</button>
                <button>Horror</button>
                <button>Drama</button>
                <button>Comedy</button>
            </div>
        </div>
    );
}

export default Buttons;