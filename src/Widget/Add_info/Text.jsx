import React from 'react';
import styles from './Text.module.scss';

const Text = () => {
    return (
        <div className={styles.all}>
            <h3 className={styles.h3}>Our new work</h3>
            <div className={styles.p}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet diam orci.
                    Fusce non ipsum arcu. Quisque at libero.</p>
        </div>
        </div>
        );
}
export default Text;