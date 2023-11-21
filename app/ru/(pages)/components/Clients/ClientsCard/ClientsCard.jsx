import React from 'react';
import styles from "./ClientsCard.module.scss"
import Image from 'next/image';

const ClientsCard = ({img}) => {
    return (
        <div className={styles.slide}>
            <Image src={img} alt="" className={styles.slide__img} />
        </div>
    );
};

export default ClientsCard;
