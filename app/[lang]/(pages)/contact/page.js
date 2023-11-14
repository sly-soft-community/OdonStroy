import React from 'react';
import styles from "./page.module.scss";
import Image from 'next/image';
import map from '@/media/map.svg'
import Сontacts from "./components/Сontacts/Сontacts";
import call from '@/media/img/contacts/phoneCall.svg'
import mail from '@/media/img/contacts/mail.svg'
import navigation from '@/media/img/contacts/navigation.svg'
import inst from '@/media/img/contacts/inst.svg'
import whatsapp from '@/media/img/contacts/whatsapp.svg'
import background from '@/media/img/contacts/background.jpg'
const page = () => {
    return (
        <div className={styles.backgroundWrapper}>
            <main className={styles.wrapper}>
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
                    <div >
                        <Image src={map} alt="" className={styles.map} />
                    </div>
                </section>
                <section>
                    <Сontacts />
                </section>
            </main>
        </div>

    );
};

export default page;