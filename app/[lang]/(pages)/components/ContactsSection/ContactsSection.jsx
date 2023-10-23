import React from 'react';
import ContactsMap from './ContactsMap/ContactsMap';
import styles from "./ContactsSection.module.scss"
import Image from 'next/image';
import social_icon1 from '@/media/icons/inst-icon.svg'
import social_icon2 from '@/media/icons/whats-app-icon.svg'
import social_icon3 from '@/media/icons/tg-icon.svg'
import icon1 from '@/media/icons/location-icon.svg'
import icon2 from '@/media/icons/mail-icon.svg'
import icon3 from '@/media/icons/tel-icon.svg'
import Link from 'next/link';

const ContactsSection = ({dictionary}) => {
    const contactsList = [
        {
            icon: icon2,
            title: dictionary['contacts']['city'],
            subtitle: dictionary['contacts']['street']
        },
        {
            icon: icon3,
            title: '+996 557 15 55 51',
            underline: true
        },
        {
            icon: icon1,
            title: 'info@synergygroup.kg',
        },
    ]

    const socialArr = [
        {
            icon: social_icon1,
            href: 'https://www.instagram.com/synergy.healthcare.kg/'
        },
        {
            icon: social_icon2,
            href: 'https://api.whatsapp.com/send/?phone=996557155551&text&type=phone_number&app_absent=0'
        },
    ]

    return (
        <section id='contacts' className={`${styles.section} container`}>
            <div className={styles.infoCol}>
                <h3 className={styles.title}>{dictionary['contacts']['title']}</h3>
                <ul className={styles.contactsList}>
                    {contactsList.map((item, i) =>
                        <li key={i} className={Boolean(item.subtitle) ? styles.contactsList__item : `${styles.contactsList__item_center}`}>
                            <Image src={item.icon} className={styles.contactsList__img} alt="icon" />
                            <div className={styles.contactsList__box}>
                                <div className={styles.contactsList__title}>{item.title}</div>
                                <div className={styles.contactsList__subTitle}>{item.subtitle}</div>
                            </div>
                        </li>
                    )}

                </ul>
                <div className={styles.socialRow}>
                    {socialArr.map((item, i) =>
                        <a target='_blank' href={item.href} key={i} className={styles.socialRow__item}>
                            <Image src={item.icon} alt="social media" />
                        </a>
                    )}
                </div>
            </div>
            <div className={styles.mapCol}>
                <ContactsMap />
            </div>
        </section>
    );
};

export default ContactsSection;
