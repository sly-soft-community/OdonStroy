import "../globals.scss";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";



export default async function RootLayout({ children }) {
    // const [modalView, setModalView] = useState(false)

    return (
        <div className={` page`}>
            <Header />
            {children}
            <Footer />
        </div>
    );
}
