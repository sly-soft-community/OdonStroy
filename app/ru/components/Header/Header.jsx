'use client'
import React, { memo, useState } from 'react';
import styles from "./Header.module.scss"
import Link from 'next/link';
import desctopLogo from '../../media/img/DesctopLogo.svg'
import Image from "next/image";
import { useRouter } from "next/navigation";
import ModalWindow from '@/contact/components/ModalWindow/ModalWindow';
import { NavMark } from '../NavMark';


function Header({ isFirstBlock = true,
    goTo,
    isIndexPage = false,
    openModal,
    isContact = false,
    scrollTo }) {
    const navArray = [
        { label: 'Главная', link: '/ru' },
        { label: 'Проекты', link: '#' },
        { label: 'Контакты', link: '/ru/contact' },
    ]
    const [modalView, setModalView] = useState(false)
    const [open, setOpen] = useState(false)

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
                <ModalWindow
                    setClose={() => setModalView(false)}
                    isOpen={modalView} />
                <div className={styles.logoBox}>
                    <Image
                        src={desctopLogo}
                        width={200}
                        height={40}
                        priority={true}
                        alt="Logo"
                        loader={({ src }) => src}
                        onClick={() => isIndexPage ? goTo(-1) : router.push(`/ru`)}
                    />
                    <div
                        onClick={() => {
                            setOpen(prev => !prev)
                        }}
                        className={styles.header__burger}>
                        <div className={open ? `${styles.header__burger_icon} ${styles.open}`
                            : styles.header__burger_icon} />
                    </div>
                </div>
                <div className={open ? `${styles.box} ${styles.open}` : styles.box}>
                    <ul className={styles.navbar}>
                        {navArray.map((item, key) =>
                            <li key={key} onClick={() => setOpen(false)} className={styles.navbar__item}>
                                <NavMark href={item.link} >
                                    <Link className={styles.navbar__link} href={item.link} >{item.label}</Link>
                                </NavMark>
                            </li>)}
                    </ul>
                    <button onClick={() => {
                        if (isIndexPage) {
                            goTo(5)
                        } else {
                            if (isContact) {
                                scrollTo()
                            } else {
                                setModalView(true)
                            }
                        }
                        setOpen(false)
                    }} className={styles.header__btn}>Оставьте заявку</button>
                </div>

            </header>
            <div className={open ? `${styles.modalPopup} ${styles.active}` : styles.modalPopup} />
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
