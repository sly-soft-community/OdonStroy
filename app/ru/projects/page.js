'use client'
import React, { useState } from 'react';
// import { redirect } from 'next/navigation';
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
import DescriptionProject from './components/DescriptionProject/DescriptionProject';

const page = () => {
    const [data, setData] = useState([
        {
            type: 'large',
            data: [
                {
                    active: false,
                    id: 1,
                    type: 'large',
                    orintation: 'left',
                    title: 'ФОК Газпром',
                    image: projectsLarge1,
                    projectDetail: {
                        text: 'Объект по адресу г. Бишкек, ул. Сухэ-Батора 1б. Был проведен ряд работ: возведение заправки из металлокаркаса, переходящего в здание магазина, строительство самого магазина из железобетонной конструкции с кирпичным заполнением, монтаж резервуарного парка, рекламная отделка фасада, внутренняя отделка и прокладка всех коммуникаций. Строительство автозаправочных станций, это всегда работа со специфическими норами и требованиями, чтобы обеспечить безопасность и эффективность. Компания «Одон-Строй» возвела множество АЗС на территории КР, что помогает нам строить качественные и безопасные взрывопожароопасные сооружения.',
                        totalQuadrature: 1000,
                        squareBuilding: 200,
                        workTime: 3
                    },
                    style: {
                        position: 'left'
                    }
                },
                {
                    active: false,
                    id: 2,
                    type: 'small', title: 'АЗС 31, мкр. Улан',
                    image: projectsSmall1,
                    projectDetail: {
                        text: 'Объект по адресу г. Бишкек, ул. Сухэ-Батора 1б. Был проведен ряд работ: возведение заправки из металлокаркаса, переходящего в здание магазина, строительство самого магазина из железобетонной конструкции с кирпичным заполнением, монтаж резервуарного парка, рекламная отделка фасада, внутренняя отделка и прокладка всех коммуникаций. Строительство автозаправочных станций, это всегда работа со специфическими норами и требованиями, чтобы обеспечить безопасность и эффективность. Компания «Одон-Строй» возвела множество АЗС на территории КР, что помогает нам строить качественные и безопасные взрывопожароопасные сооружения.',
                        totalQuadrature: 1000,
                        squareBuilding: 200,
                        workTime: 3
                    },
                },
                {
                    active: false, id: 3, type: 'small', title: 'АЗС 61, Газпром, Балыкчи',
                    image: projectsSmall2,
                    projectDetail: {
                        text: 'Объект по адресу г. Бишкек, ул. Сухэ-Батора 1б. Был проведен ряд работ: возведение заправки из металлокаркаса, переходящего в здание магазина, строительство самого магазина из железобетонной конструкции с кирпичным заполнением, монтаж резервуарного парка, рекламная отделка фасада, внутренняя отделка и прокладка всех коммуникаций. Строительство автозаправочных станций, это всегда работа со специфическими норами и требованиями, чтобы обеспечить безопасность и эффективность. Компания «Одон-Строй» возвела множество АЗС на территории КР, что помогает нам строить качественные и безопасные взрывопожароопасные сооружения.',
                        totalQuadrature: 1000,
                        squareBuilding: 200,
                        workTime: 3
                    },
                },
            ]
        },
        {
            type: 'small',
            data: [

                {
                    active: false, id: 4, type: 'small', title: 'ЧУЙГАЗ',
                    image: projectsSmall3,
                    projectDetail: {
                        text: 'Объект по адресу г. Бишкек, ул. Сухэ-Батора 1б. Был проведен ряд работ: возведение заправки из металлокаркаса, переходящего в здание магазина, строительство самого магазина из железобетонной конструкции с кирпичным заполнением, монтаж резервуарного парка, рекламная отделка фасада, внутренняя отделка и прокладка всех коммуникаций. Строительство автозаправочных станций, это всегда работа со специфическими норами и требованиями, чтобы обеспечить безопасность и эффективность. Компания «Одон-Строй» возвела множество АЗС на территории КР, что помогает нам строить качественные и безопасные взрывопожароопасные сооружения.',
                        totalQuadrature: 1000,
                        squareBuilding: 200,
                        workTime: 3
                    },
                },
                {
                    active: false, id: 5, type: 'small', title: 'АЗС 30, Сухэ-батора',
                    image: projectsSmall4,
                    projectDetail: {
                        text: 'Объект по адресу г. Бишкек, ул. Сухэ-Батора 1б. Был проведен ряд работ: возведение заправки из металлокаркаса, переходящего в здание магазина, строительство самого магазина из железобетонной конструкции с кирпичным заполнением, монтаж резервуарного парка, рекламная отделка фасада, внутренняя отделка и прокладка всех коммуникаций. Строительство автозаправочных станций, это всегда работа со специфическими норами и требованиями, чтобы обеспечить безопасность и эффективность. Компания «Одон-Строй» возвела множество АЗС на территории КР, что помогает нам строить качественные и безопасные взрывопожароопасные сооружения.',
                        totalQuadrature: 1000,
                        squareBuilding: 200,
                        workTime: 3
                    },
                },
                {
                    active: false, id: 6, type: 'small', title: 'Стадион, школа Газпром',
                    image: projectsSmall5,
                    projectDetail: {
                        text: 'Объект по адресу г. Бишкек, ул. Сухэ-Батора 1б. Был проведен ряд работ: возведение заправки из металлокаркаса, переходящего в здание магазина, строительство самого магазина из железобетонной конструкции с кирпичным заполнением, монтаж резервуарного парка, рекламная отделка фасада, внутренняя отделка и прокладка всех коммуникаций. Строительство автозаправочных станций, это всегда работа со специфическими норами и требованиями, чтобы обеспечить безопасность и эффективность. Компания «Одон-Строй» возвела множество АЗС на территории КР, что помогает нам строить качественные и безопасные взрывопожароопасные сооружения.',
                        totalQuadrature: 1000,
                        squareBuilding: 200,
                        workTime: 3
                    },
                },
            ]
        },
        {
            type: 'large',
            data: [

                {
                    active: false, id: 7, type: 'small', title: 'Развитие логистического центра',
                    image: projectsSmall6,
                    projectDetail: {
                        text: 'Объект по адресу г. Бишкек, ул. Сухэ-Батора 1б. Был проведен ряд работ: возведение заправки из металлокаркаса, переходящего в здание магазина, строительство самого магазина из железобетонной конструкции с кирпичным заполнением, монтаж резервуарного парка, рекламная отделка фасада, внутренняя отделка и прокладка всех коммуникаций. Строительство автозаправочных станций, это всегда работа со специфическими норами и требованиями, чтобы обеспечить безопасность и эффективность. Компания «Одон-Строй» возвела множество АЗС на территории КР, что помогает нам строить качественные и безопасные взрывопожароопасные сооружения.',
                        totalQuadrature: 1000,
                        squareBuilding: 200,
                        workTime: 3
                    },
                },
                {
                    active: false, id: 8, type: 'small', title: 'Расширение сталелитейного завода',
                    image: projectsSmall7,
                    projectDetail: {
                        text: 'Объект по адресу г. Бишкек, ул. Сухэ-Батора 1б. Был проведен ряд работ: возведение заправки из металлокаркаса, переходящего в здание магазина, строительство самого магазина из железобетонной конструкции с кирпичным заполнением, монтаж резервуарного парка, рекламная отделка фасада, внутренняя отделка и прокладка всех коммуникаций. Строительство автозаправочных станций, это всегда работа со специфическими норами и требованиями, чтобы обеспечить безопасность и эффективность. Компания «Одон-Строй» возвела множество АЗС на территории КР, что помогает нам строить качественные и безопасные взрывопожароопасные сооружения.',
                        totalQuadrature: 1000,
                        squareBuilding: 200,
                        workTime: 3
                    },
                },
                {
                    active: false, id: 9, type: 'large',
                    title: 'АЗС 46, BishkekPetroleum, Балыкчи',
                    image: projectsLarge2,
                    style: {
                        position: 'right'
                    },
                    projectDetail: {
                        text: 'Объект по адресу г. Бишкек, ул. Сухэ-Батора 1б. Был проведен ряд работ: возведение заправки из металлокаркаса, переходящего в здание магазина, строительство самого магазина из железобетонной конструкции с кирпичным заполнением, монтаж резервуарного парка, рекламная отделка фасада, внутренняя отделка и прокладка всех коммуникаций. Строительство автозаправочных станций, это всегда работа со специфическими норами и требованиями, чтобы обеспечить безопасность и эффективность. Компания «Одон-Строй» возвела множество АЗС на территории КР, что помогает нам строить качественные и безопасные взрывопожароопасные сооружения.',
                        totalQuadrature: 1000,
                        squareBuilding: 200,
                        workTime: 3
                    },
                },
            ]
        },
        {
            type: 'small',
            data: [
                {
                    active: false, id: 10, type: 'small', title: 'Распределительные сети, Фере',
                    image: projectsSmall8,
                    projectDetail: {
                        text: 'Объект по адресу г. Бишкек, ул. Сухэ-Батора 1б. Был проведен ряд работ: возведение заправки из металлокаркаса, переходящего в здание магазина, строительство самого магазина из железобетонной конструкции с кирпичным заполнением, монтаж резервуарного парка, рекламная отделка фасада, внутренняя отделка и прокладка всех коммуникаций. Строительство автозаправочных станций, это всегда работа со специфическими норами и требованиями, чтобы обеспечить безопасность и эффективность. Компания «Одон-Строй» возвела множество АЗС на территории КР, что помогает нам строить качественные и безопасные взрывопожароопасные сооружения.',
                        totalQuadrature: 1000,
                        squareBuilding: 200,
                        workTime: 3
                    },
                },
                {
                    active: false, id: 11, type: 'small', title: 'Фруктохранилище',
                    image: projectsSmall9,
                    projectDetail: {
                        text: 'Объект по адресу г. Бишкек, ул. Сухэ-Батора 1б. Был проведен ряд работ: возведение заправки из металлокаркаса, переходящего в здание магазина, строительство самого магазина из железобетонной конструкции с кирпичным заполнением, монтаж резервуарного парка, рекламная отделка фасада, внутренняя отделка и прокладка всех коммуникаций. Строительство автозаправочных станций, это всегда работа со специфическими норами и требованиями, чтобы обеспечить безопасность и эффективность. Компания «Одон-Строй» возвела множество АЗС на территории КР, что помогает нам строить качественные и безопасные взрывопожароопасные сооружения.',
                        totalQuadrature: 1000,
                        squareBuilding: 200,
                        workTime: 3,

                    },
                },
                {
                    active: false, id: 12, type: 'small', title: 'Распределительные сети, Чон-арык',
                    image: projectsSmall10,
                    projectDetail: {
                        text: 'Объект по адресу г. Бишкек, ул. Сухэ-Батора 1б. Был проведен ряд работ: возведение заправки из металлокаркаса, переходящего в здание магазина, строительство самого магазина из железобетонной конструкции с кирпичным заполнением, монтаж резервуарного парка, рекламная отделка фасада, внутренняя отделка и прокладка всех коммуникаций. Строительство автозаправочных станций, это всегда работа со специфическими норами и требованиями, чтобы обеспечить безопасность и эффективность. Компания «Одон-Строй» возвела множество АЗС на территории КР, что помогает нам строить качественные и безопасные взрывопожароопасные сооружения.',
                        totalQuadrature: 1000,
                        squareBuilding: 200,
                        workTime: 3
                    },
                }
            ]
        },

    ]);
    const [discriptionPosition, setDiscriptionPosition] = useState({
        busyRows: 0,
        activeTemplate: 666,
        style: {

        }
    })

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1000px)' })

    // const activeProject = data.find(p => p.active);

    const discriptionStylesTemplate = {
        xl: {
            gridRowStart: 1,
            gridRowEnd: 2,
            gridColumnStart: 1,
            gridColumnEnd: 4,
        },
        md: {
            gridColumn: '1 / 2',
            gridRow: '1 / 2',
        }
    }


    const activeHandler = (isActive, templateKey, projectkey, type) => {
        let newState = [...data]
        newState = newState.map((template) => {
            let newTemplate = { ...template }
            newTemplate = {
                ...newTemplate,
                data: newTemplate.data.map(project =>
                    ({ ...project, active: false }))
            }
            return newTemplate
        })
        let busyRows = 0
        newState.forEach((template, iT) => {
            if (iT < templateKey + 1) {
                if (template.type === 'small') busyRows = busyRows + 1
                else busyRows = busyRows + 2
            }
        })
        console.log('busyRows', busyRows)
        newState[templateKey].data[projectkey].active = isActive
        setDiscriptionPosition(prev => ({
            ...prev,
            busyRows: isActive ? busyRows : 0,
            activeTemplate: isActive ? templateKey : 666,
            style: discriptionStyleGenerator(templateKey + 1, type, busyRows)
        }))

        setData(newState)
    }

    const discriptionStyleGenerator = (index, type, busyRows) => {
        const multiply = type === 'small' ? 1 : 2
        console.log('multiply', multiply, 'index', index)
        return isTabletOrMobile ?
            discriptionStylesTemplate.md : {
                gridColumnStart: discriptionStylesTemplate.xl.gridColumnStart,
                gridColumnEnd: discriptionStylesTemplate.xl.gridColumnEnd,
                gridRowStart: discriptionStylesTemplate.xl.gridRowStart + busyRows,
                gridRowEnd: discriptionStylesTemplate.xl.gridRowEnd + busyRows,
            }
    }

    const stylesTemplate = {
        xl: {
            gridRowStart: 1,
            gridRowEnd: 3,
            left: {
                gridColumnStart: 1,
                gridColumnEnd: 3,
            },
            right: {
                gridColumnStart: 2,
                gridColumnEnd: 4,
            }
        },
        md: {
            gridColumn: '1 / 2',
            gridRow: '1 / 2',
        }
    }

    const styleGenerator = (templateId, position = 'left') => {
        let styles = isTabletOrMobile ?
            stylesTemplate.md : {
                gridColumnStart: stylesTemplate.xl[position].gridColumnStart,
                gridColumnEnd: stylesTemplate.xl[position].gridColumnEnd,
                gridRowStart: templateId > 1 ?
                    stylesTemplate.xl.gridRowStart + templateId :
                    stylesTemplate.xl.gridRowStart,
                gridRowEnd: templateId > 1 ?
                    stylesTemplate.xl.gridRowEnd + templateId :
                    stylesTemplate.xl.gridRowEnd,
            }
        if ((styles.gridRowStart > discriptionPosition.busyRows + 2 && discriptionPosition.activeTemplate === templateId - 1) ||
            (templateId - 1 > discriptionPosition.activeTemplate)
        ) {
            styles.gridRowStart = styles.gridRowStart + 1
            styles.gridRowEnd = styles.gridRowEnd + 1
        }


        return styles
    }
    return (
        // redirect("/ru")
        <main>
            <div className='container'>
                <h1 className={styles.title}>
                    Портфолио наших Проектов
                </h1>
                <div className={styles.gridWrapper}>
                    {
                        data.map((template, templateKey) =>
                            template.data.map((project, projectkey) => (
                                project.type === 'large' ? (
                                    <LargeProject
                                        style={styleGenerator(templateKey + 1, project.style.position)}
                                        key={project.id}
                                        active={project.active}
                                        title={project.title}
                                        image={project.image}
                                        className={styles.largeProject}
                                        setActive={(isActive) =>
                                            activeHandler(isActive,
                                                templateKey,
                                                projectkey,
                                                template.type
                                            )}
                                    />
                                ) : (
                                    <SmallProject
                                        setActive={(isActive) =>
                                            activeHandler(isActive,
                                                templateKey,
                                                projectkey,
                                                template.type
                                            )}
                                        key={project.id}
                                        title={project.title}
                                        image={project.image}
                                        active={project.active}
                                        className={styles.smallProject} />
                                )
                            )
                            )
                        )
                    }
                    {data.map((template, templateKey) =>
                        template.data.map((project, projectKey) =>
                            project.active ? <DescriptionProject
                                style={discriptionPosition.style}
                                key={`${templateKey}${projectKey}`}
                                project={project}
                            /> : <></>
                        )

                    )}
                </div>
                {/* <DescriptionProject
                    project={data.find((item) => item.active)}
                /> */}

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