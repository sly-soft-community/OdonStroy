import React from 'react';
import styles from "./StagesOfWork.module.scss"

const StagesOfWork = () => {
    const data = [
        { number: '1', text: 'Сбор документации и создание проекта' },
        { number: '4', text: 'Отделка, обшивка фасада' },
        { number: '2', text: 'Геодезические и земельные изыскания' },
        { number: '5', text: 'Внутренние работы, установка оборудования и систем' },
        { number: '3', text: 'Основной этап (фундамент, каркас, узлы)' },
        { number: '6', text: 'Благоустройство территории', text_lg: 'Благоустрой- ство территории ',  },
        { number: '7', text: 'Ввод в эксплуатацию и сдача объекта' },
    ]

    return (
        <section className={styles.section} >
            <h2 className={styles.title}>Этапы работы</h2>
            <div className={styles.contantBox}>
                {data.map((item, key) =>
                    <div key={key} className={styles.itemWrapper}>
                        <div key={key} className={styles.item}>
                            <div className={styles.item__img}>{item.number}</div>
                            <div className={styles.item__text}>
                                {item.text}
                            </div>
                            <div className={styles.item__text_lg}>
                                {item.text_lg ? item.text_lg : item.text}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default StagesOfWork;