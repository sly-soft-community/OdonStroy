'use client'
import React, {useRef, useCallback} from 'react';
import styles from "./TypesOfEquipmentSection.module.scss"
import Image from 'next/image'
import img1 from "@/media/img/home/equipment-img-1.png"
import img2 from "@/media/img/home/equipment-img-2.png"
import img3 from "@/media/img/home/equipment-img-3.png"
import img4 from "@/media/img/home/equipment-img-4.png"
import img5 from "@/media/img/home/equipment-img-5.png"
import img6 from "@/media/img/home/equipment-img-6.png"
import img7 from "@/media/img/home/equipment-img-7.png"
import img8 from "@/media/img/home/equipment-img-8.png"
import img9 from "@/media/img/home/equipment-img-9.png"
import arow from "@/media/icons/arow.svg"
import EquipmentSlide from './EquipmentSlide/EquipmentSlide';

import {Swiper, SwiperSlide} from 'swiper/react'
import {Navigation, Pagination, Virtual} from 'swiper'
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
import {useState} from 'react';


const TypesOfEquipmentSection = ({dictionary}) => {

    // const partnerSliderRef = useRef(null)
    const equipmentSliderRef = useRef(null)

    const data = [
        {
            title: dictionary['medical-equipment']['subtitle-1'],
            text: dictionary['medical-equipment']['text-1'],
            img: img1
        },
        {
            title: dictionary['medical-equipment']['subtitle-2'],
            text: dictionary['medical-equipment']['text-2'],
            img: img2
        },
        {
            title: dictionary['medical-equipment']['subtitle-3'],
            text: dictionary['medical-equipment']['text-3'],
            img: img3
        },
        {
            title: dictionary['medical-equipment']['subtitle-4'],
            text: dictionary['medical-equipment']['text-4'],
            img: img4
        },
        {
            title: dictionary['medical-equipment']['subtitle-5'],
            text: dictionary['medical-equipment']['text-5'],
            img: img5
        },
        {
            title: dictionary['medical-equipment']['subtitle-6'],
            text: dictionary['medical-equipment']['text-6'],
            img: img6
        },
        {
            title: dictionary['medical-equipment']['subtitle-7'],
            text: dictionary['medical-equipment']['text-7'],
            img: img7
        },
        {
            title: dictionary['medical-equipment']['subtitle-8'],
            text: dictionary['medical-equipment']['text-8'],
            img: img8
        },
        {
            title: dictionary['medical-equipment']['subtitle-9'],
            text: dictionary['medical-equipment']['text-9'],
            img: img9
        },
    ]

    const [actualSlide, setActualSlide] = useState(1)
    const handlePrev = useCallback(sliderRef => {
        if (!sliderRef.current) return
        sliderRef.current.swiper.slidePrev()
    }, [])

    const handleNext = useCallback(sliderRef => {
        if (!sliderRef.current) return
        sliderRef.current.swiper.slideNext()
    }, [])
    return (
        <section id='equipment' className={`${styles.section} container`}>
            <div className={styles.header}>
                <div className={styles.header__greyBox_sm}>
                    <div className={styles.header__whiteBox_sm}></div>
                </div>
                <h3 className={styles.header__title}>{dictionary['medical-equipment']['title']}</h3>
                <div className={styles.header__greyBox_1}>
                    <div className={styles.header__whiteBox_1}></div>
                </div>
                <div className={styles.header__greyBox_2}>
                    <div className={styles.header__whiteBox_2}></div>
                </div>
            </div>
            <div className={styles.slide__wrapper}>
                <div className={styles.slideCounter}>
                    <span className={styles.slideCounter__actual}>{actualSlide}</span>
                    <span className={styles.slideCounter__separator}>/</span>
                    <span className={styles.slideCounter__total}>{data.length}</span>
                </div>
                <div className={styles.slide__grayBox}></div>
                <Swiper
                    grabCursor={false}
                    ref={equipmentSliderRef}
                    allowTouchMove={true}
                    breakpoints={{
                        1024: {
                            slidesPerView: 1,
                        },
                    }}
                    loop={false}
                    className="serviceSlider"
                    onSlideChange={(e) => {
                        setActualSlide(e.activeIndex + 1)
                    }}
                >


                    {data.map((slide, key) =>
                        <SwiperSlide key={key}>
                            <div className={styles.slide}>
                                <EquipmentSlide {...slide} />
                                <div className={styles.slide__transparentBox} />
                            </div>
                        </SwiperSlide>
                    )}

                </Swiper>
                <div
                    className={`arrow arrow_prev ${styles.sliderArrow}`}
                    onClick={() => handlePrev(equipmentSliderRef)}>
                    <Image src={arow} alt="image" className={styles.sliderArrow__prev} />
                </div>
                <div
                    className={`arrow arrow_next ${styles.sliderArrow}`}
                    onClick={() => handleNext(equipmentSliderRef)}>
                    <Image src={arow} alt="image" className={styles.sliderArrow__next} />
                </div>
            </div>
        </section>
    );
};

export default TypesOfEquipmentSection;