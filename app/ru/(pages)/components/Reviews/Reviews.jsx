'use client'
import React, { useState } from 'react';
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
import imgFull_1 from '@/media/img/review/rewiveFull_1.png'
import imgFull_2 from '@/media/img/review/rewiveFull_2.png'
import imgFull_3 from '@/media/img/review/rewiveFull_3.png'
import imgFull_4 from '@/media/img/review/rewiveFull_4.png'
import ReviewsCard from "./components/ReviewsCard"
import ReviewsBlock from "./components/ReviewsBlock"
import { useTransition, animated } from '@react-spring/web'



const Reviews = () => {
    const [data, setData] = useState([
        {
            active: false,
            shortData: {
                img: img1,
                title: 'Газпром социальные инициативы',
                sub_title: 'Приймак Владимир Викторович, ген. директор',
                text: 'Уважаемый Эдуард Бейсембекович! От лица Фонда поддержки социальных инициатив Газпрома и от себя лично выражаю Вам и всем работникам ОсОО «Одон-строй» благодарность за строительство физкультурно-оздоровительного комплек ...'
            },
            fullDiscription: {
                hieght: 510,
                title: 'Газпром социальные инициативы',
                sub_title: 'Приймак Владимир Викторович, ген. директор',
                text: [
                    'Директору ОсОО «Одон-строй» Э.Б. Мухаметбаеву',
                    'Уважаемый Эдуард Бейсембекович! От лица Фонда поддержки социальных инициатив Газпрома и от себя лично выражаю Вам и всем работникам ОсОО «Одон-строй» благодарность за строительство физкультурно-оздоровительного комплекса в г. Бишкек, высокий профессионализм в выполнении поставленных задач. Мы желаем Вашей компании процветания, благополучия и новых Проектов в будущем!',
                    'С Уважением, Генеральный директор Фонда Приймак Владимир Викторович'
                ],
                img: imgFull_1,
            }
        },
        {
            active: false,
            shortData: {
                img: img2,
                title: 'Металлопрокатный завод  им. М. В. Фрунзе',
                sub_title: 'Хван Денис Анотольевич, ген.директор',
                text: 'От лица коллектива ОсОО «Металлопрокатный завод им.М.В.Фрунзе» и от себя лично выражаю Вам искреннюю благодарность за плодотворное сотрудничество. Мы искренне верим, что одним из условий успешного бизнеса ...'
            },
            fullDiscription: {
                hieght: 580,
                title: 'Металлопрокатный завод  им. М. В. Фрунзе',
                sub_title: 'Хван Денис Анотольевич, ген. директор',
                text: [
                    'Руководителю и коллективу ОсОО "Одон-строй"',
                    'От лица коллектива ОсОО «Металлопрокатный завод им.М.В.Фрунзе» и от себя лично выражаю Вам искреннюю благодарность за плодотворное сотрудничество. Мы искренне верим, что одним из условий успешного бизнеса является взаимодействие с надежными партнёрами, которые благодаря своему профессионализму и стремлению к самым высоким результатам, помогают решать важные и сложные задачи и, рука об руку, развиваясь и совершенствуясь, достигать поставленных целей. Мы уверены, что, работая с Вами, мы создаем прочную основу для прибыльного, взаимовыгодного бизнеса. Желаем Вам успешности и стабильности!',
                    'С искренней благодарностью, Генеральный директор Хван Денис Анатольевич'
                ],
                img: imgFull_3,
            }
        },
        {
            active: false,
            shortData: {
                img: img3,
                title: 'KERAMA MARAZZI',
                sub_title: 'Сагындыкова Б. К., ген. директор',
                text: 'Официальный представитель KERAMA MARAZZI в Кыргызстане выражает глубокую признательность и искреннюю благодарность за активное и плодотворное сотрудничество ОсОО "Одон- Строй". Пусть успех и процветание сопутствуют Вашей ...'
            },
            fullDiscription: {
                hieght: 510,
                title: 'KERAMA MARAZZI',
                sub_title: 'Сагындыкова Б. К., ген. директор',
                text: [
                    'Официальный представитель KERAMA MARAZZI в Кыргызстане выражает глубокую признательность и искреннюю благодарность за активное и плодотворное сотрудничество ОсОО "Одон- Строй". Пусть успех и процветание сопутствуют Вашей компании в достижении новых вершин в бизнесе!',
                ],
                img: imgFull_4,
            }

        },
        {
            active: false,
            shortData: {
                img: img4,
                title: 'МТУ №15, Первомайского района мэрии г. Бишкек',
                sub_title: 'М.Е.Токтоналиева, начальник МТУ №15',
                text: 'Уважаемый Эдуард Бейсембекович! От лица Фонда поддержки социальных инициатив Газпрома и от себя лично выражаю Вам и всем работникам ОсОО «Одон-строй» благодарность за строительство физкультурно-оздоровительного компле...'
            },
            fullDiscription: {
                hieght: 783,
                title: 'МТУ №15, Первомайского района мэрии г. Бишкек',
                sub_title: 'М.Е.Токтоналиева, начальник МТУ №15',
                text: [
                    'Уважаемый г-н Эдуард Бейсембекович.',
                    'Жители микрорайона «Достук», а также МТУ №15 выражаем огромную благодарность коллективу ОсОО «Одон-Строй» за высокое качество работ, с соблюдением сроков инвестиционной программы ОсОО «Газпром Кыргызстан» в рамках Соглашения между Правительством Российской Федерации и Правительством Кыргызской Республики «О сотрудничестве в сфере транспортировки, распределения и реализации природного газа на территории Кыргызской Республики». Строительство распределительной сети по 22 населенным пунктам в зоне ответственности филиала «Бишкекгаз» ОсОО «Газпром Кыргызстан»',
                    'Также хотим выразить слова благодарности подрядчику ОсОО «Одон-строй» за сохранение асфальтового покрытия двух улиц, являющихся основными транспортными артериями микрорайона, в ходе строительства газопровода протяженностью трех километров. А также отремонтирована грунтовая дорога протяженностью 250 метров. Необходимо отметить, что все работа выполнены добросовестно и за короткий срок. Желаем успехов в работе ОсОО «Одон-строй», процветания и финансового благополучия! Хотелось и в дальнейшем сотрудничать с Вашей организацией.'
                ],
                img: imgFull_2,
            }
        },
    ])
    const [view, setView] = useState({ view: false, hieght: 0 })
    const activeHandler = (state, key) => {
        let newState = [...data]
        newState = newState.map(item => ({ ...item, active: false }))
        newState[key].active = state
        setView({ view: state, hieght: newState[key].fullDiscription.hieght })
        setData(newState)
    }
    const transition = useTransition(data, {
        trail: 60,
        from: { opacity: 0, scale: 0 },
        enter: { opacity: 1, scale: 1 },
        leave: { opacity: 0, scale: 0 },
    })


    return (
        <section id = 'rewiev' className={styles.section} >
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
                                <ReviewsCard setActive={(state) => activeHandler(state, i)} item={{ ...item.shortData, active: item.active }} />
                            </SwiperSlide>
                        )}
                    </div>
                </Swiper>
                <div
                    style={{ '--height': `${view.hieght}px` }}
                    className={view.view ? `${styles.viewBox} ${styles.active}`
                        : styles.viewBox}>
                    {
                        transition((style, item) => (
                            <animated.div
                                style={{
                                    ...style,
                                }}
                                className={styles.item}
                            >
                                {item.active ? <ReviewsBlock item={item.fullDiscription} /> : <div></div>}
                            </animated.div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Reviews;