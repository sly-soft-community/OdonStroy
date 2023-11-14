'use client'
import React, { memo } from 'react';
import styles from "./Header.module.scss"
import Link from 'next/link';
import desctopLogo from '../../media/img/DesctopLogo.svg'
import Image from "next/image";

function Header({ isFirstBlock, goTo }) {
    const navArray = [
        { label: 'Главная', link: '#' },
        { label: 'Проекты', link: '#' },
        { label: 'Контакты', link: '#' },
    ]

    const infoArray = [
        { label: 'о нас', link: '#about' },
        { label: 'услуги', link: '#service' },
        { label: 'этапы работ', link: '#work' },
        { label: 'партнеры & отзывы', link: '#rewiev' },
        { label: 'лицензии и сертификаты', link: '#docs' },
        { label: 'оставьте заявку', link: '#contact' },
    ]
    return (
        <div className={styles.wrapper} >
            <header className={`${styles.header} container`}>
                <div className={styles.logoBox}>
                    <Image
                        src={desctopLogo}
                        width={200}
                        height={40}
                        priority={true}
                        alt="Logo"
                        loader={({ src }) => src}
                    />
                </div>
                <div className={styles.box}>
                    <ul className={styles.navbar}>
                        {navArray.map((item, key) =>
                            <li key={key} className={styles.navbar__item}>
                                <Link className={styles.navbar__link} href={item.link} >{item.label}</Link>
                            </li>)}
                    </ul>
                    <button className={styles.header__btn}>Оставьте заявку</button>
                </div>
                <div className={styles.header__burger}>
                    <div className={styles.header__burger_icon} />
                </div>
            </header>
            {
                !isFirstBlock &&
                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        {infoArray.map((item, key) =>
                            <li key={key} className={styles.navList__item}>
                                <div className={styles.navList__link} onClick={() => goTo(key )}>{item.label}</div>
                            </li>
                        )}
                    </ul>
                </nav>
            }

        </div>
    );
};

export default memo(Header);
