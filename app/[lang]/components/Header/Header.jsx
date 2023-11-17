'use client'
import React, { memo } from 'react';
import styles from "./Header.module.scss"
import Link from 'next/link';
import desctopLogo from '../../media/img/DesctopLogo.svg'
import Image from "next/image";
import { useRouter } from "next/navigation";


function Header({ isFirstBlock = true, goTo, isIndexPage = false }) {
    const navArray = [
        { label: 'Главная', link: '/ru' },
        { label: 'Проекты', link: '#' },
        { label: 'Контакты', link: '/ru/contact' },
    ]

    const infoArray = [
        { label: 'о нас', link: '#about' },
        { label: 'услуги', link: '#service' },
        { label: 'этапы работ', link: '#work' },
        { label: 'партнеры & отзывы', link: '#rewiev' },
        { label: 'лицензии и сертификаты', link: '#docs' },
        { label: 'оставьте заявку', link: '#contact' },
    ]
    const router = useRouter();
    return (
        <div className={`${styles.wrapper} ${!isIndexPage && styles.fixed}`} >
            <header className={`${styles.header} container`}>
                <div className={styles.logoBox}>
                    <Link href='/ru' >
                        <Image
                            src={desctopLogo}
                            width={200}
                            height={40}
                            priority={true}
                            alt="Logo"
                            loader={({ src }) => src}
                        />
                    </Link>
                </div>
                <div className={styles.box}>
                    <ul className={styles.navbar}>
                        {navArray.map((item, key) =>
                            <li key={key} className={styles.navbar__item}>
                                <Link className={styles.navbar__link} href={item.link} >{item.label}</Link>
                            </li>)}
                    </ul>
                    <button onClick={() => isIndexPage ? goTo(5): router.push(`/ru`)} className={styles.header__btn}>Оставьте заявку</button>
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
                                <div className={styles.navList__link} onClick={() => goTo(key)}>{item.label}</div>
                            </li>
                        )}
                    </ul>
                </nav>
            }

        </div>
    );
};

export default memo(Header);
