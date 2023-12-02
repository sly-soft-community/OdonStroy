import React from 'react';
import styles from "./page.module.scss";
import LargeProject from './components/LargeProject/LargeProject';
const page = () => {
    return (
        <div className={styles.wrapper}>
            <main className='container'>
            <h1 className={styles.title}>
            Портфолио наших Проектов
            </h1>
            <LargeProject/>

            </main>
        </div>
    );
};

export default page;