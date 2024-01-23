import "../globals.scss";
import { Inter } from "next/font/google";
import Header from "../components/Header/Header";

import { getDictionary } from "../../../get-dictionary";

const inter = Inter({ subsets: ["latin"] });


export async function generateMetadata({ params: { lang } }) {
    return {
        title: "Одон Строй" | "Здания из сборных конструкций Бишкек",
        description: "Одон Строй | Строительство зданий из сборных конструкций ✅Лицензированная компания✅Гарантия на обслуживание⚡️Получите консультацию на сайте",
    };
}
// export async function generateMetadata({ params: { lang } }) {
//     return {
//         title: "Одон Строй" | "Строительство металлокаркас Бишкек",
//         description: "Одон Строй | Строительство зданий из металлоконструкций ✅Лицензированная компания✅Гарантия на обслуживание⚡️Получите консультацию на сайте",
//         alternates: {
//             languages: {
//                 "x-default": "/",
//                 ru: "/ru",
//                 en: "/en",
//             },
//         },
//     };
// }

export default async function RootLayout({ children, params }) {
    return (
        <div className={`${inter.className} page`}>
            {children}
        </div>
    );
}
