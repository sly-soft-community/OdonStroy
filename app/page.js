import GoToApp from "./ru/components/GoToApp/GoToApp";
import { i18n } from "../i18n-config";
import Image from "next/image";
import loaderImg from "@/media/icons/pageLoader.svg"
import styles from "./pageStyles.module.scss"


export default function Home() {
    return (
        <main className={styles.main}>
            <Image
                src={loaderImg}
                alt="partner image"
                className={styles.loader}
            />
            <GoToApp path={i18n.defaultLocale} />
        </main>
    );
}
