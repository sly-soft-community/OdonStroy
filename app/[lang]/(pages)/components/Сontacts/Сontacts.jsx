'use client'
import React from 'react';
import styles from "./Сontacts.module.scss"
import CheckBox from '@/components/CheckBox/CheckBox'
import { useFormik } from 'formik'
import img from '@/media/img/contacts/contact.svg'
import Image from "next/image";

const Сontacts = () => {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            telephone: '',
            theme: '',
            submitPrivacyPolicy: false,
            submitDataProcessing: false,
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2))
        },
    })

    return (
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
                <form className={styles.box} onSubmit={formik.handleSubmit}>
                    <div className={styles.form__wrapper}>
                        <div className={styles.form__row}>
                            <div className={styles.form__col}>
                                <label className={styles.form__label} htmlFor="firstName">Ваше имя</label>
                                <input
                                    placeholder="Имя ..."
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
                                    placeholder="Номер ..."
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
    );
};

export default Сontacts;