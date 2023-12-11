'use client'
import React from 'react';
import { useMediaQuery } from 'react-responsive'
import styles from "./page.module.scss";
import projectsSmall1 from '@/media/img/projects/projectsSmall1.png'
import projectsSmall2 from '@/media/img/projects/projectsSmall2.png'
import projectsSmall3 from '@/media/img/projects/projectsSmall3.png'
import projectsSmall4 from '@/media/img/projects/projectsSmall4.png'
import projectsSmall5 from '@/media/img/projects/projectsSmall5.png'
import projectsSmall6 from '@/media/img/projects/projectsSmall6.png'
import projectsSmall7 from '@/media/img/projects/projectsSmall7.png'
import projectsSmall8 from '@/media/img/projects/projectsSmall8.png'
import projectsSmall9 from '@/media/img/projects/projectsSmall9.png'
import projectsSmall10 from '@/media/img/projects/projectsSmall10.png'
import projectsLarge1 from '@/media/img/projects/projectsLarge1.png'
import projectsLarge2 from '@/media/img/projects/projectsLarge2.png'
import Image from 'next/image';
import mapObj from '@/media/mapObj.png'
import LargeProject from './components/LargeProject/LargeProject';
import SmallProject from './components/SmallProject/SmallProject';

const page = () => {
    const projectsData = [
        {
            id: 1, type: 'large',
            title: 'ФОК Газпром',
            image: projectsLarge1,
            style: {
                xl: {
                    gridColumn: '1 / 3',
                    gridRow: '1 / 3',
                },
                md: {
                    gridColumn: '1 / 2',
                    gridRow: '1 / 2',
                }

            }
        },
        { id: 2, type: 'small', title: 'АЗС 31, мкр. Улан', image: projectsSmall1 },
        { id: 3, type: 'small', title: 'АЗС 61, Газпром, Балыкчи', image: projectsSmall2 },
        { id: 4, type: 'small', title: 'ЧУЙГАЗ', image: projectsSmall3 },
        { id: 5, type: 'small', title: 'АЗС 30, Сухэ-батора', image: projectsSmall4 },
        { id: 6, type: 'small', title: 'Стадион, школа Газпром', image: projectsSmall5 },

        {
            id: 7, type: 'small', title: 'Развитие логистического центра', image: projectsSmall6,
        },
        {
            id: 8, type: 'small', title: 'Расширение сталелитейного завода', image: projectsSmall7,
        },
        {
            id: 9, type: 'large',
            title: 'АЗС 46, BishkekPetroleum, Балыкчи',
            image: projectsLarge2,
            style: {
                xl: {
                    gridColumn: '2 / 4',
                    gridRow: '4 / 6 ',
                },
                md: {
                    gridColumn: '1 / 2',
                    gridRow: '2 / 3',
                }

            }
        },

        { id: 10, type: 'small', title: 'Распределительные сети, Фере', image: projectsSmall8 },
        { id: 11, type: 'small', title: 'Фруктохранилище', image: projectsSmall9 },
        { id: 12, type: 'small', title: 'Распределительные сети, Чон-арык', image: projectsSmall10 }
    ];
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1000px)' })


    return (
        <main>
            <div className='container'>
                <h1 className={styles.title}>
                    Портфолио наших Проектов
                </h1>
                <div className={styles.gridWrapper}>
                    {projectsData.map((project) => (
                        project.type === 'large' ? (
                            <LargeProject
                                style={isTabletOrMobile ? project.style.md : project.style.xl}
                                key={project.id} s title={project.title} image={project.image} className={styles.largeProject} />
                        ) : (
                            <SmallProject key={project.id} title={project.title} image={project.image} className={styles.smallProject} />
                        )
                    ))}
                </div>
                <div className={styles.boxBtn}>
                    <button className={styles.btn}>
                        Получить консультацию
                    </button>
                </div>
            </div>
            <div className='container'>
                <h1 className={styles.titleObj}>
                    География объектов
                </h1>
                <Image
                    src={mapObj}
                    alt="mapObj"
                    className={styles.mapObj}
                />
            </div>
        </main>
    );
};

export default page;