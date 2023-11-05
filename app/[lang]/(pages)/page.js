import Hero from "./components/Hero/Hero";
import styles from "./page.module.scss";
import { getDictionary } from "../../../get-dictionary";
import { i18n } from "../../../i18n-config";
import AboutCompany from "./components/AboutCompany/AboutCompany";
import Services from "./components/Services/Services";
import StagesOfWork from "./components/StagesOfWork/StagesOfWork";
import Partners from "./components/Partners/Partners";
import Reviews from "./components/Reviews/Reviews";
import Docs from "./components/Docs/Docs";
import Сontacts from "./components/Сontacts/Сontacts";
import Footer from "@/components/Footer/Footer";

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({ params: { lang } }) {
    const dictionary = getDictionary(lang);
    return {
        title: dictionary["meta-data"]["title"],
        description: dictionary["meta-data"]["description"],
        alternates: {
            languages: {
                "x-default": "/",
                ru: "/ru",
                en: "/en",
            },
        },
    };
}

export default function Home({ params: { lang } }) {
    const dictionary = getDictionary(lang);

    return (
        <main className={styles.main}>
            <Hero dictionary={dictionary} />
            <AboutCompany />
            <Services dictionary={dictionary} />
            <StagesOfWork />
            <Partners />
            <Reviews />
            <Docs />
            <Сontacts />
            <Footer dictionary={dictionary} />
        </main>
    );
}
