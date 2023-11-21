'use client'
import React from "react";
import styles from "./ServiceCard.module.scss";
import Image from "next/image";
import icon from '@/media/icons/ServiceArrow.svg'
import { useState } from "react";

const ServiceCard = ({ img, value, dictionary, contant = { title: "", text: '' } }) => {
    const [open, setOpen] = useState(false)
    return (
        <div onClick={() => {
            setOpen(prev => !prev)
        }} className={open ? `${styles.card} ${styles.open}` : styles.card}>
            <div className={styles.card__imgWrapper}>
                <Image src={img} alt="img" className={styles.card__img} />
            </div>
            <div className={styles.card__text}><div className={styles.card__textWrapper}>{value}</div></div>
            <div className={styles.card__popBox}>
                <div className={styles.popBox__contant}>
                    <div className={styles.popBox__title}>{contant.title}</div>
                    <div className={styles.popBox__text}>{contant.text}</div>
                </div>
                <div className={styles.popBox__footer}>
                    <button className={styles.popBox__btn}>Получить консультацию</button>
                </div>
            </div>
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
