'use client'
import styles from './NavMark.module.scss'
import { usePathname, useRouter } from "next/navigation";

const NavMark = ({ children, href, top = false }) => {
    const pathname = usePathname()
    return (
        <div className={styles.box}>
            {children}
            {pathname === `${href}/` && (
                <div
                    className={`${styles.markLine} ${
                        top ? styles.markLine_top : styles.markLine_bottom
                    }`}
                />
            )}
        </div>
    )
}

export default NavMark
