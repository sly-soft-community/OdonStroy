import "../globals.scss";
import Header from "../components/Header/Header";

import { getDictionary } from "../../../get-dictionary";


export async function generateMetadata({ params: { lang } }) {
    return {
        title: "Одон Строй" | "Здания из сборных конструкций Бишкек",
        description: "Одон Строй | Строительство зданий из сборных конструкций ✅Лицензированная компания✅Гарантия на обслуживание⚡️Получите консультацию на сайте",
    };
}


export default async function RootLayout({ children, params }) {
    return (
        <div className={` page`}>
            {children}
        </div>
    );
}
