import { getDictionary } from "../../../get-dictionary";
import { i18n } from "../../../i18n-config";
import LandingContant from "./components/LandingContant/LandingContant"





export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ lang: locale }));
}

export async function generateMetadata({ params: { lang } }) {
    return {
        title: "Одон Строй"| "Здания из сборных конструкций Бишкек",
        description: "Одон Строй | Строительство зданий из сборных конструкций ✅Лицензированная компания✅Гарантия на обслуживание⚡️Получите консультацию на сайте",
    };
}

export default function Home({ params: { lang } }) {
    const dictionary = getDictionary(lang);

    return (
        <LandingContant />
    );
}






