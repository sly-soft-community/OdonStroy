import React from 'react';
import styles from './Select.module.scss'
import Link from 'next/link'
import {usePathname} from 'next/navigation'

const Select = ({value, onChange, data}) => {
    const pathName = usePathname()
    const redirectedPathName = (locale) => {
        if (!pathName) return '/'
        const segments = pathName.split('/')
        segments[1] = locale
        return segments.join('/')
    }

    return (
        <div className={styles.box}>
            {data.map((locale, key) =>
                <Link
                    style={{'display': value !== locale ? 'block' : 'none'}}
                    className={styles.item}
                    onMouseDown={(e) => e.preventDefault()}
                    key={key} href={redirectedPathName(locale)}>{String(locale).toUpperCase()}</Link>
            )}
        </div>
    );
};

export default Select;
