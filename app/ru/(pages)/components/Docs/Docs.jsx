'use client'
import React from 'react';
import styles from "./Docs.module.scss"
import Image from "next/image";
import img1 from '@/media/img/docs/docs_1.png'
import img2 from '@/media/img/docs/docs_2.png'
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

const Docs = () => {
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
    return (
        <div className={styles.sectionWrapper}>
            <section id='docs' className={`${styles.section} `}>
                <div className='container'>
                    <div className={styles.header}>
                        <h2 className='title'>Лицензии и документы</h2>
                    </div>
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
                                    slidesPerView: 1,
                                    slidesPerGroup: 1,
                                },
                                768: {
                                    slidesPerView: 2,
                                    slidesPerGroup: 2,
                                },
                                992: {
                                    slidesPerView: 2,
                                    slidesPerGroup: 2,
                                },
                                1290: {
                                    slidesPerView: 2,
                                    slidesPerGroup: 2,
                                },
                            }}
                            className="docsSlider"
                            modules={[Pagination, Navigation, Virtual]}
                            pagination={pagination}
                        >
                            <div className={styles.sliderWrapper}>

                                <SwiperSlide key={0}>
                                    <Image
                                        src={img1}
                                        alt="partner image"
                                        className={styles.img}
                                    />
                                </SwiperSlide>
                                <SwiperSlide key={1}>
                                    <Image
                                        src={img2}
                                        alt="partner image"
                                        className={styles.img}
                                    />
                                </SwiperSlide>

                            </div>
                        </Swiper>


                    </div>
                </div>
            </section>
        </div>
    );
};

export default Docs;