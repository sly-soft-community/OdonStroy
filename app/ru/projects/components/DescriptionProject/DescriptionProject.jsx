import React, { useRef } from 'react';
import styles from "./DescriptionProject.module.scss";
import Image from 'next/image';

import leftArrow from './leftArrow.svg'
import rightArrow from './rightArrow.svg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
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
import LoadingImage from '@/components/LoadingImg/LoadingImg';

const DescriptionProject = ({ project, style, isActive }) => {
    const swiperRef = useRef(null);
    const goNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };
    const goPrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };


    return (
        <div style={style} className={isActive ? `${styles.wrapper} ${styles.active}` : styles.wrapper}>
            <div className={styles.contentBox} >
                <h1 className={styles.title}>{project.title}</h1>
                <div className={style.textBox}>
                    {project.projectDetail.text.map((item, i) =>
                        <p key={i} className={styles.description}>
                            {item}
                        </p>
                    )}
                </div>

                <div className={project.projectDetail.itemProjects.length === 3 ?
                    styles.itemBox : styles.itemBox2}>
                    {project.projectDetail.itemProjects.map((item, i) =>
                        <div key={i}>
                            <div className={styles.item}>{item.label}</div>
                            <div className={styles.info}>{item.value}{item.unitMash}</div>
                        </div>
                    )}

                </div>
            </div>
            <div className={styles.sliderBox}>
                <div onClick={goPrev} className={styles.btn}>
                    <Image
                        src={leftArrow}
                        alt="Prev slide" />
                </div>
                <Swiper
                    ref={swiperRef}
                    loop={true}

                    className={styles.slider}
                >
                    {project.projectDetail.sliderImages.length ?
                        project.projectDetail.sliderImages.map(
                            (imageSrc, index) => (
                                <SwiperSlide
                                    key={index}>
                                    <LoadingImage
                                        src={imageSrc}
                                        alt="sliderImages"
                                        className={styles.image} />
                                </SwiperSlide>
                            ))
                        :
                        <SwiperSlide
                            key={1}>
                            <div className={styles.placeholder}>
                            </div>
                        </SwiperSlide>

                    }
                </Swiper>

                <div onClick={goNext} className={styles.btn}>
                    <Image
                        src={rightArrow}
                        alt="Next slide" />
                </div>
            </div>
        </div>
    );
};

export default DescriptionProject;