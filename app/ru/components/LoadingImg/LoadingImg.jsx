'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import styles from "./LoadingImg.module.scss"
import loaderImg from "@/media/icons/my-loader.svg"

const LoadingImage = ({ src, alt = 'image', className }) => {
    const [isLoading, setLoading] = useState(true);

    const handleLoad = () => {
        console.log('Загрузка завершена')
        setLoading(false);
    };

    return (
        <div>
            {isLoading && <div
                className={styles.placeholder}
            >
                <Image
                    src={loaderImg}
                    alt={'loaderImg'}
                    className={styles.loadindImg}
                />
            </div>}
            <Image
                src={src}
                alt={alt}
                className={isLoading ? styles.loadStyle : className}
                onLoad={handleLoad}
            />
        </div>
    );
};

export default LoadingImage;