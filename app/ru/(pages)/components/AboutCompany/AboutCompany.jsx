import React, { useEffect, useRef } from 'react';
import styles from './AboutCompany.module.scss';
import img from '@/media/img/about/AboutImg.png'
import img_md from '@/media/img/about/AboutImg__md.png'
import Image from "next/image";
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor';

const AboutCompany = () => {

    const tileData = [
        [
            {
                title: {
                    number: 11,
                    text: 'год на рынке'
                },
                text: 'Благодаря многолетнему труду мы не только построили огромное количество недвижимости на трерритории КР, но и создали прочные связи с международными партнерами в смежных сферах.'
            },
            {
                title: {
                    number: 37,
                    text: 'реализованных объекта'
                },
                text: 'Грамотное планирование, организация и полноэтапный контроль — вот секрет нашего успеха!'
            },
        ],
        [
            {
                title: {
                    number: 65240,
                    text: 'застроенных м2'
                },
                text: 'Мы курируем полный цикл проектирования, что помогает нам оставаться одними из лидеров строительного рынка КР.'
            },
            {
                title: {
                    number: 30,
                    text: 'лет гарантии'
                },
                text: 'В нашу компетенцию входит не только надзор над правильным использованием строительного оборудования, но и оценка качества проведенных работ!'
            },
        ],
    ]

    return (
        <section className={`${styles.section}`}>
            <h2 id='title' className={styles.title}>О компании</h2>
            <div className={styles.infoBox}>
                <div className={styles.imgBox} >
                    <Image
                        src={img}
                        alt="partner image"
                        className={styles.img_lg}
                    />
                </div>
                <div className={styles.textBox}>
                    <p className={styles.textBox__p}>Строительная компания «Одон-строй» оказывает широкий спектр услуг на территории КР, таких как:</p>
                    <ul className={styles.textBox__ul}>
                        <li className={styles.textBox__li}><div className="" /> строительство промышленных и взрывоопасных строений</li>
                        <li className={styles.textBox__li}> возведение конструкций гражданского назначения</li>
                    </ul>
                    <Image
                        src={img_md}
                        alt="partner image"
                        className={styles.img_md}
                    />
                    <Image
                        src={img}
                        alt="partner image"
                        className={styles.img_sm}
                    />
                    <p className={styles.textBox__p}>
                        В выстроенных процессах предприятие ориентируется на собственные силы, внедрение новых технологий, мировых стандартов качества, повышение производительности труда.
                    </p>
                    <p className={styles.textBox__p}>
                    Мы соответствуем высоким требованиям по технической оснащенности, а это, в свою очередь, гарантирует качественное и своевременное выполнение обязательств перед заказчиками.
                    </p>
                    <p className={styles.textBox__p}>
                        «Одон-строй» - это коллектив настоящих, преданных своему делу, профессионалов из Кыргызстана.
                    </p>
                </div>
            </div>
            <div id='tileBox' className={styles.tileBox}>
                <div id='tileRow_1' className={styles.tileBox__row}>
                    {tileData[0].map((item, key) =>
                        <div key={`re${key}`} className={styles.tileItem}>
                            <div className={styles.tileItem__wrapper}>
                                <VisibilitySensor partialVisibility offset={{ bottom: 0 }}>
                                    {({ isVisible }) => <div className={styles.tileItem__title}>
                                        {isVisible ? <CountUp redraw={true} start={0} className={styles.tileItem__count} end={item.title.number} />
                                            : <span className={styles.tileItem__count}>0</span>}
                                        {item.title.text}
                                    </div>}
                                </VisibilitySensor>
                                <div className={styles.tileItem__text}>{item.text}</div>
                                <div className={styles.tileItem__bg} />
                            </div>
                        </div>
                    )}
                </div>
                <div id='tileRow_2' className={styles.tileBox__row}>
                    {tileData[1].map((item, key) =>
                        <div key={`re${key}`} className={styles.tileItem}>
                            <div className={styles.tileItem__wrapper}>
                                <VisibilitySensor partialVisibility offset={{ top: 0 }}>
                                    {({ isVisible }) => <div className={styles.tileItem__title}>
                                        {isVisible ? <CountUp redraw={true} start={0} className={styles.tileItem__count} end={item.title.number} />
                                            : <span className={styles.tileItem__count}>0</span>}
                                        {item.title.text}
                                    </div>}
                                </VisibilitySensor>
                                <div className={styles.tileItem__text}>{item.text}</div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default AboutCompany;