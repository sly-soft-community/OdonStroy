import React from 'react';
import styles from "./LargeProject.module.scss";
import Image from 'next/image';
import projectsLarge from '@/media/img/projects/projectsLarge.png'

const LargeProject = () => {
    return (
        <div>
            
            <Image src={projectsLarge} alt="" className={styles.img} />
            
        </div>
    );
};

export default LargeProject;