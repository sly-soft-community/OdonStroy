import React, { useRef } from 'react';
import styles from "./ModalWindow.module.scss"
import xcross from "./x-cross.svg"
import Image from "next/image";
import CheckBox from '@/components/CheckBox/CheckBox'
import { useFormik } from 'formik'
import img from '@/media/img/contacts/contact.svg'
import emailjs from "@emailjs/browser";
import { useMask } from '@react-input/mask';
import Button from '@/components/Button/Button';


const ModalWindow = ({ setClose, isOpen }) => {
    const form = useRef();
    const inputRef = useMask({ mask: '+996 ___ ___ ___', replacement: { _: /\d/ } });
    const formik = useFormik({
        initialValues: {
            full_name: '',
            phone: '',
            message: '',
            submitPrivacyPolicy: false,
        },
        onSubmit: (values, { resetForm }) => {
            if (!values.submitPrivacyPolicy) return;
            let eValues = values;
            delete eValues.submitPrivacyPolicy;
            Object.keys(eValues).forEach((item) => {
                if (values[item].length === 0) return;
            });

            emailjs
                .sendForm(
                    "service_jlzngye",
                    "template_ikwy10c",
                    form.current,
                    process.env.NEXT_PUBLIC_EMAIL_JS_KEY
                )
                .then(
                    (result) => {
                        openModal()
                        resetForm();
                    },
                    (error) => {
                        console.log('error', error.text);
                    }
                );
        },
    })

    return (
        <div onClick={() => setClose()} className={isOpen ? `${styles.wrapper} ${styles.active}` : styles.wrapper}>
            <div onClick={(e) => e.stopPropagation()} className={isOpen ? `${styles.modalBox} ${styles.active}` : styles.modalBox}>
                <div className={styles.header}>
                    <Image
                        onClick={() => setClose()}
                        src={xcross}
                        alt="partner image"
                        className={styles.header__icon}
                    />
                </div>
                <h2 className='title'>Возник вопрос? – Напишите нам!</h2>
                <div className={styles.contant}>
                    <div className={styles.contant__popFolter} />
                    <div className={styles.imageBox}>
                        <Image
                            priority = {true}
                            src={img}
                            alt="partner image"
                            className={styles.img}
                        />
                    </div>
                    <form ref={form} className={styles.box} onSubmit={formik.handleSubmit}>
                        <div className={styles.form__wrapper}>
                            <div className={styles.form__row}>
                                <div className={styles.form__col}>
                                    <label className={styles.form__label} htmlFor="full_name">Ваше имя</label>
                                    <input
                                        placeholder="Ф.И.О."
                                        id="full_name"
                                        name="full_name"
                                        onChange={formik.handleChange}
                                        value={formik.values.full_name}
                                        className={styles.form__input}
                                        type="text"
                                    />
                                </div>
                                <div className={styles.form__col}>
                                    <label className={styles.form__label} htmlFor="lastName">Ваш номер</label>
                                    <input
                                        ref={inputRef}
                                        placeholder="+996 ххх ххх ххх"
                                        id="phone"
                                        name="phone"
                                        onChange={formik.handleChange}
                                        value={formik.values.phone}
                                        className={styles.form__input}
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className={styles.form__field}>
                                <label className={styles.form__label} htmlFor="message">Ваше сообщение</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Введите текст ..."
                                    onChange={formik.handleChange}
                                    value={formik.values.message}
                                    className={styles.form__input}
                                />
                            </div>
                            <div className={styles.form__field}>
                                <CheckBox
                                    link={true}
                                    label="Даю согласие на обработку моих персональных данных, согласно "
                                    value={formik.values.submitPrivacyPolicy}
                                    onClick={e => {
                                        formik.setFieldValue('submitPrivacyPolicy', e)
                                    }}
                                />
                            </div>
                            <Button type="submitForm" onClick={() => {}} disabled={!formik.values.submitPrivacyPolicy}>
                                Отправить форму
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ModalWindow;