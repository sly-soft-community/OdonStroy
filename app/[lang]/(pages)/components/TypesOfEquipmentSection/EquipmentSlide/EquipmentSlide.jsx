import React from 'react';
import styles from "./EquipmentSlide.module.scss"
import Image from 'next/image'


const EquipmentSlide = ({img, title, text}) => {
    return (
        <div className={styles.contant}>
            <div className={styles.col}>
                <div className={styles.contant__discr}>{title}</div>
                <div className={styles.contant__text}>
                    <p>{text}</p>
                </div>
            </div>
            <div className={styles.contant__imgBox}>
                <Image src={img} alt="image" className={styles.contant__img} />
            </div>
        </div>
    );
};

export default EquipmentSlide;