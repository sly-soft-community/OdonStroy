import React from 'react';
import styles from "./ModalWindow.module.scss"
import xcross from "./x-cross.svg"
import Image from "next/image";


const ModalWindow = ({ setClose, isOpen }) => {
    return (
        <div onClick={() => setClose()} className={isOpen ? `${styles.wrapper} ${styles.active}` : styles.wrapper}>
            <div onClick={(e) => e.stopPropagation()} className={styles.box}>
                <div className={styles.popfilter}>
                    <div className={styles.header}>
                        <div className={styles.header__infoBox}>
                            <div className={styles.header__text}>
                                Вы на шаг ближе к осуществлению своего проекта!
                            </div>
                        </div>
                        <Image
                            onClick={() => setClose()}
                            src={xcross}
                            alt="partner image"
                            className={styles.header__icon}
                        />
                    </div>
                    <div className={styles.contant}>
                        <h3 className={styles.title}>
                            Спасибо за заявку!
                        </h3>
                        <div className={styles.text}>
                            Наш менеджер свяжется с вами в ближайшее время!
                        </div>
                        <button onClick={() => setClose()} className={styles.button}>
                            Вернуться на сайт
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalWindow;