import React from 'react';
import styles from "./ReviewsBlock.module.scss";
import Image from "next/image";

const ReviewsBlock = ({ item }) => {
    return (
        <div className={styles.box}>
            <div className={styles.imgWrapper}>
                <Image
                    src={item.img}
                    alt="partner image"
                    className={styles.img}
                />
            </div>
            <div className={styles.contant}>
                <h4 className={styles.title}>{item.title}</h4>
                <div className={styles.subtitle}>{item.sub_title}</div>
                {item.text.map((item, i) =>
                    <p key={i} className={styles.text}>
                        {item}
                    </p>)}
            </div>
        </div>
    );
};

export default ReviewsBlock;