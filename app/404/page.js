import React from 'react';
import styles from "../global-error.module.scss";
import Image from 'next/image'
import error from '@/media/img/error.svg'
import Header from "../ru/components/Header/Header";
import Footer from "../ru/components/Footer/Footer";
import "../ru/globals.scss";
import Link from 'next/link';

export async function generateMetadata({ params: { lang } }) {
    return {
        title: "Одон Строй | Не найдена",
        description: "Одон Строй | Строительство зданий из металлоконструкций ✅Лицензированная компания✅Гарантия на обслуживание⚡️Получите консультацию на сайте",
    };
}

export default function page() {
    const tilte = 'Упс… Страница не найдена'
    const desciption = 'Ой! Кажется, вы потерялись на стройплощадке. Но не волнуйтесь, вы можете вернуться на главную страницу или связаться с нами.'



    return (
        <div className={styles.page}>
            <Header
                isFirstBlock={true}
            />
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
                                    <Link href={'/ru'}>
                                        <button className={styles.btnBox__catalog}>
                                            На главную страницу
                                        </button>
                                    </Link>
                                    <Link href={'/ru/contact'}>
                                        <button className={styles.btnBox__mainPage}>
                                            Свяжитесь с нами
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Image src={error} alt="" className={styles.errorImg} />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>


    );
};
