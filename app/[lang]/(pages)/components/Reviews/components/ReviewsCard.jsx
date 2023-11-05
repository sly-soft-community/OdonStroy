'use client'
import React, { useState } from 'react';
import styles from './ReviewsCard.module.scss'
import Image from "next/image";

const ReviewsCard = ({ item, setActive }) => {
    return (
        <div className={styles.slide}>
            <div className={styles.slide__header}>
                <Image
                    src={item.img}
                    alt="partner image"
                    className={styles.slide__img}
                />
                <div className={styles.slide__title}>{item.title}</div>
                <div className={styles.slide__subtitle}>{item.sub_title}</div>
            </div>
            <p className={styles.slide__text}>
                {item.text}
            </p>
            <button onClick={() => setActive(!item.active)}
                className={styles.slide__btn}> {item.active ? 'Скрыть'
                    : 'Читать дальше'}</button>
            <div className={item.active ?
                `${styles.slide__popFilter} ${styles.active}`
                : styles.slide__popFilter} />
        </div>
    );
};

export default ReviewsCard;