import React from 'react';
import Image from 'next/image';
import map from '@/media/map.svg'
import styles from "./Map.module.scss"

const Map = () => {
    return (
        <div>
            <Image src={map} alt="" className={styles.map} />
        </div>
    );
};

export default Map;