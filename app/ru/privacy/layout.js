import "../globals.scss";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";





export default async function RootLayout({ children }) {
    return (
        <div className={` page`}>
            <Header />
            {children}
            <Footer />
        </div>
    );
}
