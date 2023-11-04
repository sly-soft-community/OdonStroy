import React from 'react';
import styles from "./Footer.module.scss"
import Image from 'next/image';
import desctopLogo from '../../media/img/DesctopLogo.svg'
import Link from 'next/link';

const Footer = ({ dictionary }) => {
    const navArray = [
        { label: 'Главная', link: '/' },
        { label: 'Галерея', link: '/' },
        { label: 'Контакты', link: '/' },
        { label: 'Политика конфиденциальности', link: '/' },
    ]

    return (
        <footer className={`${styles.footer}`}>
            <div className={`container ${styles.contant}`}>
                <div className={styles.logoBox}>
                    <Image
                        src={desctopLogo}
                        width={200}
                        height={40}
                        priority={true}
                        alt="Logo"
                    />
                </div>
                <ul className={styles.navbar}>
                    {navArray.map((item, key) =>
                        <li key={key} className={styles.navbar__item}>
                             <Link className={styles.navbar__link} href={item.link} >{item.label}</Link>
                        </li>
                    )}

                </ul>
                <div className=""></div>
            </div>

        </footer>
    );
};

export default Footer;
