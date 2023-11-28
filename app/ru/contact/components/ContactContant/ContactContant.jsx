'use client'
import React, { useRef } from 'react';
import styles from "./ContactContant.module.scss";
import Image from 'next/image';
import call from '@/media/img/contacts/phoneCall.svg'
import mail from '@/media/img/contacts/mail.svg'
import navigation from '@/media/img/contacts/navigation.svg'
import inst from '@/media/img/contacts/inst.svg'
import whatsapp from '@/media/img/contacts/whatsapp.svg'
import Map from "../Map/Map"
import Сontacts from "../Сontacts/Сontacts";
import Header from '@/components/Header/Header';
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";


const ContactContant = () => {
    const artRef1 = useRef(null);
    gsap.registerPlugin(ScrollToPlugin);
    const scrollTo = (target) => {
        gsap.to('body', { duration: .6, scrollTo: '#form' })
        // gsap.to('body', { y: 12, ease: "power1.inOut", repeat: -1, yoyo: true });
        // gsap.to('#form', { y: 12, ease: "power1.inOut", repeat: -1, yoyo: true })
    }
    return (
        <>
            <Header
                scrollTo={() => scrollTo(artRef1.current)}
                isContact={true} />
            <div className={styles.backgroundWrapper}>
                <main className='container'>
                    <h1 className={styles.title}>
                        Свяжитесь с нами
                    </h1>
                    <section className={styles.contactUs}>
                        <div className={styles.contactRow}>
                            <div>
                                <h2 className={styles.titleRow}>
                                    Наши контакты:
                                </h2>
                                <ul className={styles.description}>
                                    <Image src={call} alt="" className={styles.contactItem} />
                                    <div>
                                        <li>+996 995 55 33 55</li>
                                        <li>+996 508 55 33 55</li>
                                    </div>
                                </ul>
                            </div>
                            <div>
                                <h2 className={styles.titleRow}>
                                    Email для связи:
                                </h2>
                                <div className={styles.description} >
                                    <Image src={mail} alt="" className={styles.contactItem} />
                                    <p>info@odon.kg</p>
                                </div>
                            </div>
                            <div>
                                <h2 className={styles.titleRow}>
                                    Юридический адрес:
                                </h2>
                                <div className={styles.description}>
                                    <Image src={navigation} alt="" className={styles.contactItem} />
                                    <p>
                                        Бишкек, Аламудунский район,1-я улица, 1а/1
                                    </p>
                                </div>
                            </div>
                            <div>
                                <h2 className={styles.titleRow}>
                                    Мы в социальных сетях:
                                </h2>
                                <div className={styles.messagers}>
                                    <div>
                                        <Image src={inst} alt="" className={styles.item__img} />
                                    </div>
                                    <div>
                                        <Image src={whatsapp} alt="" className={styles.item__img} />
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className={styles.map} >
                            <Map />
                        </div>
                    </section>
                    <section ref={artRef1} id='form'>
                        <Сontacts />
                    </section>
                </main>
            </div>
        </>
    );
};

export default ContactContant;