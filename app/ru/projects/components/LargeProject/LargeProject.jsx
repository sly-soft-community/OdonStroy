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
            <div onClick={(e) => {
                setActive(!active)
                e.preventDefault()
            }}>
                <div onClick={e => e.preventDefault()} className={styles.footer}>
                    <div className={styles.footer__wrapper}>
                        <div
                            onClick={e => e.preventDefault()}
                            className={styles.title}>
                            {active ? 'Свернуть' : title}
                        </div>
                        <Image
                            onClick={e => e.preventDefault()}
                            src={icon}
                            alt="icon"
                            className={active ?
                                `${styles.arrow} ${styles.active}` :
                                styles.arrow
                            }
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default LargeProject;