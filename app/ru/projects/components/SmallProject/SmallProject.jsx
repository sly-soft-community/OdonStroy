import React from 'react';
import styles from "./SmallProject.module.scss";
import Image from 'next/image';
import icon from '@/media/icons/ServiceArrow.svg'
const SmallProject = ({ title, image, setActive, active }) => {
    return (
        <div className={styles.card}>

            <Image
                src={image}
                alt=""
                className={styles.img}
            />
            <div
                onClick={() => setActive(!active)}
                className={styles.footer}>
                <div className={styles.footer__wrapper}>
                    <div className={styles.title}>
                        {title}
                    </div>
                    <Image
                        src={icon}
                        alt="icon"
                        className={styles.arrow}
                    />
                </div>

            </div>
        </div>
    );
};

export default SmallProject;