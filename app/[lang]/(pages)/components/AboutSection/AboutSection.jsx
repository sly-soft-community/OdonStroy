import React from 'react';
import styles from "./AboutSection.module.scss"
import Image from 'next/image'
import img from "@/media/img/home/AboutImage.png"

const AboutSection = ({dictionary}) => {
    const contant = [
        {data: dictionary['about-us']['text-1']},
        {data: dictionary['about-us']['text-2']},

    ]

    return (
        <section id='about' className={`${styles.section} container`}>
            <div className={styles.header}>
                <div className={styles.header__greyBox_sm}>
                    <div className={styles.header__whiteBox_sm}></div>
                </div>
                <h3 className={styles.header__title}>{dictionary['about-us']['about-us']}</h3>
                <div className={styles.header__greyBox}>
                    <div className={styles.header__whiteBox}></div>
                </div>
            </div>
            <div className={styles.contant}>
                <div className={styles.col}>
                    <div className={styles.contant__discr}>{dictionary['about-us']['subtitle']}</div>
                    <div className={styles.contant__text}>
                        <p>{contant[0].data}</p>
                        <p>
                            {contant[1].data}
                        </p>
                    </div>

                </div>
                <div className={styles.imgBox}>
                    <Image src={img} alt="image" className={styles.contant__img} />
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
