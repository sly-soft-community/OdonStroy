'use client'
import React, { useState } from 'react';
import styles from './ReviewsCard.module.scss'
import Image from "next/image";
import Button from '@/components/Button/Button';

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
            <Button type="readMore" onClick={() => setActive(!item.active)}>
                {item.active ? 'Скрыть'
                    : 'Читать дальше'}
            </Button>

            <div className={item.active ?
                `${styles.slide__popFilter} ${styles.active}`
                : styles.slide__popFilter} />
        </div>
    );
};

export default ReviewsCard;