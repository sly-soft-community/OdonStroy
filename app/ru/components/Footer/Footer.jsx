import React from 'react';
import styles from "./Footer.module.scss"
import Image from 'next/image';
import desctopLogo from '../../media/img/DesctopLogo.svg'
import logoSly from '../../media/img/logoSly.svg'
import Link from 'next/link';

const Footer = ({ dictionary }) => {
    const navArray = [
        { label: 'Главная', link: '/' },
        { label: 'Галерея', link: '/' },
        { label: 'Контакты', link: '/' },
        { label: 'Политика конфиденциальности', link: '/ru/privacy' },
    ]

    return (
        <footer className={`${styles.footer}`}>
            <div className="container">
                <div className={`${styles.contant}`}>
                    <div className={styles.logoBox}>
                        <Image
                            src={desctopLogo}
                            width={200}
                            height={40}
                            priority={true}
                            alt="Logo"
                        />
                        <div className={styles.logoBox__text}>
                            <span>© 2012-2023 Одон-Строй.</span>
                            <span>Все права защищены.</span>
                        </div>
                    </div>
                    <ul className={styles.navbar}>
                        {navArray.map((item, key) =>
                            <li key={key} className={styles.navbar__item}>
                                <Link className={styles.navbar__link} href={item.link} >{item.label}</Link>
                            </li>
                        )}

                    </ul>
                </div>
                <div className={`${styles.brandRow}`}>
                    <Image
                        src={logoSly}
                        width={227}
                        height={50}
                        priority={true}
                        alt="Logo"
                    />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
