'use client'
import React from 'react';
import styles from "./Services.module.scss"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination, Virtual } from 'swiper'
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
import ServiceCard from './ServiceCard/ServiceCard';

import img1 from '@/media/service/service-card-1.png'
import img2 from '@/media/service/service-card-2.png'
import img3 from '@/media/service/service-card-3.png'
import img4 from '@/media/service/service-card-4.png'

const Services = ({ dictionary, goToContact }) => {
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
            value: 'Строительство промышленных объектов',
            img: img1,
            contant: {
                title: 'Строительство промышленных объектов',
                text: '«Одон-строй» обеспечивает создание любых комплексов с нулевого цикла в сжатые сроки: ангары, склады, холодильные помещения, фруктохранилища, заводы, фабрики и цеха.'
            }
        },
        {
            value: 'Взрывопожароопасное строительство',
            img: img2,
            contant: {
                title: 'Взрывопожароопасное строительство',
                text: 'Возведение взрывопожароопасных сооружений – одно из направлений нашей деятельности. Благодаря доскональному знанию требований, предъявляемых к зданиям такого типа, материалов и технологий, которые используются в процессе строительства, мы возводим: АЗС (автозаправочные станции), АГЗС (автогазозаправочные станции), газовые сети среднего и низкого давления и замерные узлы.'
            }
        },
        {
            value: 'Гражданское строительство',
            img: img3,
            contant: {
                title: 'Гражданское строительство',
                text: 'Мы готовы предложить Вам самые эффективные и инновационные решения, создавая для Вас комфортные условия: ФОК (Физкультурно-оздоровительные комплексы), реконструкции и капитальный ремонт офисных и жилых строений, стадионы'
            }
        },
        {
            value: 'Аренда спецтехники и оборудования',
            img: img4,
            contant: {
                title: 'Аренда спецтехники и оборудования',
                text: 'Эксплуатирование старого помещения можно продолжить, если вернуть строению утраченный вид с помощью профессиональной реконструкции. Вне зависимости от ваших целей (построение нового или восстановление уже построенного), мы предоставляем качественную технику в аренду: Автокран, Экскаватор, Бульдозер, Каток, Автовышка, Миксер, Бетонная помпа, Самосвал и т.д.'
            }
        },
    ]

    return (
        <div className={styles.sectionWrapper}>
            <section id='service' className={`${styles.section}`}>
                <div className="container">
                    <div className={styles.header}>
                        <h2 className={styles.header__title}>Услуги которые мы предоставляем</h2>
                    </div>
                    <div className={`${styles.contant} container`}>
                        <Swiper
                            grabCursor={false}
                            allowTouchMove={true}
                            breakpoints={{
                                360: {
                                    slidesPerView: 1,
                                    slidesPerGroup: 1,
                                    spaceBetween: 15,
                                },
                                576: {
                                    slidesPerView: 2,
                                    slidesPerGroup: 2,
                                    spaceBetween: 15,
                                    loop: true,
                                },
                                768: {
                                    slidesPerView: 2,
                                    slidesPerGroup: 2,
                                    spaceBetween: 15,
                                },
                                992: {
                                    slidesPerView: 3,
                                    slidesPerGroup: 3,
                                    spaceBetween: 20,
                                },
                                1290: {
                                    slidesPerView: 4,
                                    slidesPerGroup: 4,
                                    spaceBetween: 20,
                                },
                            }}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false
                            }}
                            className="serviceSlider"
                            modules={[Pagination, Navigation, Virtual, Autoplay]}
                            pagination={pagination}
                        >
                            <div className={styles.sliderWrapper}>
                                {data.map((item, i) =>
                                    <SwiperSlide key={i}>
                                        <div className={styles.slide}>
                                            <ServiceCard goToContact={goToContact} dictionary={dictionary} {...item} />
                                        </div>
                                    </SwiperSlide>
                                )}
                            </div>

                        </Swiper>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;