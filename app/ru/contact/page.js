import React from 'react';
import ContactContant from './components/ContactContant/ContactContant';


export async function generateMetadata({ params: { lang } }) {
    return {
        title: "Одон Строй | Контакты",
        description: "Одон Строй | Строительство зданий из металлоконструкций ✅Лицензированная компания✅Гарантия на обслуживание⚡️Получите консультацию на сайте",
        alternates: {
            languages: {
                "x-default": "/",
                ru: "/ru",
                en: "/en",
            },
        },
    };
}

const page = () => {
    return (
        <ContactContant />
    );
};

export default page;