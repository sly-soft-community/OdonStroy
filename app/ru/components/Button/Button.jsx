import React from 'react';
import styles from './Button.module.scss';

const Button = ({
    type = 'default',
    text,
    children,
    onClick,
    disabled = false,
}) => {
    const types = {
        default: styles.default,   // "Получить консультацию"
        showMore: styles.showMore, // "Показать больше"
        readMore: styles.readMore, // "Читать дальше"
        submitForm: styles.submitForm, // "Отправить форму"
    };

    const className = `${disabled ? styles.disabled : ''} ${styles.button} ${types[type] || styles.default} ${disabled ? styles.disabled : ''}`;

    return (
        <button className={className} onClick={onClick} disabled={disabled}>
            {text || children}
        </button>
    );
};

export default Button;
