import React from 'react';
import styles from "./StagesOfWork.module.scss"

const StagesOfWork = () => {
    const data = [
        { text: 'Сбор документации и создание проекта' },
        { text: 'Геодезические и земельные работы' },
        { text: ' Основное строительство (фундамент, каркас, узлы)' },
        { text: 'Фасадные работы, обшивка фасада' },
        { text: 'Внутренние работы, установка оборудования и систем для работы' },
        { text: 'Благоустройство', text_lg: 'Благоустрой- ство',  },
        { text: 'Ввод в эксплуатацию и сдача объекта' },
    ]

    return (
        <section className={styles.section} >
            <h2 className={styles.title}>Этапы работы</h2>
            <div className={styles.contantBox}>
                {data.map((item, key) =>
                    <div key={key} className={styles.itemWrapper}>
                        <div key={key} className={styles.item}>
                            <div className={styles.item__img}>{key + 1}</div>
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