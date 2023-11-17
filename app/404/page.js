import React from 'react';
import styles from "../global-error.module.scss";
import Image from 'next/image'
import error from '@/media/img/error.svg'
import Header from "../[lang]/components/Header/Header";
import Footer from "../[lang]/components/Footer/Footer";
import "../[lang]/globals.scss";

export async function generateMetadata({ params: { lang } }) {
    return {
        title: "Одон Строй | Не найдена",
        description: "Одон Строй | Строительство зданий из металлоконструкций ✅Лицензированная компания✅Гарантия на обслуживание⚡️Получите консультацию на сайте",
        alternates: {
            languages: {
                "x-default": "/",
                ru: "/ru",
                en: "/en",
            },
        },
    };
}

export default async function NotFound() {
    const tilte = 'Упс… Страница не найдена'
    const desciption = 'Ой! Кажется, вы потерялись на стройплощадке. Но не волнуйтесь, вы можете вернуться на главную страницу или связаться с нами.'

    

    return (
        <div>
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

                                    <button  className={styles.btnBox__catalog}>
                                        На главную страницу
                                    </button>
                                    <button  className={styles.btnBox__mainPage}>
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
            <Footer />
        </div>


    );
};