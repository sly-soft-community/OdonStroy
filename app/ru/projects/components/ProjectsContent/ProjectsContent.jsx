'use client'
import React, { useState, Suspense, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive'
import styles from "./ProjectsContent.module.scss";
import LargeProject from '../LargeProject/LargeProject';
import SmallProject from '../SmallProject/SmallProject';
import DescriptionProject from '../DescriptionProject/DescriptionProject';
import ProjectMap from '../ProjectMap/ProjectMap';
import { baseState } from './data';
import ModalWindow from '@/contact/components/ModalWindow/ModalWindow';
import Button from '@/components/Button/Button';



const ProjectsContent = () => {
    const [data, setData] = useState([...baseState]);
    const [modalView, setModalView] = useState(false);
    const [discriptionPosition, setDiscriptionPosition] = useState({
        busyRows: 0,
        activeTemplate: 666,
        style: {}
    })

    const isTablet = useMediaQuery({ query: '(max-width: 1000px)' })
    const isMobile = useMediaQuery({ query: '(max-width: 768px)' })


    const discriptionStylesTemplate = {
        xl: {
            gridRowStart: 1,
            gridRowEnd: 2,
            gridColumnStart: 1,
            gridColumnEnd: 4,
        },
        md: {
            gridRowStart: 1,
            gridRowEnd: 2,
            gridColumnStart: 1,
            gridColumnEnd: 3,
        },
        sm: {
            gridRowStart: 1,
            gridRowEnd: 2,
            gridColumnStart: 1,
            gridColumnEnd: 2,
        },
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
                if (isTablet) {
                    if (isMobile) {
                        template.data.forEach((project, iP) => {
                            if (iT === templateKey) {
                                if (iP < projectkey + 1) busyRows = busyRows + 1
                            }
                            else {
                                busyRows = busyRows + 1
                            }
                        })
                    }
                    else {
                        busyRows = busyRows + 1
                        template.data.forEach((project, iP) => {
                            if (iT === templateKey) {
                                if (iP < projectkey + 1) {
                                    if (template.type === 'large') {
                                        busyRows = busyRows + 0.333
                                    } else {
                                        busyRows = busyRows + 0.222

                                    }
                                }
                            } else {
                                busyRows = busyRows + 0.333
                            }
                        }
                        )
                    }
                } else {
                    if (template.type === 'small') busyRows = busyRows + 1
                    else busyRows = busyRows + 2
                }
                if (template.type === 'small') busyRows = Math.round(busyRows)
            }
        })
        busyRows = Math.round(busyRows)

        newState[templateKey].data[projectkey].active = isActive
        if (!isActive) {
            setTimeout(() => {
                setDiscriptionPosition(prev => ({
                    ...prev,
                    busyRows: isActive ? busyRows : 0,
                    activeTemplate: isActive ? templateKey : 666,
                    style: discriptionStyleGenerator(templateKey + 1, type, busyRows)
                }))
            }, 500)

        } else {
            setDiscriptionPosition(prev => ({
                ...prev,
                busyRows: isActive ? busyRows : 0,
                activeTemplate: isActive ? templateKey : 666,
                style: discriptionStyleGenerator(templateKey + 1, type, busyRows)
            }))
        }


        setData(newState)
    }

    const discriptionStyleGenerator = (index, type, busyRows) => {
        return isTablet ?
            (isMobile ?
                {
                    gridColumnStart: discriptionStylesTemplate.sm.gridColumnStart,
                    gridColumnEnd: discriptionStylesTemplate.sm.gridColumnEnd,
                    gridRowStart: discriptionStylesTemplate.sm.gridRowStart + busyRows,
                    gridRowEnd: discriptionStylesTemplate.sm.gridRowEnd + busyRows,
                } :
                {
                    gridColumnStart: discriptionStylesTemplate.md.gridColumnStart,
                    gridColumnEnd: discriptionStylesTemplate.md.gridColumnEnd,
                    gridRowStart: discriptionStylesTemplate.md.gridRowStart + busyRows,
                    gridRowEnd: discriptionStylesTemplate.md.gridRowEnd + busyRows,
                }
            )

            : {
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
            left: {
                gridRowStart: 1,
                gridRowEnd: 2,
            },
            right: {
                gridRowStart: 2,
                gridRowEnd: 3,
            },
            gridColumnStart: 1,
            gridColumnEnd: 3,
        },
        sm: {
            gridRowStart: 1,
            gridRowEnd: 2,
            gridColumnStart: 1,
            gridColumnEnd: 2,
        },
    }

    const styleGenerator = (templateId, position = 'left') => {
        let styles = isTablet ?
            (isMobile ? {
                gridColumnStart: 'auto',
                gridColumnEnd: 'auto',
                gridRowStart: 'auto',
                gridRowEnd: 'auto',
            }
                : {
                    gridColumnStart: stylesTemplate.md.gridColumnStart,
                    gridColumnEnd: stylesTemplate.md.gridColumnEnd,
                    gridRowStart: templateId > 1 ?
                        stylesTemplate.md[position].gridRowStart + templateId :
                        stylesTemplate.md[position].gridRowStart,
                    gridRowEnd: templateId > 1 ?
                        stylesTemplate.md[position].gridRowEnd + templateId :
                        stylesTemplate.md[position].gridRowEnd,
                }
            )
            : {
                gridColumnStart: stylesTemplate.xl[position].gridColumnStart,
                gridColumnEnd: stylesTemplate.xl[position].gridColumnEnd,
                gridRowStart: templateId > 1 ?
                    stylesTemplate.xl.gridRowStart + templateId :
                    stylesTemplate.xl.gridRowStart,
                gridRowEnd: templateId > 1 ?
                    stylesTemplate.xl.gridRowEnd + templateId :
                    stylesTemplate.xl.gridRowEnd,
            }

        if (isTablet) {
            if (isMobile) {
            } else {
                if ((styles.gridRowStart > discriptionPosition.busyRows + 2 && discriptionPosition.activeTemplate === templateId - 1) ||
                    (discriptionPosition.activeTemplate && templateId !== 1)
                ) {
                    styles.gridRowStart = styles.gridRowStart + 1
                    styles.gridRowEnd = styles.gridRowEnd + 1
                }
            }
        } else {
            if ((styles.gridRowStart > discriptionPosition.busyRows + 2 && discriptionPosition.activeTemplate === templateId - 1) ||
                (templateId - 1 > discriptionPosition.activeTemplate)
            ) {
                styles.gridRowStart = styles.gridRowStart + 1
                styles.gridRowEnd = styles.gridRowEnd + 1
            }
        }

        return styles
    }

    useEffect(() => {
        if (isTablet) {
            if (isMobile) {
                setData(baseState)
            } else {
                let newData = [...data]
                let newEllement = data[2]
                newData.splice(2, 1)
                newData.push(newEllement)
                setData(newData)
            }
        }
        else {
            setData(baseState)
        }
    }, [isTablet, isMobile])

    return (
        <Suspense fallback={<div>Загрузка...</div>}>
            <main>
                <ModalWindow
                    isOpen={modalView}
                    setClose={() => setModalView(false)} />
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
                                            setActive={(isActive) => {
                                                if (isTablet) {
                                                    if (isMobile) {
                                                        activeHandler(isActive,
                                                            templateKey,
                                                            projectkey,
                                                            template.type
                                                        )
                                                    }
                                                    else {
                                                        if (project.id !== 12) {
                                                            activeHandler(isActive,
                                                                templateKey,
                                                                projectkey,
                                                                template.type
                                                            )
                                                        }
                                                    }
                                                } else {
                                                    activeHandler(isActive,
                                                        templateKey,
                                                        projectkey,
                                                        template.type
                                                    )
                                                }
                                            }}
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
                                <DescriptionProject
                                    isActive={project.active}
                                    style={discriptionPosition.style}
                                    key={`${templateKey}${projectKey}`}
                                    project={project}
                                />
                            )

                        )}
                    </div>


                    <div className={styles.boxBtn}>
                        <Button  onClick={() => setModalView(true)} >
                        Получить консультацию
                        </Button>
                    </div>
                </div>
                <div className={`${styles.mapSection} container`}>
                    <h1 className={styles.titleObj}>
                        География объектов
                    </h1>
                    <ProjectMap />
                </div>
            </main>
        </Suspense>
    );
};

export default ProjectsContent;



