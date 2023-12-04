'use client'
import React, { useState } from 'react';
import styles from "./Сontacts.module.scss"
import CheckBox from '@/components/CheckBox/CheckBox'
import { useFormik } from 'formik'
import img from '@/media/img/contacts/contactCall.svg'
import Image from "next/image";
import emailjs from "@emailjs/browser";
import loaderImg from "@/media/icons/my-loader.svg"
import { useMask } from '@react-input/mask';


const Сontacts = () => {
    const [loader, setLoader] = useState(false)
    const inputRef = useMask({ mask: '+996 ___ ___ ___', replacement: { _: /\d/ } });
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            telephone: '',
            theme: '',
            submitPrivacyPolicy: false,
            submitNewsletter: false,
        },
        onSubmit: values => {
            if (!values.submitPrivacyPolicy) return;
            if (!values.submitNewsletter) return;
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
                        // openModal()
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
        <section className={styles.section} >
            <h2 className='title'>Возник вопрос? – Напишите нам!</h2>
            <div className={styles.contant}>
                <div className={styles.contant__popFolter}/>
                <form className={styles.box} onSubmit={formik.handleSubmit}>
                    <div className={styles.form__wrapper}>
                        <div className={styles.form__row}>
                            <div className={styles.form__col}>
                                <label className={styles.form__label} htmlFor="firstName">Ваше имя</label>
                                <input
                                    placeholder="Ф.И.О."
                                    id="firstName"
                                    name="firstName"
                                    onChange={formik.handleChange}
                                    value={formik.values.firstName}
                                    className={styles.form__input}
                                    type="text"
                                />
                            </div>
                            <div className={styles.form__col}>
                                <label className={styles.form__label} htmlFor="lastName">Ваш номер</label>
                                <input
                                    ref={inputRef}
                                    placeholder="+996 ххх ххх ххх"
                                    id="lastName"
                                    name="lastName"
                                    onChange={formik.handleChange}
                                    value={formik.values.lastName}
                                    className={styles.form__input}
                                    type="text"
                                />
                            </div>
                        </div>
                        <div className={styles.form__field}>
                            <label className={styles.form__label} htmlFor="massege">Ваше сообщение</label>
                            <textarea
                                id="massege"
                                name="massege"
                                placeholder="Введите текст ..."
                                onChange={formik.handleChange}
                                value={formik.values.massege}
                                className={styles.form__input}
                            />
                        </div>
                        <div className={styles.form__field}>
                            <CheckBox
                                label="Даю согласие на обработку моих персональных данных, согласно"
                                link={true}
                                value={formik.values.submitPrivacyPolicy}
                                onClick={e => formik.setFieldValue('submitPrivacyPolicy', e)}
                            />
                        </div>
                        {/* <div>
                            <CheckBox
                                label="Я хочу получать новости и анонсы от компании"
                                value={formik.values.submitNewsletter}
                                onClick={e => formik.setFieldValue('submitNewsletter', e)} // Исправлено имя поля с 'submitPrivacyPolicy' на 'submitNewsletter'
                            />
                        </div> */}
                        <button
                            className={formik.values.submitPrivacyPolicy ? `${styles.form__btn} ${styles.active}` : styles.form__btn}
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
                <div className={styles.imageBox}>
                    <Image
                        src={img}
                        alt="partner image"
                        className={styles.img}
                    />
                </div>
            </div>
        </section>
    );
};

export default Сontacts;