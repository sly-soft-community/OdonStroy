'use client'
import React from 'react';
import styles from "./Partners.module.scss"

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Virtual } from 'swiper'
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
import img1 from '@/media/img/partner/Partner_1.png'
import img2 from '@/media/img/partner/Partner_2.png'
import img3 from '@/media/img/partner/Partner_3.png'
import img4 from '@/media/img/partner/Partner_4.png'
import img5 from '@/media/img/partner/Partner_5.png'
import img6 from '@/media/img/partner/Partner_6.png'
import img7 from '@/media/img/partner/Partner_7.png'
import img8 from '@/media/img/partner/Partner_8.png'
import img9 from '@/media/img/partner/Partner_9.png'
import img10 from '@/media/img/partner/Partner_10.png'
import Image from "next/image";

const Partners = () => {
    const pagination = {
        clickable: true,
        // el: <div className = {styles.custom}> </div>,
        renderCustom: function (swiper, current, total) {
            return current + ' of ' + total;
        },
        renderBullet: function (index, className) {
            return '<span class=" mySwiper ' + className + '">' + '' + '</span>'
        },
    }
    const data = [
        {
            img1: img1,
            img2: img2,
        },
        {
            img1: img3,
            img2: img4,
        },
        {
            img1: img5,
            img2: img6,
        },
        {
            img1: img7,
            img2: img8,
        },
        {
            img1: img9,
            img2: img10,
        },

    ]
    return (
        <section className={styles.section} >
            <h2 className='title'>Наши партнеры</h2>
            <div className={`${styles.contant}`}>
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
                        992: {
                            slidesPerView: 3,
                            slidesPerGroup: 3,
                        },
                        1290: {
                            slidesPerView: 5,
                            slidesPerGroup: 4,
                        },
                    }}
                    className="partnerSlider"
                    modules={[Pagination, Navigation, Virtual]}
                    pagination={pagination}
                >
                    <div className={styles.sliderWrapper}>
                        {data.map((item, i) =>
                            <SwiperSlide key={i}>
                                <div className={styles.slide}>
                                    <div className={styles.imgBox}>
                                        <Image
                                            src={item.img1}
                                            alt="partner image"
                                            className={styles.slide__img}
                                        />
                                    </div>
                                    <div className={styles.imgBox}>
                                        <Image
                                            src={item.img2}
                                            alt="partner image"
                                            className={styles.slide__img}
                                        />
                                    </div>
                                </div>
                            </SwiperSlide>
                        )}
                    </div>

                </Swiper>
            </div>
        </section>
    );
};

export default Partners;