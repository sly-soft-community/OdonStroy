import React from 'react';
import ProjectsContent from './components/ProjectsContent/ProjectsContent';


export async function generateMetadata({ params: { lang } }) {
    return {
        title: "Одон Строй"| "Здания из сборных конструкций Бишкек",
        description: "Одон Строй | Строительство зданий из сборных конструкций ✅Лицензированная компания✅Гарантия на обслуживание⚡️Получите консультацию на сайте",
    };
}


const Page = () => {
   

    return (
        <ProjectsContent />
    );
};

export default Page;



