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
                onClick={(e) => {
                    e.preventDefault()
                    setActive(!active)
                }}
                onSelectS
                className={styles.footer}>
                <div
                    onClick={e => e.preventDefault()}
                    className={styles.footer__wrapper}>
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
    );
};

export default SmallProject;