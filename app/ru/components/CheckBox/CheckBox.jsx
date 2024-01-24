import confirmIcon from '@/media/icons/confirm-icon.svg'
import Image from 'next/image'
import styles from './CheckBox.module.scss'
import { useRouter } from "next/navigation";

const CheckBox = ({ link = false, ...props }) => {
    const router = useRouter()
    return (
        <div
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => props.onClick(!props.value)}
            className={styles.box}>
            <div
                className={
                    props.value ? `${styles.mark} ${styles.active}` : styles.mark
                }>
                {props.value && <Image alt='check-icon' className={styles.icon} src={confirmIcon} />}
            </div>
            <div className={styles.label}>{props.label} {link ?
                <span
                    onClick={(e) => {
                        e.stopPropagation()
                        router.push('/ru/privacy/')
                    }}
                    className={styles.link}>политике конфиденциальности</span>
                : ''} </div>
        </div>
    )
}

export default CheckBox
