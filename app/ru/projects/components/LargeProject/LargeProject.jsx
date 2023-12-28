import React, { useState } from 'react';
import styles from "./LargeProject.module.scss";
import Image from 'next/image';
import icon from '@/media/icons/ServiceArrow.svg'
const LargeProject = ({ title, image, style, active, setActive }) => {

    return (
        <div style={style} className={styles.card}>
            <Image
                src={image}
                alt=""
                className={styles.img}
            />
            <div onClick={() => setActive(!active)}>
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
        </div>
    );
};

export default LargeProject;