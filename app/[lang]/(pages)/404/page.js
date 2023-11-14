import React from 'react';
import styles from "./page.module.scss";
import Image from 'next/image'
import error  from '@/media/img/error.svg'

const page = ({
    tilte = 'Упс… Страница не найдена',
    desciption = 'Ой! Кажется, вы потерялись на стройплощадке. Но не волнуйтесь, вы можете вернуться на главную страницу или связаться с нами.',
    buttons = [
        { title: 'На главную страницу', href: '/' },
        { title: 'Свяжитесь с нами', href: '/contact' },
    ]
}) => {

    return (


        <div className={styles.backgroundWrapper}>
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.errorDiscription}>
                    <div className={styles.box}>
                        <h1 className={styles.h1}>{tilte}</h1>
                        <div className={styles.description}>
                            {desciption}
                        </div>
                        <div className={styles.btnBox}>
                            {buttons.map((item, i) =>
                                <button
                                    onClick
                                    key={i} className={styles.btnBox__catalog}>{item.title}</button>
                            )}
                        </div>
                    </div>
                </div>
                <div>
                <Image src={error} alt="" className={styles.contactItem} />
                </div>
            </div>

        </div>
        </div>
    );
};

export default page;