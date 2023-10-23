'use client'
import React from 'react';
import styles from "./Clients.module.scss"
import {Swiper, SwiperSlide} from 'swiper/react'
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
import ClientsCard from './ClientsCard/ClientsCard';

import img1 from '@/media/img/home/client-img-1.png'
import img2 from '@/media/img/home/client-img-2.png'
import img3 from '@/media/img/home/client-img-3.png'
import img4 from '@/media/img/home/client-img-4.png'


const Clients = ({dictionary}) => {
    const data = [
        {img: img1},
        {img: img2},
        {img: img3},
        {img: img4},
    ]

    return (
        <section className={`${styles.section}`} >
            <div className={styles.header}>
                <div className={`${styles.header__whiteBox}`}>
                    <div className={`${styles.header__greyBox} ${styles.left}`}></div>
                </div>
                <h3 className={styles.header__title}>{dictionary['they-trust-us']['they-trust-us']}</h3>
                <div className={`${styles.header__whiteBox} ${styles.left}`}>
                    <div className={`${styles.header__greyBox} ${styles.right}`}></div>
                </div>
            </div>
            <div className={`${styles.content} container`}>
                <Swiper
                    grabCursor={false}
                    effect='creative'
                    allowTouchMove={true}
                    breakpoints={{
                        576: {
                            slidesPerView: 1,
                            loop: true,
                        },
                        768: {
                            slidesPerView: 2,
                        },
                        992: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    className="clientSlider"
                >
                    <div className={styles.sliderWrapper}>
                        {data.map((item, i) =>
                            <SwiperSlide key={i}>
                                <div className={styles.slide}>
                                    <ClientsCard {...item} />
                                </div>
                            </SwiperSlide>
                        )}
                    </div>

                </Swiper>
            </div>
        </section>
    );
};

export default Clients;