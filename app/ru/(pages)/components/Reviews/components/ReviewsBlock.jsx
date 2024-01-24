import React from 'react';
import styles from "./ReviewsBlock.module.scss";
import Image from "next/image";
import Button from '@/components/Button/Button';

const ReviewsBlock = ({ item, setActive }) => {
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
            {/* <button onClick={() => setActive(false)} className={styles.btn}>
                Скрыть
            </button> */}
            <Button type="readMore" onClick={() => setActive(false)}>
                Скрыть
            </Button>

        </div>
    );
};

export default ReviewsBlock;