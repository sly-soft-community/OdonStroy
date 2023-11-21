import React from 'react';
import styles from "./AboutBar.module.scss"
import Image from 'next/image';
import img1 from '@/media/img/home/About-img-1.png'
import img2 from '@/media/img/home/About-img-2.png'
import img3 from '@/media/img/home/About-img-3.png'
import img4 from '@/media/img/home/About-img-4.png'

const AboutBar = ({dictionary}) => {
    const data = [
        {value: dictionary['about-us']['years-of-experience'], img: img1},
        {value: dictionary['about-us']['quality-price-balance'], img: img2},
        {value: dictionary['about-us']['highly-qualified-staff'], img: img3},
        {value: dictionary['about-us']['operative-response'], img: img4},
    ]
    return (
        <div className={`${styles.box} container`} >
            {data.map((item, i) =>
                <div key={i} className={styles.item}>
                    <div className={styles.item__imgBox}>
                        <Image src={item.img} alt="" className={styles.item__img} />
                    </div>
                    <div className={styles.item__text}>{item.value}</div>
                </div>
            )}
        </div>
    );
};

export default AboutBar;
