"use client";

import React, { useRef } from "react";
import styles from "./FeedbackSection.module.scss";
import { useFormik } from "formik";
import CheckBox from "@/components/CheckBox/CheckBox";
import emailjs from "@emailjs/browser";

const FeedbackSection = ({ dictionary }) => {
    const form = useRef();
    const formik = useFormik({
        initialValues: {
            full_name: "",
            phone: "",
            message: "",
            submitDataProcessing: false,
        },
        onSubmit: (values, { resetForm }) => {
            if (!values.submitDataProcessing) return;
            let eValues = values;
            delete eValues.submitDataProcessing;
            Object.keys(eValues).forEach((item) => {
                if (values[item].length === 0) return;
            });

            emailjs
                .sendForm(
                    "service_fupzgjq",
                    "template_huxiy7i",
                    form.current,
                    process.env.NEXT_PUBLIC_EMAIL_JS_KEY
                )
                .then(
                    (result) => {
                        resetForm();
                    },
                    (error) => {
                        console.log('error', error.text);
                    }
                );
        },
    });

    return (
        <section id="feedback" className={`${styles.section} container`}>
            <div className={styles.header}>
                <div className={styles.header__greyBox_sm}>
                    <div className={styles.header__whiteBox_sm}></div>
                </div>
                <h3 className={styles.header__title}>
                    {dictionary["leave-a-request"]["title"]}
                </h3>
                <div className={styles.header__greyBox_1}>
                    <div className={styles.header__whiteBox_1}></div>
                </div>
                <div className={styles.header__greyBox_2}>
                    <div className={styles.header__whiteBox_2}></div>
                </div>
            </div>
            <div className={styles.contant}>
                <form className={styles.form} ref={form} onSubmit={formik.handleSubmit}>
                    <div className={styles.form__row}>
                        <input
                            placeholder={dictionary["leave-a-request"]["your-name"]}
                            id="full_name"
                            name="full_name"
                            onChange={formik.handleChange}
                            value={formik.values.full_name}
                            className={styles.form__input}
                            type="text"
                        />
                        <input
                            placeholder={dictionary["leave-a-request"]["phone-number"]}
                            id="phone"
                            name="phone"
                            onChange={formik.handleChange}
                            value={formik.values.phone}
                            className={styles.form__input}
                            type="tel"
                        />
                    </div>
                    <div>
                        <textarea
                            id="message"
                            name="message"
                            placeholder={dictionary["leave-a-request"]["your-message"]}
                            onChange={formik.handleChange}
                            value={formik.values.message}
                            className={styles.form__textarea}
                        />
                    </div>
                    <div className={styles.form__field}>
                        <CheckBox
                            label={dictionary["leave-a-request"]["text-1"]}
                            value={formik.values.submitDataProcessing}
                            onClick={(e) => {
                                formik.setFieldValue("submitDataProcessing", e);
                            }}
                        />
                    </div>

                    <button className={styles.form__btn} type="submit">
                        {dictionary["leave-a-request"]["send"]}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default FeedbackSection;
