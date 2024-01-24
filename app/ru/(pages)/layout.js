import "../globals.scss";
import Header from "../components/Header/Header";

import { getDictionary } from "../../../get-dictionary";


<<<<<<< HEAD

export async function generateMetadata({ params: { lang } }) {
    return {
        title: "Одон Строй"| "Здания из сборных конструкций Бишкек",
        description: "Одон Строй | Строительство зданий из сборных конструкций ✅Лицензированная компания✅Гарантия на обслуживание⚡️Получите консультацию на сайте",
    };
}
=======
export async function generateMetadata({ params: { lang } }) {
    return {
        title: "Одон Строй" | "Здания из сборных конструкций Бишкек",
        description: "Одон Строй | Строительство зданий из сборных конструкций ✅Лицензированная компания✅Гарантия на обслуживание⚡️Получите консультацию на сайте",
    };
}

>>>>>>> 76f498ae77a2987557962db678cb45d44460f02b

export default async function RootLayout({ children, params }) {
    return (
        <div className={` page`}>
            {children}
        </div>
    );
}
