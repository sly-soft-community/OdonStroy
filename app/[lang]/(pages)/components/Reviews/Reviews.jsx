'use client'
import React from 'react';
import styles from "./Reviews.module.scss"
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
import img1 from '@/media/img/review/review_1.png'
import img2 from '@/media/img/review/review_2.png'
import img3 from '@/media/img/review/review_3.png'
import img4 from '@/media/img/review/review_4.png'
import img5 from '@/media/img/review/review_5.png'

import Image from "next/image";



const Reviews = () => {
    const data = [
        {
            img: img1,
            title: 'Газпром социальные инициативы',
            sub_title: 'Приймак Владимир Викторович, ген. директор',
            text: 'Уважаемый Эдуард Бейсембекович! От лица Фонда поддержки социальных инициатив Газпрома и от себя лично выражаю Вам и всем работникам ОсОО «Одон-строй» благодарность за строительство физкультурно-оздоровительного комплек ...'
        },
        {
            img: img2,
            title: 'Металлопрокатный завод  им. М. В. Фрунзе',
            sub_title: 'Хван Денис Анотольевич, ген.директор',
            text: 'От лица коллектива ОсОО «Металлопрокатный завод им.М.В.Фрунзе» и от себя лично выражаю Вам искреннюю благодарность за плодотворное сотрудничество. Мы искренне верим, что одним из условий успешного бизнеса ...'
        },
        {
            img: img3,
            title: 'KERAMA MARAZZI',
            sub_title: 'Сагындыкова Б. К., ген. директор',
            text: 'Официальный представитель KERAMA MARAZZI в Кыргызстане выражает глубокую признательность и искреннюю благодарность за активное и плодотворное сотрудничество ОсОО "Одон- Строй". Пусть успех и процветание сопутствуют Вашей ...'
        },
        {
            img: img4,
            title: 'МТУ №15, Первомайского района мэрии г. Бишкек',
            sub_title: 'М.Е.Токтоналиева, начальник МТУ №15',
            text: 'Уважаемый Эдуард Бейсембекович! От лица Фонда поддержки социальных инициатив Газпрома и от себя лично выражаю Вам и всем работникам ОсОО «Одон-строй» благодарность за строительство физкультурно-оздоровительного компле...'
        },

    ]
    return (
        <section className={styles.section} >
            <h2 className='title'>Отзывы</h2>
            <div className={`container ${styles.contant}`}>
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
                            slidesPerGroup: 2,
                            loop: true,
                        },
                        768: {
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                        },
                        992: {
                            slidesPerView: 2,
                            slidesPerGroup: 3,
                        },
                        1290: {
                            slidesPerView: 3,
                            slidesPerGroup: 4,
                        },
                    }}
                    className="serviceSlider"

                >
                    <div className={styles.sliderWrapper}>
                        {data.map((item, i) =>
                            <SwiperSlide key={i}>
                                <div className={styles.slide}>
                                    <div className={styles.slide__header}>
                                        <Image
                                            src={item.img}
                                            alt="partner image"
                                            className={styles.slide__img}
                                        />
                                        <div className={styles.slide__title}>{item.title}</div>
                                        <div className={styles.slide__subtitle}>{item.sub_title}</div>
                                    </div>
                                    <p className={styles.slide__text}>
                                        {item.text}
                                    </p>
                                    <button className={styles.slide__btn}>Читать дальше</button>
                                </div>
                            </SwiperSlide>
                        )}
                    </div>

                </Swiper>
            </div>
        </section>
    );
};

export default Reviews;