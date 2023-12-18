import React from 'react';
import styles from "./DescriptionProject.module.scss";
import Image from 'next/image';
import slider from '@/media/img/projects/pojectSlider/slider.png'

const DescriptionProject = () => {
    const data = [
        { id: 1, item: '123', info: 'Инфа' },
        { id: 2, item: '1 234', info: 'Инфа' },
        { id: 3, item: '6 524', info: 'Застроенных м2' },
    ];
    return (
        <div className={styles.wrapper}>
            <div>
                <h1 className={styles.title}>Заголовок Проекта</h1>
                <p className={styles.description}>описание. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacus laoreet non curabitur gravida arcu ac tortor dignissim convallis. Lobortis elementum nibh tellus molestie. Nunc eget lorem dolor sed viverra ipsum nunc. Ac turpis egestas sed tempus. In fermentum posuere urna nec tincidunt praesent. Et ligula ullamcorper malesuada proin libero. Tempus egestas sed sed risus pretium quam vulputate dignissim. Ipsum dolor sit amet consectetur adipiscing elit.
                </p>
                <div className={styles.itemBox}>
                    {data.map((itemData) => (
                        <div key={itemData.id}>
                            <div className={styles.item}>{itemData.item}</div>
                            <div className={styles.info}>{itemData.info}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.slider}>
                <div>
                <Image
                    src={slider}
                    alt="icon"
                    className={styles.img}
                />
                </div>
            </div>

        </div>
    );
};

export default DescriptionProject;