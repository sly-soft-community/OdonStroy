import "../../globals.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });



export default async function RootLayout({ children, params }) {
    return (
        <div className={`${inter.className} page`}>
            <Header />
            {children}
            <Footer />
        </div>
    );
}
