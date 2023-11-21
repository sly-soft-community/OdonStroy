'use client'
import React from "react";
import styles from "./ServiceCard.module.scss";
import Image from "next/image";
import icon from '@/media/icons/simple-arrow.svg'
import {useState} from "react";

const ServiceCard = ({img, value, dictionary}) => {
    const [open, setOpen] = useState(false)
    return (
        <div onClick={() => {
            setOpen(prev => !prev)
        }} className={open ? `${styles.card} ${styles.open}` : styles.card}>
            <Image src={img} alt="img" className={styles.card__img} />
            <div className={styles.card__text}>{value}</div>
            <div className={styles.card__popFilter_1} />
            <div className={styles.card__popFilter_2} />
            <a href='#feedback' className={styles.card__popBox}>{dictionary['services']['get-advice']}</a>
            <div className={styles.card__iconWrapper}>
                <Image
                    src={icon}
                    alt="icon"
                    className={styles.card__icon}
                />
            </div>
        </div>
    );
};

export default ServiceCard;
