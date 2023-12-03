'use client'
import React, { useRef, useState } from 'react';
import styles from "./Сontacts.module.scss"
import CheckBox from '@/components/CheckBox/CheckBox'
import { useFormik } from 'formik'
import img from '@/media/img/contacts/contact.svg'
import Image from "next/image";
import Footer from '@/components/Footer/Footer';
import emailjs from "@emailjs/browser";
import loaderImg from "@/media/icons/my-loader.svg"
import { useMask } from '@react-input/mask';


const Сontacts = ({ openModal }) => {
    const form = useRef();
    const [loader, setLoader] = useState(false)
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
            Object.keys(eValues).forEach((item) => {
                if (values[item].length === 0) return;
            });
            setLoader(true)
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
                        resetForm()
                        setLoader(false)
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
                                        placeholder="+996 ххх ххх ххх"
                                        id="phone"
                                        name="phone"
                                        ref={inputRef}
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
                                    label="Даю согласие на обработку моих персональных данных, согласно "
                                    value={formik.values.submitPrivacyPolicy}
                                    link={true}
                                    onClick={e => {
                                        formik.setFieldValue('submitPrivacyPolicy', e)
                                    }}
                                />
                            </div>
                            <button
                                className={formik.values.submitPrivacyPolicy? `${styles.form__btn} ${styles.active}` : styles.form__btn}
                                type="submit">
                                <span>
                                    Отправить форму
                                </span>
                                {loader ? <Image
                                    src={loaderImg}
                                    alt="partner image"
                                    className={styles.loader}
                                /> : ''}
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