import React from 'react';
import styles from "./HeroSlide.module.scss"

const HeroSlide = ({ text }) => {
    return (
        <div className={styles.slide}>
            <div className={styles.slide__contant}>
                {text}
            </div>
        </div>
    );
};

export default HeroSlide;