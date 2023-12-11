import React from 'react';
import styles from "./SmallProject.module.scss";
import Image from 'next/image';
// import projectsSmall1 from '@/media/img/projects/projectsSmall1.png'
import icon from '@/media/icons/ServiceArrow.svg'
const SmallProject = ({ title, image }) => {
    return (
        <div className={styles.card}>

            <Image
                src={image}
                alt=""
                className={styles.img}
            />
            {/* <div className={styles.card__text}><div className={styles.card__textWrapper}>{value}</div></div> */}
            <div className={styles.footer}>
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