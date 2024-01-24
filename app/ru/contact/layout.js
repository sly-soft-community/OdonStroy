import "../globals.scss";
// import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export async function generateMetadata({ params: { lang } }) {
    return {
<<<<<<< HEAD
        title: "Одон Строй"| "Здания из сборных конструкций Бишкек",
=======
        title: "Одон Строй" | "Здания из сборных конструкций Бишкек",
>>>>>>> 76f498ae77a2987557962db678cb45d44460f02b
        description: "Одон Строй | Строительство зданий из сборных конструкций ✅Лицензированная компания✅Гарантия на обслуживание⚡️Получите консультацию на сайте",
    };
}

export default async function RootLayout({ children }) {
    // const [modalView, setModalView] = useState(false)

    return (
        <div className={` page`}>
            {children}
            <Footer />
        </div>
    );
}
