import "../globals.scss";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";


export async function generateMetadata({ params: { lang } }) {
    return {
        title: "Одон Строй" | "Здания из сборных конструкций Бишкек",
        description: "Одон Строй | Строительство зданий из сборных конструкций ✅Лицензированная компания✅Гарантия на обслуживание⚡️Получите консультацию на сайте",
    };
}


export default async function RootLayout({ children }) {
    return (
        <div className={` page`}>
            <Header />
            {children}
            <Footer />
        </div>
    );
}
