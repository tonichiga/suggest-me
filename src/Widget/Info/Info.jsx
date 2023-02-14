import React from 'react';
import styles from './Info.module.css'
function Info() {
    return (
        <div className={styles.position}>
            <h1 className={styles.h1}>Suggest.me </h1>
                    <div className={styles.p1}>
                        <p>Discover new and exciting movies with Suggest.me!</p>

                        <p>Our platform generates a personalized list of films for you to enjoy, making it easy to find your next favorite.</p>

                        <p>Give it a try and see what the algorithm suggests for you 😉</p>
                    </div>
        </div>
    );
}

export default Info;