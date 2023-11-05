'use client'
import React from 'react';
import styles from "./Hero.module.scss"
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss'
import 'swiper/css/bundle'
import 'swiper/scss/a11y'
import 'swiper/scss/autoplay'
import 'swiper/scss/controller'
import 'swiper/scss/effect-coverflow'
import 'swiper/scss/effect-cube'
import 'swiper/scss/effect-fade'
import 'swiper/scss/effect-flip'
import 'swiper/scss/effect-creative'
import 'swiper/scss/effect-cards'
import 'swiper/scss/free-mode'
import 'swiper/scss/grid'
import 'swiper/scss/hash-navigation'
import 'swiper/scss/history'
import 'swiper/scss/keyboard'
import 'swiper/scss/manipulation'
import 'swiper/scss/mousewheel'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import 'swiper/scss/parallax'
import 'swiper/scss/scrollbar'
import 'swiper/scss/thumbs'
import 'swiper/scss/virtual'
import 'swiper/scss/zoom'
import 'swiper/react'
import HeroSlide from './ServiceCard/HeroSlide';
import Link from 'next/link';



const Hero = ({ dictionary }) => {

    const dataH = [
        { text: 'Лицензированная компания, работаем с 2012 года' },
        { text: 'Гибкие цены на услуги' },
        { text: 'Гарантия на обслуживание 730 дней' },
        { text: 'Строительство под ключ с бесплатным проектированием' }
    ]

    const infoArray = [
        { label: 'о нас', link: '#about' },
        { label: 'услуги', link: '#service' },
        { label: 'этапы работ', link: '#work' },
        { label: 'партнеры & отзывы', link: '#rewiev' },
        { label: 'лицензии и сертификаты', link: '#docs' },
        { label: 'оставьте заявку', link: '#contact' },
    ]

    return (
        <section className={styles.hero}>
            <div className={styles.wrapper}>
                <div className={`${styles.contant} container`}>
                    <div className={styles.message}>
                        <h2 className={styles.message__title}>Здания из металлоконструкций </h2>
                        <div className={styles.message__subtitle}>Ваши желания – наши задания.</div>
                    </div>
                    <div className={styles.sliderBox}>
                        <Swiper
                            grabCursor={false}
                            allowTouchMove={true}
                            breakpoints={{
                                360: {
                                    slidesPerView: 1,
                                    slidesPerGroup: 1,
                                },
                                576: {
                                    slidesPerView: 2,
                                    slidesPerGroup: 2,
                                    loop: true,
                                },
                                768: {
                                    slidesPerView: 2,
                                    slidesPerGroup: 2,
                                },
                                1024: {
                                    slidesPerView: 4,
                                    slidesPerGroup: 4,
                                },
                            }}
                        >
                            {dataH.map((item, i) =>
                                <SwiperSlide key={i}>
                                    <div className={i + 1 === dataH.length ? styles.slide_withoutBorder : styles.slide}>
                                        <HeroSlide {...item} />
                                    </div>
                                </SwiperSlide>
                            )}
                        </Swiper>

                    </div>
                </div>
            </div>
            <ul className={styles.infoList}>
                {infoArray.map((item, key) =>
                    <li key={key} className={styles.infoList__item}>
                        <Link className={styles.infoList__link} href={item.link}>{item.label}</Link>
                    </li>
                )}
            </ul>
            <div className={styles.hero__popFilter}></div>
        </section>

    );
};

export default Hero;