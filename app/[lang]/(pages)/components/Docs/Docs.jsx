import React from 'react';
import styles from "./Docs.module.scss"
import Image from "next/image";
import img1 from '@/media/img/docs/docs_1.png'
import img2 from '@/media/img/docs/docs_2.png'

const Docs = () => {
    return (
        <section id='service' className={`${styles.section} container`}>
            <div className={styles.header}>
                <h2 className='title'>Лицензии и документы</h2>
            </div>
            <div className={`${styles.contant}`}>
                <Image
                    src={img1}
                    alt="partner image"
                    className={styles.img}
                />
                <Image
                    src={img2}
                    alt="partner image"
                    className={styles.img}
                />
            </div>

        </section>
    );
};

export default Docs;