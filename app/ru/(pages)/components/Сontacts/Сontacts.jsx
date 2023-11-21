'use client'
import React, { useRef, useState } from 'react';
import styles from "./Сontacts.module.scss"
import CheckBox from '@/components/CheckBox/CheckBox'
import { useFormik } from 'formik'
import img from '@/media/img/contacts/contact.svg'
import Image from "next/image";
import Footer from '@/components/Footer/Footer';
import emailjs from "@emailjs/browser";



const Сontacts = ({ openModal }) => {
    const [modalWindow, setModalWindow] = useState(true)
    const form = useRef();
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
        <div className={styles.lastBlock}>
            <section id='contact' className={styles.section} >
                <h2 className='title'>Возник вопрос? – Напишите нам!</h2>
                <div className={styles.contant}>
                    <div className={styles.contant__popFolter} />
                    <div className={styles.imageBox}>
                        <Image
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
                                        placeholder="Имя ..."
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
                                        placeholder="Номер ..."
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
                                    label="Даю согласие на обработку моих персональных данных"
                                    value={formik.values.submitPrivacyPolicy}
                                    onClick={e => {
                                        formik.setFieldValue('submitPrivacyPolicy', e)
                                    }}
                                />
                            </div>
                            <button
                                className={styles.form__btn}
                                type="submit">
                                Отправить форму
                            </button>
                        </div>
                    </form>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Сontacts;