import React from 'react';
import styles from "./page.module.scss";
import Image from 'next/image'
import error from '@/media/img/error.svg'

const page = ({
    tilte = 'Упс… Страница не найдена',
    desciption = 'Ой! Кажется, вы потерялись на стройплощадке. Но не волнуйтесь, вы можете вернуться на главную страницу или связаться с нами.',
   
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
                                
                                    <button onClick className={styles.btnBox__catalog}>
                                            На главную страницу
                                    </button>
                                    <button onClick className={styles.btnBox__mainPage}>
                                            Свяжитесь с нами
                                    </button>
                                
                            </div>
                        </div>
                    </div>
                    <div>
                        <Image src={error} alt="" className={styles.errorImg} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;