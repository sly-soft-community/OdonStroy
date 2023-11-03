import React from 'react';
import styles from "./StagesOfWork.module.scss"

const StagesOfWork = () => {
    const data = [
        { text: 'Сбор документации и создание проекта' },
        { text: 'Сбор документации и создание проекта' },
    ]

    return (
        <section className={styles.section} >
            <h2 className={styles.title}>Этапы работы</h2>
            <div className={styles.contantBox}>
                {data.map((item, key) =>
                    <div key={key} className={styles.item}>

                        <div className={styles.triangle}></div>
                        <svg style={{ visibility: 'hidden', position: 'absolute' }} width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
                            <defs>
                                <filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
                                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                                    <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                                </filter>
                            </defs>
                        </svg>
                        <div className={styles.text}>
                            {item.text}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default StagesOfWork;