import React from 'react';
import styles from "./LargeProject.module.scss";
import Image from 'next/image';
import projectsLarge from '@/media/img/projects/projectsLarge.png'
import icon from '@/media/icons/ServiceArrow.svg'
const LargeProject = () => {
    return (
        <div className={styles.card}>
            
            <Image 
            src={projectsLarge} 
            alt="" 
            className={styles.img} 
            />
            {/* <div className={styles.card__text}><div className={styles.card__textWrapper}>{value}</div></div> */}
            <div className={styles.footer}>
                <div className={styles.title}>
                    АЗС Балыкчи Bishkek Petroleum
                </div>
                <Image
                    src={icon}
                    alt="icon"
                    className={styles.arrow}
                />
                
            </div>
        </div>
    );
};

export default LargeProject;