'use client'
import React, { memo } from 'react';
import styles from "./Header.module.scss"
import Link from 'next/link';
import desctopLogo from '../../media/img/DesctopLogo.svg'
import Image from "next/image";

function Header({ lang, dictionary }) {
    const navArray = [
        { label: 'Главная', link: '#' },
        { label: 'Проекты', link: '#' },
        { label: 'Контакты', link: '#' },
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
        </div>
    );
};

export default memo(Header);
