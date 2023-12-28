import React from 'react';
import styles from "./DescriptionProject.module.scss";
import Image from 'next/image';
import slider from '@/media/img/projects/pojectSlider/slider.png'
import leftArrow from '@/media/img/projects/pojectSlider/leftArrow.svg'
import rightArrow from '@/media/img/projects/pojectSlider/rightArrow.svg'

const DescriptionProject = ({ project, style }) => {
    const data = [
        { id: 1, item: 'общая квадратура', info: '1000 м2' },
        { id: 2, item: 'квадратура здания', info: '200 м2' },
        { id: 3, item: 'работа выполнена за', info: '3 месяца' },
    ];
    return (
        project ?
            <div style={style} className={styles.wrapper}>
                <div>
                    <h1 className={styles.title}>{project.title}</h1>
                    <p className={styles.description}>
                        {project.projectDetail.text}
                    </p>
                    <div className={styles.itemBox}>
                        <div>
                            <div className={styles.item}>общая квадратура</div>
                            <div className={styles.info}>{project.projectDetail.totalQuadrature} м2</div>
                        </div>
                        <div>
                            <div className={styles.item}>квадратура здания</div>
                            <div className={styles.info}>{project.projectDetail.squareBuilding} м2</div>
                        </div>
                        <div>
                            <div className={styles.item}>работа выполнена за</div>
                            <div className={styles.info}>{project.projectDetail.workTime} месяца</div>
                        </div>
                    </div>
                </div>
                <div className={styles.slider}>
                    <div>
                        <Image
                            src={leftArrow}
                            alt=""
                            className={styles.btn}
                        />
                    </div>
                    <div>
                        <Image
                            src={slider}
                            alt="icon"
                            className={styles.img}
                        />
                    </div>
                    <div>
                        <Image
                            src={rightArrow}
                            alt=""
                            className={styles.btn}
                        />
                    </div>
                </div>

            </div> : <></>
    );
};

export default DescriptionProject;