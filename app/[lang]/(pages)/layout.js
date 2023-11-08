import "../globals.scss";
import { Inter } from "next/font/google";
import Header from "../components/Header/Header";

import { getDictionary } from "../../../get-dictionary";

const inter = Inter({ subsets: ["latin"] });


export async function generateMetadata({ params: { lang } }) {
    return {
        title: 'Одон строй',
        description: 'строительная компания',
        alternates: {
            languages: {
                "x-default": "/",
                ru: "/ru",
                en: "/en",
            },
        },
    };
}

export default async function RootLayout({ children, params }) {
    return (
        <div className={`${inter.className} page`}>
            {children}
        </div>
    );
}
